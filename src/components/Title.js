import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';

class Title extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    title: null
  });
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}
      >
        <div style={{ padding: '10px' }}>
          <span style = {{ fontSize: '14px',
            '@media (min-width: 580px)': { fontSize: '16px' } }}
          >
            {this.props.title}
          </span>
        </div>
      </div>
    );
  }
}

export default Radium(Title);
