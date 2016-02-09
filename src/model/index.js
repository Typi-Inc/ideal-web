import falcor from 'falcor';
import FalcorHttpDataSource from 'falcor-http-datasource';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import _ from 'lodash';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';

const initializeModels = () => {
  const remoteModel = new falcor.Model({
    source: new FalcorHttpDataSource('/model.json')
  });
  const localModel = new falcor.Model({
    cache: {
      loggedIn: false
    }
  });
  if (localStorage.getItem('token')) {
    remoteModel._source = new FalcorHttpDataSource('/model.json', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    localModel.setCache({
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
    const unfiltered$ = json$.
      map(json => _.get(json, entryPath ? ['json', ...entryPath] : ['json']));
    if (!filter) return unfiltered$;
    return unfiltered$.filter(data => data);
  };
};

const model = ({ get$, getLocal$, call$, login$, logout$ }) => {
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

  call$.subscribe(args => {
    remoteModel.call(...args).
      subscribe(nextCombinedModel, console.log, () => console.log('completed'));
  });

  login$.subscribe(({ profile, token }) => {
    localStorage.setItem('token', token);
    localModel.setCache(Object.assign(localModel.getCache(), { loggedIn: true }));
    remoteModel.call(['users', 'create'], [profile]).then(data => {
      console.log(data, 'after successfull login');
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
    localModel.setCache(Object.assign(localModel.getCache(), { loggedIn: false }));
    remoteModel._source = new FalcorHttpDataSource('/model.json');
    nextCombinedModel();
  });

  patchModel$(model$);
  return model$;
};

export default model;
