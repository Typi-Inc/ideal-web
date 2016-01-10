import React from 'react';
import Radium from 'radium';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    background: '#fff'
  },

};

class DealCard extends React.Component {

  render() {

    return (
      <div style={styles.card} key = {deal.id}>
        <Link className="mdl-navigation__link" to={'/deal/' + deal.id} >
          <div style={ styles.dealImage }>
            <div style={ styles.mainOptionsCard }>
              <div style={{ paddingLeft: '5px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '600' }}>
                      {deal.dealSales}
                    </span>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>%</span>
              </div>
            </div>
          </div>
        </Link>

        <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
          <div style={{ padding: '10px' }}>
              <span>
                {deal.dealTitle}
              </span>
              <span style={{ paddingLeft: '10px' }}>
                {deal.dealType}
              </span>
          </div>
        </div>

        <div style={{ padding: '0 10px' }}>
          <i className="material-icons"
             style={{ color: 'green', fontSize: '14px', padding: '0 5px' }}
            >shopping_cart</i>
          {deal.purchasesAmount}
          <i className="material-icons" style={{ color: 'red', fontSize: '14px', padding: '0 5px' }}>favorite</i>
          {deal.likesAmount}
          <img src="/src/public/assets/hand132-5.png" style={{ height: '14px', padding: '0 5px' }}/>
          {deal.likesAmount}
        </div>

        <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style={styles.tagBorder}
              >
              {deal.tagOne}
            </button>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style={styles.tagBorder}
              >
              {deal.tagTwo}
            </button>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style={styles.tagBorder}
              >
              {deal.tagThree}
            </button>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style={styles.tagBorder}
              >
              {deal.tagFour}
            </button>
          </div>
        </div>

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
      </div>
    )
  }
}

export default Radium(DealCard);




