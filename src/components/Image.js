import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';

const styles = {
  dealImage: {
    backgroundSize: '100% 100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '@media (min-width: 850px)': {
      height: '250px'
    }
  }
};

class Image extends Component {
  static propTypes = {
    image: PropTypes.string,
    children: PropTypes.node
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    image: null
  });
  render() {
    return (
      <div style={[styles.dealImage, {
        backgroundImage: `url("${this.props.image}")`
      }]}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Image);
