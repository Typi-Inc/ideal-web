import React from 'react';
import Radium from 'radium';
import Link from './Link';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#54C085'
  }
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="mdl-layout__header mdl-layout__header--seamed" style={{ background: '#0679A2' }}>
          <div className="mdl-layout__header-row" style={{ paddingLeft: '20px' }}>
            <div className="mdl-layout-icon">
              <Link to = '/'><i className="material-icons" style = {{color: 'white'}}>home</i></Link>
            </div>
            <button id="search"
                    className="mdl-button mdl-js-button">
              <div>
                <i className="material-icons" style={{color: 'white'}} >search</i>
              </div>
            </button>
            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="search">
              <li className="mdl-menu__item">Dentist</li>
              <li className="mdl-menu__item">Car</li>
              <li className="mdl-menu__item">Bar</li>
            </ul>
            <div className="mdl-layout-spacer"></div>
            <div>
              <button id="3dot"
                      className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons" style = {{ color : 'white' }}>more_horiz</i>
              </button>
              <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                  htmlFor="3dot">
                <li className="mdl-menu__item">
                  <Link to="/createDeal"
                        style = {{ textDecoration: 'none',color: 'black' }}>Create deal
                  </Link>
                </li>
                <li className="mdl-menu__item">
                  <Link to="/myProfile"
                        style = {{ textDecoration: 'none',color: 'black' }}>My profile
                  </Link>
                </li>
                <li className="mdl-menu__item">
                  <Link to="/settings"
                        style = {{ textDecoration: 'none',color: 'black' }}>Settings
                  </Link>
                </li>
                <li className="mdl-menu__item">Log out</li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      )
  }
}

export default Radium(Header);

