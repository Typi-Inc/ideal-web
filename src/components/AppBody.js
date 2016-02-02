import React from 'react';
import { Link as RouterLink } from 'react-router';
import Radium from 'radium';
import Select from 'react-select';
import Modal from 'react-modal';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import IconButton from 'material-ui/lib/icon-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import '../public/react-select.css';
import '../public/modal.css';

const ToolBarGroupRadium = Radium(ToolbarGroup);
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
    height: '370px',
    margin: 'auto',
    width: '240px'
  }
};

class AppBody extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  };
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.state = {
      crazy: false,
      options: FLAVOURS,
      value: [],
      modalIsOpen: false
    };
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
        <div >
          <FlatButton
            style={styles.facebookButton}
            onClick={() => this.context.router.push('facebook')}
            label="Sign in"
          />
          <FlatButton
            style={Object.assign({}, styles.facebookButton, {
              backgroundColor: '#5B7FA6',
              backgroundImage: 'url("http://wault42.com/wp-content/uploads/2015/10/vk1.png")'
            })}
            onClick={() => this.context.router.push('vk')}
            label="Sign in"
          />
          <FlatButton
            style={Object.assign({}, styles.facebookButton, {
              backgroundColor: '#DC4E41',
              marginBottom: '0',
              backgroundImage: 'url("http://www.envisionexperience.com/~/media/images/blog/googleplus.png?la=en")'
            })}
            onClick={() => this.context.router.push('google')}
            label="Sign in"
          />
        </div>
    );
  }

  render() {
    return (
        <div style={{ background: '#dedede', height: '100%' }}>
          <Toolbar style={{
            background: '#0679A2',
            paddingRight: '0',
            position: 'fixed',
            zIndex: '1000'
          }}
          >
            <ToolBarGroupRadium firstChild float="left">
              <IconButton style={{ marginTop: '4px' }}
                containerElement={<RouterLink to="/" />}
                linkButton
              >
                <ActionHome color="#fff"/>
              </IconButton>
            </ToolBarGroupRadium>
            <ToolBarGroupRadium style={{ marginTop: '4px',
              '@media (min-width: 740px)': { display: 'none' } }}
            >
              <IconButton >
                <FontIcon className="material-icons" color="#fff">search</FontIcon>
              </IconButton>
            </ToolBarGroupRadium>
            <ToolBarGroupRadium style = {{
              display: 'none',
              '@media (min-width: 740px)': { display: 'block', padding: '10px 0 0 20px' } }}
            >
              <Select multi
                value={this.state.value}
                options={this.state.options}
                onChange={this.handleSelectChange.bind(this)}
              />
            </ToolBarGroupRadium>
            <ToolBarGroupRadium float="right"
              style = {{ '@media (max-width: 950px)': { display: 'none' } }}
            >
              <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', fontSize: '18px' }}
                onClick={() => this.context.router.push('createDeal')}
                label="Создать сделку"
                style = {{ margin: '10px 0' }}
              />
              <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', fontSize: '18px' }}
                onClick={() => this.context.router.push('myProfile')}
                label="Профиль"
                style = {{ margin: '10px 0' }}
              />
              <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', fontSize: '18px' }}
                onClick={() => this.context.router.push('settings')}
                label="Настройки"
                style = {{ margin: '10px 0' }}
              />
              <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', fontSize: '18px' }}
                onClick={this.openModal.bind(this)}
                label="Войти"
                style = {{ margin: '10px 0' }}
              />
            </ToolBarGroupRadium>
            <ToolBarGroupRadium float="right"
              style = {{ '@media (min-width: 950px)': { display: 'none' } }}>
              <IconMenu iconButtonElement={
                <IconButton touch style = {{ marginTop: '4px' }}>
                  <MoreVertIcon color = "#fff" />
                </IconButton>
              }
              >
                <MenuItem primaryText="Профиль"
                  onTouchTap={() => this.context.router.push('myProfile')}
                />
                <MenuItem primaryText="Настройки"
                  onTouchTap={() => this.context.router.push('settings')}
                />
                <MenuItem primaryText="Войти" onTouchTap={this.openModal.bind(this)}/>
              </IconMenu>
            </ToolBarGroupRadium>
          </Toolbar>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal.bind(this)}
            style={modalStyles}
          >
            <h2 style={{
              fontSize: '20px',
              fontWeight: '900',
              textAlign: 'center',
              margin: '0',
              lineHeight: '36px',
              paddingBottom: '5px'
            }}
            >
              Ищите интересные предложения, рекомендуйте друзьям и получайте бонус!
            </h2>
            {this.renderFacebookButton()}
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <FloatingActionButton
                mini
                backgroundColor="#54C085"
                onClick={this.closeModal.bind(this)}
              >
                <FontIcon className="material-icons" style={{ fontSize: '18px', color: 'white' }}>
                  close
                </FontIcon>
              </FloatingActionButton>
            </div>
          </Modal>
            {this.props.children}
        </div>
    );
  }
}

export default Radium(AppBody);
