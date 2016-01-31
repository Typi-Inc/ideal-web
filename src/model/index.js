import falcor from 'falcor';
import FalcorHttpDataSource from 'falcor-http-datasource';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/share';

const model = ({ get$ }) => {
  const model$ = new ReplaySubject(1);
  const remoteModel = new falcor.Model({
    source: new FalcorHttpDataSource('/model.json')
  });
  const localModel = new falcor.Model();
  const nextCombinedModel = data => {
    console.log(data);
    model$.next(new falcor.Model({
      cache: Object.assign(
        remoteModel.getCache(),
        localModel.getCache()
      )
    }));
  };

  get$.subscribe(paths => {
    remoteModel.get(...paths).
      subscribe(nextCombinedModel, console.log, () => console.log('completed'));
  });
  return model$;
};

export default model;
