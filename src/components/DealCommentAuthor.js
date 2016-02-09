import React from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';

class DealCommentAuthor extends React.Component {
  static propTypes = {
    image: React.PropTypes.string,
    name: React.PropTypes.string
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    image: null,
    name: null
  });
  render() {
    return (
      <div style={{ fontWeight: '600' }}>
        {this.props.name}
      </div>
    );
  }
}

export default Radium(DealCommentAuthor);
