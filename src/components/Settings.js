import React from 'react';
import Radium from 'radium';
import Link from './Link';
import CreateDealAddTags from './CreateDealAddTags';

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
    margin: '10px 5px 10px 0',
    padding: '5px',
    textAlign: 'center',
    color: '#777777',
    background: '#fff',
    border: '1.5px solid #eee'
  }
};

class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
      tagNames : []
    };
  }

  postTag() {
    const tagName = this.tagName.value;
    if(tagName !=='') {
      this.setState({
        tagNames: this.state.tagNames.concat([tagName])
      });
      this.tagName.value = '';
    }
  }

  removeTag(tag) {
    this.setState({
      tagNames: this.state.tagNames.filter(t =>!(t===tag))
    })
  }

  render() {

    return (
      <div key = 'settings' style = {{
      '@media (min-width: 950px)': { width: '950px',margin:'0 auto'},
      '@media (min-width: 1450px)': { width: '1450px',margin:'0 auto'} }}>
        <div style = {styles.card}>
          <div style = {{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '10px'
                       }}>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect" style = {{height: '50px'}}>
              <i className="material-icons" style = {{ color: '#a99999 ', fontSize: '50px' }}>account_box</i>
            </button>
            <span style = {{
              fontWeight: '500',
              fontSize: '20px',
              textAlign: 'center',
              color: '#777777',
              paddingRight: '30px'
                            }}>Your Profile</span>
          </div>

        </div>
        <div style = {styles.card}>
          <div  style = {{
                  fontWeight: '500',
                  fontSize: '20px',
                  color: '#777777',
                  textAlign: 'center',
                  paddingBottom: '10px'
                   }}>
            Your tags
          </div>
          <div style = {{ display: 'flex', flexWrap: 'wrap', paddingLeft: '10px' }}>
            {this.state.tagNames.map(tagName => (
              <div style={ styles.tagBorder }>
                {tagName}
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        onClick = {this.removeTag.bind(this, tagName)}
                        style = {{ lineHeight: '20px', height: '20px', minWidth: '20px', padding: '0' }}
                  >
                  <i className="material-icons" style = {{ fontSize: '14px' }}>remove</i>
                </button>
              </div>
            ))}
          </div>
          <div style ={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style = {{ width: '90%' }}>
              <input type="text"
                     ref={el => this.tagName = el}
                     placeholder="Autoservice, Bakery, Bar, e.g."
                     style = {{
                           border: 'solid 1px #dcdcdc',
                           borderRadius: '3px',
                           height: '32px',
                           paddingLeft: '10px',
                           width: '90%'
                           }}/>
            </div>
            <div>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                      onClick={this.postTag.bind(this)}
                      style= {{
                        background: '#0679A2',
                        minWidth: '28px',
                        padding: '0 5px',
                        borderRadius: '3px',
                        textTransform: 'none'
                                 }}
                >
                <span style = {{ color: 'white' }} >Add</span>
              </button>
            </div>
          </div>
        </div>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={{
                    background: '#fff',
                    color: '#0679a2',
                    marginRight: '10px',
                    float: 'right',
                    fontSize: '18px',
                    textTransform: 'none',
                    borderRadius: '3px',
                    boxShadow: '0'}}>
            Save
          </button>
      </div>
    )
  }
}

export default Radium(Settings);