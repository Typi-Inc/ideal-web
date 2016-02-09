import React from 'react';
import { Link as RouterLink } from 'react-router';
import Radium from 'radium';
import Select from 'react-select';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import IconButton from 'material-ui/lib/icon-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';

import Combinator from './Combinator';
import { getLocal } from '../intent';
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

class AppBody extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  };
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    lock: React.PropTypes.object,
    model$: React.PropTypes.any
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      crazy: false,
      options: FLAVOURS,
      value: [],
      modalIsOpen: false
    };
  }

  componentWillMount() {
    getLocal(['loggedIn']);
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
                onClick={() => this.context.router.push('/createDeal')}
                label="Создать сделку"
                style = {{ margin: '10px 0' }}
              />
              <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', fontSize: '18px' }}
                onClick={() => this.context.router.push('/myProfile')}
                label="Профиль"
                style = {{ margin: '10px 0' }}
              />
              <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', fontSize: '18px' }}
                onClick={() => this.context.router.push('/settings')}
                label="Настройки"
                style = {{ margin: '10px 0' }}
              />
              <Combinator>
                {
                  this.context.model$.getData(['loggedIn'], ['loggedIn'], false).
                    map(loggedIn => !loggedIn ? (
                      <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', fontSize: '18px' }}
                        onClick={() => this.context.lock.show()}
                        label="Войти"
                        style = {{ margin: '10px 0' }}
                      />
                    ) : <div>Yopta</div>)
                }
              </Combinator>
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
                  onTouchTap={() => this.context.router.push('/myProfile')}
                />
                <MenuItem primaryText="Настройки"
                  onTouchTap={() => this.context.router.push('/settings')}
                />
                <MenuItem primaryText="Войти" onTouchTap={this.openModal.bind(this)}/>
              </IconMenu>
            </ToolBarGroupRadium>
          </Toolbar>
            {this.props.children}
        </div>
    );
  }
}

export default AppBody;
