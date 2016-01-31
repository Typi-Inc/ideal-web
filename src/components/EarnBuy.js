import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';

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
                    <FlatButton labelStyle = {{color: '#fff', textTransform: 'none'}}
                                label = 'Рекомендовать'
                                style = {{
                    backgroundColor: '#0679A2',
                    width: '140px'
                    }}/>
                </div>
                <div style={{ width: '40%' }}>
                    <FlatButton labelStyle = {{color: '#fff', textTransform: 'none'}} label = 'Купить'
                                style = {{
                    backgroundColor: '#54C085',
                    width: '80px'
                    }}/>
                </div>
            </div>
        )
    }
}

export default Radium(EarnBuy);