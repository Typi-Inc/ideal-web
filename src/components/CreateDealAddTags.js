import React from 'react';
import Radium from 'radium';

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
      <div style = {{ background: '#fff', width: '365px', marginTop: '10px', padding: '10px 0' }}>
        <div style = {{textAlign: 'center', fontSize: '16px'}}>
          Add tags that defines your Deal
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
        <div style ={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px 0 10px' }}>
          <input type="text"
                 ref={el => this.tagName = el}
                 placeholder="Autoservice, Bakery, Bar, e.g."
                 style = {{
                         border: 'solid 1px #dcdcdc',
                         borderRadius: '3px',
                         height: '32px',
                         width: '270px',
                         paddingLeft: '10px'
                         }}/>
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
    )
  }
}

export default Radium(CreateDealAddTags);