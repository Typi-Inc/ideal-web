import React from 'react';
import Link from './Link';
import Radium from 'radium';
import {Motion, spring} from 'react-motion';

class AppBody extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }
  render() {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" style={{ background: '#f6f6f6' }}>
          <header className="mdl-layout__header mdl-layout__header--seamed"
                  style={{ background: '#0679A2' }}>
            <div className="mdl-layout__header-row"
                 style={{ paddingLeft: '20px',
                          '@media (min-width: 1010px)': { width: '1010px',margin:'0 auto'},
                          '@media (min-width: 1510px)': { width: '1510px',margin:'0 auto'} }}>
              <div className="mdl-layout-icon">
                <Link to = '/'><i className="material-icons" style = {{color: 'white'}}>home</i></Link>
              </div>

              <i className="material-icons" style={{color: 'white'}} >search</i>

              <div className="mdl-layout-spacer"></div>

              <div style = {{ '@media (min-width: 580px)': { display: 'none' } }}>
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
          <main className="mdl-layout__content"
                style = {{
                            '@media (min-width: 1050px)': { width: '1050px',margin:'0 auto'},
                            '@media (min-width: 1550px)': { width: '1550px',margin:'0 auto'} }}>
            {this.props.children}
          </main>
        </div>

      </div>
    )
  }
}

export default Radium(AppBody);


//const AppBody = ({children}) => <div>
//  {children}
//</div>
//export default AppBody
//<Link to={"/"}>Home</Link>
//<Link to={"/other"}>Other</Link>
//<Link to={"/settings"}>Settings</Link>
//<Link to={"/asdasdasd"}>Not Foun