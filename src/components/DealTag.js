import React from 'react';
import Radium from 'radium';

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
    color: '#777777',
    background: '#fff',
    border: '1.5px solid #eee'
  }
};

class DealTag extends React.Component {

  render() {

    return (
      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
            >
            {this.props.children}
          </button>
        </div>
      </div>
    )
  }
}

export default Radium(DealTag);