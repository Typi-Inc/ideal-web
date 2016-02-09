import React from 'react';
import { get } from '../intent';
import { prependToPaths, toPaths } from '../utils/helpers';
import Combinator from './Combinator';
import Deal from './Deal';

class DealWrapper extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };
  static contextTypes = {
    model$: React.PropTypes.any
  };
  componentWillMount() {
    get(this.paths());
  }
  paths() {
    return prependToPaths(
      this.entryPath(),
      toPaths(Deal.queries())
    );
  }
  entryPath() {
    return ['dealsById', this.props.params.dealId];
  }
  render() {
    return (
      <Combinator>
        {
          this.context.model$.getData(this.paths.bind(this), this.entryPath()).
            map(deal => (
              <Deal deal={deal} />
            ))
        }
      </Combinator>
    );
  }
}

export default DealWrapper;
