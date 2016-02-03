import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';

class DealsItemBusiness extends Component {
  static propTypes = {
    name: PropTypes.string
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    name: null
  });
  render() {
    return (
      <div style={{
        padding: '10px',
        fontStyle: 'italic',
        fontSize: '14px'
      }}>
        <span style={{ color: '#a99999' }}>Опубликовано </span>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Radium(DealsItemBusiness);
