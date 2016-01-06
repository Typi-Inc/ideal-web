import React from 'react';
import Radium from 'radium';
import Link from './Link';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    marginTop: '10px',
    background: '#fff',
    padding: '10px',
    width: '55%'
  }
};

class CreateDeal extends React.Component {
  render() {
    return (
      <div key = "createDeal"
        style = {{
          fontFamily: 'Roboto, Helvetica, sans-serif',
          '@media (min-width: 950px)': { width: '950px', margin: '0 auto' },
          '@media (min-width: 1450px)': { width: '1450px', margin: '0 auto' }
        }}
      >
        <div style = {{ display: 'flex', justifyContent: 'space-around'}}>
          <div style={{ width: '400px', background: '#fff', marginTop: '10px' }}>
            <div style = {{ borderStyle: 'dotted'}}>
              alert
            </div>
          </div>
        </div>
        <div style = {{
          display: 'flex',
          justifyContent: 'flex-end',
          background: '#dedede',
          paddingBottom: '10px',
          marginRight: '20px'
        }}
        >
          <div style = {{ width: '150px' }}>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
              style={{ background: '#0679A2', width: '100%', color: 'white', borderRadius: '10px' }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(CreateDeal);
