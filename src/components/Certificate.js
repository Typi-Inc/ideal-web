import React from 'react';
import Radium from 'radium';

const styles = {
  title: {
    fontSize: '18px',
    color: '#666',
    borderBottom: '1.5px solid rgba(0,0,0,0.12)',
    marginBottom: '10px'
  }
};

class Certificate extends React.Component {

  render() {

    return (
      <div style = {{
            display: 'none',
            '@media (min-width: 740px)': {
              display: 'flex',
              flexDirection: 'column',
              color: '#a99999',
              padding: '10px',
              margin: '10px 10px 10px 0',
              background: '#fff'
            }
          }}
        >
        <div style = {styles.title}>
          Deals info
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', alignItems: 'center' }}>
          <div style={{ width: '70%', padding: '10px' }}>
            Five Fitness and Conditioning Classes at #TeamTibbs Fitness (70% Off)
          </div>
          <div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style= {{
                    width: '28px',
                    height: '28px',
                    background: '#a99999',
                    minWidth: '28px',
                    padding: '0px'
                  }}
              >
              <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }}>remove</i>
            </button>
            <span style={{ padding: '0 5px', fontSize: '16px' }}>15</span>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style= {{
                    width: '28px',
                    height: '28px',
                    background: '#54C085',
                    minWidth: '28px',
                    padding: '0px'
                  }}
              >
              <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }} >add</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Certificate);


