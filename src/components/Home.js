import React from 'react';
import Combinator from './Combinator';
import Deals from './Deals';
import { get } from '../intent/get';
import 'rxjs/add/operator/map';

class Home extends React.Component {
  static contextTypes = {
    state$: React.PropTypes.any
  };

  componentWillMount() {
    const query = [];
    Object.keys(Deals.queries).forEach(queryKey => {
      query.push([
        'featuredDeals',
        { from: 0, to: 9 },
        ...Deals.queries[queryKey]()
      ])
    });
    get(query);
  }

  render() {
    return (
      <Combinator>
        {
          this.context.state$.map(state => {
            return (
              <Deals deals={state.get('featuredDeals')} />
            );
          })
        }
      </Combinator>
    );
  }
}

export default Home;
