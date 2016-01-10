import React from 'react';
import Radium from 'radium';

class EarnBuy extends React.Component {

  render() {

    return (
      <div style = {{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '10px',
              padding: '0 10px'
            }}
        >
        <div style={{ width: '40%' }}>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style = {{
                    background: '#0679A2',
                    color: 'white',
                    width: '100%'
                  }}
            >
            Earn
          </button>
        </div>
        <div style={{ width: '40%' }}>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style = {{
                    background: '#54C085',
                    color: 'white',
                    width: '100%'
                  }}
            >
            Buy
          </button>
        </div>
      </div>
    )
  }
}

export default Radium(EarnBuy);












