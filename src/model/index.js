import falcor from 'falcor';
import FalcorHttpDataSource from 'falcor-http-datasource';
import { OrderedMap, Map, fromJS } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import _ from 'lodash';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';

const FALCOR_PATH_KEY = '$__path';

const model = ({ get$ }) => {
  const data$ = new ReplaySubject(1);
  const state$ = data$.scan((acc, newData) => {
    return acc.mergeDeep(fromJS(newData, (key, value) => {
      let result = value;
      if (value.has(FALCOR_PATH_KEY)) {
        result = value.filter((v, k) => k !== FALCOR_PATH_KEY);
      }
      return result.toOrderedMap();
    }));
  }, Map()).share(1);
  const rootModel = new falcor.Model({
    source: new FalcorHttpDataSource('/model.json')
  });
  get$.subscribe(paths => {
    rootModel.get(...paths).
      then(data => {
        if (data && data.json) {
          data$.next(data.json);
        }
      });
  });
  return state$;
};

export default model;