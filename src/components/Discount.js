import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';

const styles = {
  mainOptionsCard: {
    display: 'flex',
    width: '65px',
    justifyContent: 'center',
    background: '#0679A2',
    height: '35px',
    color: '#fff',
    alignItems: 'center',
    fontWeight: '500'
  }
};

class Discount extends Component {
  static propTypes = {
    discount: PropTypes.number
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    discount: null
  });
  render() {
    return (
      <div style={ styles.mainOptionsCard }>
        <div style={{ paddingLeft: '5px' }}>
          <span style={{ fontSize: '18px' }}>
            -{this.props.discount}
          </span>
          <span style={{ fontSize: '14px' }}>%</span>
        </div>
      </div>
    );
  }
}

export default Radium(Discount);
