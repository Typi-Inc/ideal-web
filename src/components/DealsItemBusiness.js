import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';

let count = 0

class DealsItemBusiness extends Component {
  static propTypes = {
    name: PropTypes.string
  };
  shouldComponentUpdate(nextProps) {
    console.log(!shallowEqual(this.props, nextProps), this.props.name);
    return !shallowEqual(this.props, nextProps);
  }
  render() {
    console.log('rendering business info', ++count, this.props.name)
    return (
      <div style={{
        padding: '10px',
        fontStyle: 'italic',
        fontSize: '13px'
      }}>
        <span style={{ color: '#a99999' }}>Published by </span>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Radium(DealsItemBusiness);
