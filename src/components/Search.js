import React from 'react';
import { get } from '../intent';
import Deals from './Deals';
import Combinator from './Combinator';
import { values } from '../utils/helpers';
import { prependToPaths, toPaths } from '../utils/helpers';
import '../public/hover.css';

class Search extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  };
  static contextTypes = {
    model$: React.PropTypes.any
  };
  componentWillMount() {
    this.fetch(0, 9);
  }
  componentWillUpdate() {
    console.log('updating');
    this.fetch(0, 9);
  }
  getPaths() {
    return this.paths;
  }
  getEntryPath() {
    return ['dealsByTags', this.props.params.tagIdString];
  }
  static paths = (from, to, toPrepend) => prependToPaths(
    toPrepend,
    toPaths(Deals.queries())
  );
  fetch(from, to) {
    this.paths = Search.paths(from, to, ['dealsByTags', this.props.params.tagIdString, { from, to }]);
    get(this.paths);
  }
  paths = [];
  render() {
    return (
      <Combinator>
        {
          this.context.model$.getData(this.getPaths.bind(this), this.getEntryPath.bind(this)).
            map(deals => <Deals
              deals={values(deals)}
              fetch={this.fetch.bind(this)}
            />)
        }
      </Combinator>
    );
  }
}

export default Search;
