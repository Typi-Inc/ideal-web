import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';

const styles = {
  tagBorder: {
    fontSize: '12px',
    borderRadius: '5px',
    lineHeight: '18px',
    minWidth: '40px',
    padding: '6px 13px',
    margin: '0 5px 5px 0',
    textTransform: 'none',
    height: '32px',
    background: '#fff',
    border: '2px solid #eee'
  }
};

class DealTag extends React.Component {

  render() {

    return (
      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
          <FlatButton color = '#777777' label = {this.props.children}
                  style={styles.tagBorder}
            >
          </FlatButton>
        </div>
      </div>
    )
  }
}

export default Radium(DealTag);