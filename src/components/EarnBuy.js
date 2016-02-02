import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';

class EarnBuy extends React.Component {

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 10px'
      }}
      >
        <div>
          <FlatButton labelStyle={{ color: 'red', fontSize: '16px', textTransform: 'none' }}
            label="Like"
            style={{
              backgroundColor: '#fff'
            }}
          />
        </div>
        <div>
          <FlatButton labelStyle={{ color: '#0679A2', fontSize: '16px', textTransform: 'none' }}
            label="Рекомендовать"
            style={{
              backgroundColor: '#fff'
            }}
          />
        </div>
        <div>
          <FlatButton labelStyle={{ color: '#54C085', fontSize: '16px', textTransform: 'none' }}
            label="Купить"
            style={{
              backgroundColor: '#fff'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Radium(EarnBuy);
