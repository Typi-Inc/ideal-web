import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';

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
            <IconButton
              style= {{
                    background: '#a99999'
                  }}
              >
              <FontIcon className="material-icons" color = '#fff' >remove</FontIcon>
            </IconButton>
            <span style={{ padding: '0 5px', fontSize: '16px' }}>15</span>
            <IconButton
                    style= {{
                    background: '#54C085'
                  }}
              >
              <FontIcon className="material-icons" color = '#fff' >add</FontIcon>
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Certificate);


