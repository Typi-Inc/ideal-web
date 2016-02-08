import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';
import shallowEqual from '../utils/shallowEqual';

class Stats extends Component {
  static propTypes = {
    count: PropTypes.number
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    count: null
  });
  render() {
    return (
      <div style={{ padding: '0 10px 10px 10px' }}>
        <FontIcon className="material-icons" color="green"
          style={{ fontSize: '14px', padding: '0 5px' }}
        >shopping_cart</FontIcon>
        {'?'}
        <FontIcon className="material-icons" color="red"
          style={{ fontSize: '14px', padding: '0 5px' }}
        >favorite</FontIcon>
        {this.props.count}
        <img src="/src/public/assets/hand132-5.png"
          style={{ height: '14px', padding: '0 5px' }}/>
        {'?'}
      </div>
    );
  }
}

export default Radium(Stats);
