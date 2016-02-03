import React from 'react';
import { get } from '../intent/get';
import Deals from './Deals';
import Combinator from './Combinator';
import { Observable } from 'rxjs/Observable';
import { values } from '../utils/helpers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import '../public/hover.css';

let count = 0;

class Home extends React.Component {
  static contextTypes = {
    model$: React.PropTypes.any
  };
  componentWillMount() {
    this.fetch(0, 9);
  }
  paths = [];
  fetch(from, to) {
    this.paths = Deals.paths(from, to);
    get(this.paths);
  }
  render() {
    return (
      <Combinator>
        {
          this.context.model$.
            flatMap(model => Observable.fromPromise(model.get(...this.paths))).
            map(data => <Deals
              deals={values(data.json.featuredDeals)}
              fetch={this.fetch.bind(this)}
            />)
        }
      </Combinator>
    );
  }
}

export default Home;
