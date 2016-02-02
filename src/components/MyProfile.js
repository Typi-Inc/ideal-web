import React from 'react';
import Radium from 'radium';

const styles = {
  profileDeals: {
    color: '#0679A2',
    fontSize: '24px',
    fontWeight: '600'
  }
};

class MyProfile extends React.Component {

  render() {
    return (
      <div style = {{
        paddingTop: '60px',
        '@media (min-width: 950px)': { width: '950px', margin: '0 auto' },
        '@media (min-width: 1450px)': { width: '1450px', margin: '0 auto' } }}
      >
        <div style = {{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
          borderBottom: '1px solid rgba(0,0,0,.12)',
          background: 'white',
          marginTop: '10px'
        }}
        >
          <div style = {{
            display: 'flex',
            paddingBottom: '10px',
            borderBottom: '1px solid rgba(0,0,0,.12)' }}
          >
            <div>
              <img src="http://www.spacefacts.de/bios/portraits_hi/cosmonauts/kotov_oleg.jpg"
                style={{ height: '50px' }}
              />
            </div>
            <div style = {{ paddingLeft: '10px' }}>
              <div style = {{ fontWeight: '600', fontSize: '18px' }}>
                Kenneth Cole
              </div>
              <div style = {{ color: '#a99999' }}>
                @kennethcole
              </div>
            </div>
          </div>
          <div style = {{ display: 'flex', justifyContent: 'space-around', paddingTop: '10px' }}>
            <div style = {{ textAlign: 'center' }}>
              <div style = {styles.profileDeals}>
                20
              </div>
              <div>
                Sales
              </div>
            </div>
            <div style = {{ textAlign: 'center' }}>
              <div style = {styles.profileDeals}>
                12
              </div>
              <div>
                Покупок
              </div>
            </div>
            <div style = {{ textAlign: 'center' }}>
              <div style = {styles.profileDeals}>
                10
              </div>
              <div>
                Понравилось
              </div>
            </div>
            <div style = {{ textAlign: 'center' }}>
              <div style = {styles.profileDeals}>
                22
              </div>
              <div>
                Рекомендовано
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(MyProfile);
