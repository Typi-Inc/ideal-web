import React from 'react';
import Radium from 'radium';
import Link from './Link';
import { get } from '../intent/get';
import Deal from './Deal'
import Combinator from './Combinator';
import 'rxjs/add/operator/map';
import '../public/hover.css';

class Home extends React.Component {
  componentDidMount() {
    get([
			['featuredDeals', { from: 0, to: 9 }, ],
      ['featuredDeals', { from: 0, to: 9 }, 'business', ['name', 'image']],
			['featuredDeals', { from: 0, to: 9 }, 'tags', 'sort:createdAt=desc', 'edges', { from: 0, to: 6 }, ['id', 'text']],
			['featuredDeals', { from: 0, to: 9 }, 'likes', 'sort:createdAt=desc', 'count'],
			['featuredDeals', { from: 0, to: 9 }, 'likedByUser', '{{me}}']
    ]);
  }
  render() {
    return (
      <Combinator>
        {
          this.context.state$.map(state => {
            console.log(state.getIn(['featuredDeals', '0', 'id']));
            return (
              <Deal deal={state.getIn(['featuredDeals', '0'])} />
            );
          })
        }
      </Combinator>
    );
  }
}

Home.contextTypes = {
  state$: React.PropTypes.any
};

export default Home;
