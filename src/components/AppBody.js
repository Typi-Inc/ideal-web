import React from 'react';
import Link from './Link';
import Radium from 'radium';
import Select from 'react-select';
import '../public/react-select.css';
import Modal from 'react-modal';
import '../public/modal.css';

const FLAVOURS = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel' },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' }
];

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.54)'
  },
  content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '20px 15px 0 20px',
    height: '350px',
    margin: 'auto',
    width: '240px'
  }
};

class AppBody extends React.Component {
  constructor() {
    super();
    this.state = {
      crazy: false,
      options: FLAVOURS,
      value: [],
      modalIsOpen: false
    };
  }
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleSelectChange(value) {
    this.setState({ value });
  }
  loginWithFacebook() {
    window.location = '/facebook';
  }
  loginWithVk() {
    window.location = '/vk';
  }
  loginWithGoogle() {
    window.location = '/google';
  }
  renderFacebookButton() {
    const styles = {
      facebookButton: {
        width: '100%',
        backgroundColor: '#3a5999',
        backgroundImage: 'url("http://static1.squarespace.com/static/4f5810d9e4b0ebbf0a1507a6/t/55a6e39be4b0e13bc07f93a1/1437000604121/")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        color: 'white',
        fontWeight: '300',
        letterSpacing: '1',
        marginBottom: '20px'
      }
    };
    return (
      <div className="mdl-cell mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--12-col-desktop">
        <button className="mdl-button mdl-js-button mdl-button--raised"
          style={styles.facebookButton}
          onClick={this.loginWithFacebook.bind(this)}
        >
          Sign in
        </button>
        <button className="mdl-button mdl-js-button mdl-button--raised"
          style={[
            styles.facebookButton,
            {
              backgroundColor: '#5B7FA6',
              backgroundImage: 'url("http://wault42.com/wp-content/uploads/2015/10/vk1.png")'
            }
          ]}
          onClick={this.loginWithVk.bind(this)}
        >
          Sign in
        </button>
        <button className="mdl-button mdl-js-button mdl-button--raised"
          style={[
            styles.facebookButton,
            {
              backgroundColor: '#DC4E41',
              marginBottom: '0',
              backgroundImage: 'url("http://www.envisionexperience.com/~/media/images/blog/googleplus.png?la=en")'
            }
          ]}
          onClick={this.loginWithGoogle.bind(this)}
        >
          Sign in
        </button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header" style={{ background: '#dedede' }}>
          <header className="mdl-layout__header mdl-layout__header--seamed"
            style={{ background: '#0679A2' }}
          >
            <div className="mdl-layout__header-row"
              style={{
                paddingLeft: '20px',
                '@media (min-width: 950px)': { width: '950px', margin: '0 auto' },
                '@media (min-width: 1450px)': { width: '1450px', margin: '0 auto' }
              }}
            >
              <div className="mdl-layout-icon">
                <Link to="/"><i className="material-icons" style = {{ color: 'white' }}>home</i></Link>
              </div>
              <div style = {{ paddingLeft: '10px', '@media (min-width: 740px': { display: 'none' } }}>
                <button className="mdl-button mdl-js-button">
                  <i className="material-icons" style={{ color: 'white', paddingBottom: '5px' }} >search</i>
                </button>
              </div>
              <div style = {{ display: 'none', '@media (min-width: 740px': { display: 'block', paddingLeft: '20px' } }}>
                <Select multi
                  simpleValue
                  value={this.state.value}
                  options={this.state.options}
                  onChange={this.handleSelectChange.bind(this)}
                />
              </div>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link className="mdl-navigation__link" to="/createDeal"
                  style = {{ color: '#fff', fontSize: '16px' }}
                >Create deal</Link>
                <Link className="mdl-navigation__link" to="/myProfile"
                  style = {{ color: '#fff', fontSize: '16px' }}
                >My profile</Link>
                <Link className="mdl-navigation__link" to="/settings"
                  style = {{ color: '#fff', fontSize: '16px' }}
                >Settings</Link>
                <a className="mdl-navigation__link" onClick={this.openModal.bind(this)}
                  style = {{ color: '#fff', fontSize: '16px' }}
                >Sign in</a>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal.bind(this)}
                  style={modalStyles}
                >
                  <h2 style = {{
                    fontSize: '20px',
                    fontWeight: '900',
                    textAlign: 'center',
                    margin: '0'
                  }}
                  >
                    Find interesting deal, share with friends, earn money!
                  </h2>
                  {this.renderFacebookButton()}
                  <div style = {{ textAlign: 'right' }}>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
                      style = {{ background: '#54C085', height: '32px', width: '32px', minWidth: '32px' }}
                      onClick={this.closeModal.bind(this)}
                    >
                      <i className="material-icons" style = {{ fontSize: '18px', color: 'white' }}>close</i>
                    </button>
                  </div>
                </Modal>
              </nav>

              <div style = {{ '@media (min-width: 1025px)': { display: 'none' } }}>
                <button id="3dot"
                  className="mdl-button mdl-js-button mdl-button--icon"
                >
                  <i className="material-icons" style = {{ color: 'white' }}>more_horiz</i>
                </button>
                <ul className = "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                  htmlFor = "3dot"
                >
                  <li className="mdl-menu__item">
                    <Link to="/myProfile"
                      style = {{ textDecoration: 'none', color: 'black' }}
                    >My profile</Link>
                  </li>
                  <li className="mdl-menu__item">
                    <Link to="/settings"
                      style = {{ textDecoration: 'none', color: 'black' }}
                    >Settings</Link>
                  </li>
                  <li className="mdl-menu__item" onClick={this.openModal.bind(this)}>Sign in</li>
                </ul>
              </div>
            </div>
          </header>
          <main className="mdl-layout__content">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

AppBody.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Radium(AppBody);
