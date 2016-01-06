import React from 'react';
import Radium from 'radium';
import Link from './Link';
import {
  Motion,
  spring,
  StaggeredMotion,
  TransitionMotion
} from 'react-motion';

const styles = {
  profileDeals: {
    color: '#0679A2',
    fontSize: '24px',
    fontWeight: '600'
  }
};

class MyProfile extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  render() {
    return (
      <div style = {{
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
          <div style = {{ display: 'flex', paddingBottom: '10px', borderBottom: '1px solid rgba(0,0,0,.12)' }}>
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
                Purchases
              </div>
            </div>
            <div style = {{ textAlign: 'center' }}>
              <div style = {styles.profileDeals}>
                10
              </div>
              <div>
                Likes
              </div>
            </div>
            <div style = {{ textAlign: 'center' }}>
              <div style = {styles.profileDeals}>
                22
              </div>
              <div>
                Referrals
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Radium(MyProfile);
