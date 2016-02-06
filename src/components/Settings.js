import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import { logout } from '../intent';

const styles = {
  card: {
    margin: '10px',
    background: '#fff',
    padding: '10px'
  },
  tagBorder: {
    fontSize: '14px',
    borderRadius: '5px',
    minWidth: '40px',
    margin: '10px 5px 5px 0',
    padding: '5px',
    textAlign: 'center',
    color: '#777777',
    background: '#fff',
    border: '1.5px solid #eee'
  }
};

class Settings extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      tagNames: []
    };
  }

  postTag() {
    const tagName = this.tagName.value;
    if (tagName !== '') {
      this.setState({
        tagNames: this.state.tagNames.concat([tagName])
      });
      this.tagName.value = '';
    }
  }

  logout() {
    logout();
    this.context.router.push('/');
  }

  removeTag(tag) {
    this.setState({
      tagNames: this.state.tagNames.filter(t => !(t === tag))
    });
  }

  render() {
    return (
      <div key = "settings" style = {{
        paddingTop: '60px',
        '@media (min-width: 950px)': { width: '900px', margin: '0 auto' },
        '@media (min-width: 1450px)': { width: '1400px', margin: '0 auto' } }}
      >
        <div style = {styles.card}>
          <div style = {{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '10px'
          }}
          >
            <FlatButton >
              <FontIcon
                onClick={this.logout.bind(this)}
                className="material-icons"
                style = {{ fontSize: '50px', color: '#a99999' }}
              >
                account_box
              </FontIcon>
            </FlatButton>

            <span style = {{
              fontWeight: '500',
              fontSize: '20px',
              textAlign: 'center',
              color: '#777777',
              paddingRight: '30px'
            }}
            >Ваши данные</span>
          </div>

        </div>
        <div style = {styles.card}>
          <div style = {{
            fontWeight: '500',
            fontSize: '20px',
            color: '#777777',
            textAlign: 'center',
            paddingBottom: '10px'
          }}
          >
            Тэги
          </div>
          <div style = {{ display: 'flex', flexWrap: 'wrap', paddingLeft: '10px' }}>
            {this.state.tagNames.map(tagName => (
              <div style={ styles.tagBorder }>
                {tagName}
                <FlatButton
                  onClick = {this.removeTag.bind(this, tagName)}
                  style = {{ lineHeight: '20px', height: '20px', minWidth: '20px', padding: '0' }}
                >
                  <FontIcon className="material-icons" style = {{ fontSize: '14px' }}>
                    remove</FontIcon>
                </FlatButton>
              </div>
            ))}
          </div>
          <div style ={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style = {{ width: '90%' }}>
              <input type="text"
                ref={el => this.tagName = el}
                placeholder="Автосервис, Булочная, Бар и т.д."
                style = {{
                  border: 'solid 1px #dcdcdc',
                  borderRadius: '3px',
                  height: '32px',
                  paddingLeft: '10px',
                  width: '90%'
                }}
              />
            </div>
            <div>
              <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none' }} label = "Добавить"
                onClick={this.postTag.bind(this)}
                style = {{
                  backgroundColor: '#0679A2'
                }}
              />
            </div>
          </div>
        </div>
        <FlatButton labelStyle = {{ color: '#0679A2', textTransform: 'none' }} label = "Сохранить"
          style = {{
            backgroundColor: '#fff', float: 'right', marginRight: '10px'
          }}
        />
      </div>
    );
  }
}

export default Radium(Settings);
