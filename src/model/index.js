import falcor from 'falcor';
import FalcorHttpDataSource from 'falcor-http-datasource';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import _ from 'lodash';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';

const initializeModels = () => {
  const remoteModel = new falcor.Model({
    source: new FalcorHttpDataSource('/model.json')
  });
  const localModel = new falcor.Model({
    cache: {
      loggedIn: false
    }
  });
  localModel.update = obj => {
    localModel.setCache(Object.assign(localModel.getCache(), obj));
  };
  if (localStorage.getItem('token')) {
    remoteModel._source = new FalcorHttpDataSource('/model.json', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    localModel.update({
      loggedIn: true
    });
  }
  return { remoteModel, localModel };
};

const patchModel$ = (model$) => {
  model$.getData = (paths, entryPath, filter = true) => {
    if (!paths) {
      return new Error('paths must not be falsy');
    }
    if (_.isArray(paths) && _.isFunction(paths)) {
      return new Error('paths must be of type Array or Function');
    }
    let json$;
    if (_.isFunction(paths)) {
      if (_.isArray(paths()[0])) {
        json$ = model$.mergeMap(m => Observable.fromPromise(m.get(...paths())));
      } else {
        json$ = model$.mergeMap(m => Observable.fromPromise(m.get(paths())));
      }
    } else {
      if (paths[0].constructor === Array) {
        json$ = model$.mergeMap(m => Observable.fromPromise(m.get(...paths)));
      } else {
        json$ = model$.mergeMap(m => Observable.fromPromise(m.get(paths)));
      }
    }
    let unfiltered$;
    if (_.isFunction(entryPath)) {
      unfiltered$ = json$.
        map(json => _.get(json, ['json', ...entryPath()]));
    } else {
      unfiltered$ = json$.
        map(json => _.get(json, entryPath ? ['json', ...entryPath] : ['json']));
    }
    if (!filter) return unfiltered$;
    return unfiltered$.filter(data => data);
  };
};

const model = ({ get$, getLocal$, call$, login$, logout$, tagSearchText$, toggleTag$ }) => {
  const model$ = new ReplaySubject(1);
  const { remoteModel, localModel } = initializeModels();
  const nextCombinedModel = () => {
    model$.next(new falcor.Model({
      cache: {
        ...remoteModel.getCache(),
        ...localModel.getCache()
      }
    }));
  };

  get$.subscribe(paths => {
    remoteModel.get(...paths).
      subscribe(nextCombinedModel, console.log, () => console.log('completed'));
  });

  getLocal$.subscribe(() => {
    nextCombinedModel();
  });

  call$.subscribe(([callPath, args, refPaths, thisPaths, cb]) => {
    remoteModel.call(callPath, args, refPaths, thisPaths).
      subscribe(() => {
        nextCombinedModel();
        if (cb) {
          cb();
        }
      }, console.log, () => console.log('completed'));
  });

  login$.subscribe(({ profile, token }) => {
    localStorage.setItem('token', token);
    localModel.update({ loggedIn: true });
    remoteModel.call(['users', 'create'], [profile]).then(() => {
      remoteModel._source = new FalcorHttpDataSource('/model.json', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      nextCombinedModel();
    });
  });

  logout$.subscribe(() => {
    localStorage.removeItem('token');
    localModel.update({ loggedIn: false });
    remoteModel._source = new FalcorHttpDataSource('/model.json');
    nextCombinedModel();
  });

  tagSearchText$.subscribe(text => {
    localModel.update({ tagSearchText: text });
    nextCombinedModel();
  });

  tagSearchText$.debounceTime(250).
    map(key => {
      const result$ = Observable.fromPromise(
        remoteModel.get(
          ['tagsByText', key, { from: 0, to: 40 }, ['text', 'id']]
        )
      );
      Observable.of(1).
        delay(200).
        takeUntil(result$).subscribe(() => {
          localModel.update({ tagsByText: 'isLoading' });
          nextCombinedModel();
        });
      return result$;
    }).switchMap(data => data).
    subscribe(data => {
      if (!data) {
        localModel.update({ tagsByText: 'not found' });
      }
      nextCombinedModel();
    });

  toggleTag$.subscribe(tags => {
    localModel.update({ chosenTags: tags });
    nextCombinedModel();
  });

  patchModel$(model$);
  return model$;
};

export default model;
