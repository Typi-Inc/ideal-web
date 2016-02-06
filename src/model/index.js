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

const model = ({ get$, getLocal$, login$, logout$ }) => {
  const model$ = new ReplaySubject(1);
  const remoteModel = new falcor.Model({
    source: new FalcorHttpDataSource('/model.json')
  });
  const localModel = new falcor.Model();
  if (localStorage.getItem('token')) {
    remoteModel.source = new FalcorHttpDataSource('/model.json', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    localModel.setCache({
      loggedIn: true
    });
  }
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

  login$.subscribe(token => {
    localStorage.setItem('token', token);
    localModel.setCache(Object.assign(localModel.getCache(), { loggedIn: true }));
    remoteModel.source = new FalcorHttpDataSource('/model.json', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    nextCombinedModel();
  });

  logout$.subscribe(() => {
    localStorage.removeItem('token');
    localModel.setCache(Object.assign(localModel.getCache(), { loggedIn: false }));
    remoteModel.source = new FalcorHttpDataSource('/model.json');
    nextCombinedModel();
  });

  model$.getData = (paths, filter = true) => {
    if (!paths) {
      return new Error('paths must not be falsy');
    }
    if (paths.constructor !== Array) {
      return new Error('paths must be of type Array');
    }
    let json$;
    let entryPath;
    if (paths[0].constructor === Array) {
      json$ = model$.mergeMap(m => Observable.fromPromise(m.get(...paths)));
      entryPath = paths[0][0];
    } else {
      json$ = model$.mergeMap(m => Observable.fromPromise(m.get(paths)));
      entryPath = paths[0];
    }
    const unfiltered$ = json$.
      map(json => _.get(json, ['json', entryPath]));
    if (!filter) return unfiltered$;
    return unfiltered$.filter(data => data);
  };
  return model$;
};

export default model;
