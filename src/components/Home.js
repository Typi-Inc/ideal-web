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
  componentDidMount() {
    get([
			['featuredDeals', { from: 0, to: 9 }, ['title', 'id', 'discount', 'image']],
      ['featuredDeals', { from: 0, to: 9 }, 'business', ['name', 'image']],
			['featuredDeals', { from: 0, to: 9 }, 'tags', 'sort:createdAt=desc', 'edges',
        { from: 0, to: 6 }, ['id', 'text']],
			['featuredDeals', { from: 0, to: 9 }, 'likes', 'sort:createdAt=desc', 'count'],
			['featuredDeals', { from: 0, to: 9 }, 'likedByMe']
    ]);
  }
  render() {
    return (
      <Combinator>
        {
          this.context.model$.
            flatMap(model => Observable.fromPromise(model.get(
              ['featuredDeals', { from: 0, to: 9 }, ['title', 'id', 'discount', 'image']],
              ['featuredDeals', { from: 0, to: 9 }, 'business', ['name', 'image']],
        			['featuredDeals', { from: 0, to: 9 }, 'tags', 'sort:createdAt=desc', 'edges',
                { from: 0, to: 6 }, ['id', 'text']],
        			['featuredDeals', { from: 0, to: 9 }, 'likes', 'sort:createdAt=desc', 'count'],
        			['featuredDeals', { from: 0, to: 9 }, 'likedByMe']
            ))).
            map(data => console.log(count++)||<Deals deals={values(data.json.featuredDeals)} />)
        }
      </Combinator>
    );
  }
}

export default Home;
