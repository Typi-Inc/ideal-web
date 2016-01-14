import falcor from 'falcor';
import FalcorHttpDataSource from 'falcor-http-datasource';
import Rx from 'rx';
import _ from 'lodash';

const model = ({ getQuery$ }) => {
  const data$ = new Rx.ReplaySubject(1);
  const state$ = data$.scan((acc, newData) => _.merge(acc, newData));

  const rootModel = new falcor.Model({
    source: new FalcorHttpDataSource('http://localhost:8080/model.json')
  });
  getQuery$.subscribe(
    (paths, loadingObj) => {
      if (loadingObj) {
        data$.onNext(loadingObj);
      }
      rootModel.get(...paths).
        then(data => data && data.json && data$.onNext(data.json));
    }
  );
  return state$;
};

export default model;
