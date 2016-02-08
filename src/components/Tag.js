import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import shallowEqual from '../utils/shallowEqual';

const styles = {
  tagBorder: {
    minWidth: '40px',
    height: '32px',
    background: '#fff',
    border: '1.5px solid #eee',
    borderRadius: '5px'
  }
};

class Tag extends React.Component {
  static propTypes = {
    children: React.PropTypes.string
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    text: null
  });
  render() {
    return (
      <div style={{ padding: '0 0 10px 10px' }}>
        <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
          <FlatButton
            labelStyle = {{
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: '400',
              color: '#777777',
              padding: '0 8px'
            }}
            label = {this.props.children}
            style = { styles.tagBorder}
          />
        </div>
      </div>
    );
  }
}

export default Radium(Tag);
