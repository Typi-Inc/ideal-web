import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';

const styles = {
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

class CreateDealAddTags extends React.Component {
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

  removeTag(tag) {
    this.setState({
      tagNames: this.state.tagNames.filter(t =>!(t===tag))
    });
  }

  render() {
    return (
      <div style = {{ background: '#fff', width: '400px', marginTop: '10px', padding: '10px 0' }}>
        <div style = {{ textAlign: 'center', fontSize: '16px', padding: '0 10px' }}>
          Тэги, характеризующие ваш род деятельности
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
        <div style ={{ display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 10px 0 10px' }}
        >
          <input type="text"
            ref={el => this.tagName = el}
            placeholder="Автосервис, Булочная, Бар, и т.д."
            style = {{
              border: 'solid 1px #dcdcdc',
              borderRadius: '3px',
              height: '32px',
              width: '260px',
              paddingLeft: '10px'
            }}
          />
          <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', padding: '0' }}
            label = "Добавить"
            onClick={this.postTag.bind(this)}
            style = {{
              backgroundColor: '#0679A2', width: '80px'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Radium(CreateDealAddTags);
