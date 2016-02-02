import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';

const styles = {
  tagBorder: {
    minWidth: '40px',
    height: '32px',
    background: '#fff',
    border: '1.5px solid #eee'
  }
};

class DealTag extends React.Component {

  render() {

    return (
      <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
          <FlatButton labelStyle = {{
            textTransform: 'none',
            fontSize: '14px',
            lineHeight: '18px',
            color: '#777777'
            }}
                      label = {this.props.children}
                      style = { styles.tagBorder}/>
        </div>
      </div>
    )
  }
}

export default Radium(DealTag);