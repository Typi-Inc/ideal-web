import React from 'react';
import Radium from 'radium';
import Link from './Link';
import { get } from '../intent/get';
import Deal from './Deal';
import Combinator from './Combinator';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import '../public/hover.css';

class Home extends React.Component {
  componentDidMount() {
    get([
			['featuredDeals', { from: 0, to: 9 }, ['title', 'id']],
      ['featuredDeals', { from: 0, to: 9 }, 'business', ['name', 'image']],
			['featuredDeals', { from: 0, to: 9 }, 'tags', 'sort:createdAt=desc', 'edges',
        { from: 0, to: 6 }, ['id', 'text']],
			['featuredDeals', { from: 0, to: 9 }, 'likes', 'sort:createdAt=desc', 'count'],
			['featuredDeals', { from: 0, to: 9 }, 'likedByUser', '{{me}}']
    ]);
  }
  render() {
    return (
      <Combinator>
        {
          this.context.model$.
            map(model => Observable.fromPromise(model.get(['featuredDeals', 0, ['id', 'title']]))).
            map(data => {
              console.log(JSON.stringify(data));
              return (
                <Deal deal={data} />
              );
            })
        }
      </Combinator>
    );
  }
}

Home.contextTypes = {
  model$: React.PropTypes.any
};

export default Home;
