import React from 'react';
import Radium from 'radium';

const styles = {
  title: {
    fontFamily: 'Roboto, helvetica, arial, sans-serif',
    fontSize: '18px',
    color: '#666',
    borderBottom: '1.5px solid rgba(0,0,0,0.12)',
    marginBottom: '10px'
  }
};

class DealComment extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          author: 'Almas',
          text: 'Hello my bitch'
        }
      ]
    };
  }
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  onCommentKeyPress(e) {
    if (e.keyCode === 13 && this.comment.value !== '') {
      this.postComment();
      this.comment.value = '';
    }
  }
  postComment() {
    const comment = this.comment.value;
    if (comment !== '') {
      this.setState({
        comments: this.state.comments.concat([{ author: 'Isken', text: comment }])
      });
      this.comment.value = '';
    }
  }
  render() {

    return (

      <div>
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            background: 'white',
            margin: '10px 10px 0 10px',
            '@media (min-width: 740px)': { margin: '10px 10px 0 0' }
          }}
          >
          <div style = {styles.title}>
            <i className="material-icons" style = {{ fontSize: '14px' }}>chat_bubble_outline</i>
            <span style = {{ paddingLeft: '5px' }}>Comments</span>
          </div>

          <div style = {{ display: 'flex' }}>
            <div>
              <img src="https://newyorksightseeingtours.files.wordpress.com/2011/11/kenneth-cole.jpg"
                   style={{ height: '50px' }}
                />
            </div>
            <div style = {{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
              <div style = {{ fontWeight: '600' }}>
                Kenneth Lee
              </div>
              <div style = {{ fontSize: '16px' }}>
                Great deal!
              </div>
              <div style = {{ color: '#a99999' }}>
                24 august 2015
              </div>
            </div>
          </div>
          <div style = {{
              display: 'flex',
              paddingTop: '10px',
              borderTop: '1px solid rgba(0,0,0,0.12)'
            }}
            >
            <div>
              <img src="http://www.spacefacts.de/bios/portraits_hi/cosmonauts/kotov_oleg.jpg"
                   style={{ height: '50px' }}
                />
            </div>
            <div style = {{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
              <div style = {{ fontWeight: '600' }}>
                Oleg  Potapovich
              </div>
              <div style = {{ fontSize: '16px' }}>
                Hu9ase!
              </div>
              <div style = {{ color: '#a99999' }}>
                Today
              </div>
            </div>
          </div>
          {this.state.comments.map(comment => (
            <div style={{
                display: 'flex',
                paddingTop: '10px',
                borderTop: '1px solid rgba(0,0,0,0.12)'
              }}
              >
              <div>
                <img src="http://www.spacefacts.de/bios/portraits_hi/cosmonauts/kotov_oleg.jpg"
                     style={{ height: '50px' }}
                  />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                <div style={{ fontWeight: '600' }}>
                  {comment.author}
                </div>
                <div style={{ fontSize: '16px' }}>
                  {comment.text}
                </div>
                <div style={{ color: '#a99999' }}>
                  Today
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style = {{
            display: 'none',
            '@media (min-width: 740px)': {
              display: 'flex',
              flexDirection: 'column',
              color: '#a99999',
              margin: '10px 10px 10px 0',
              padding: '10px',
              background: '#fff'
            }
          }}
          >
          <form action="#" style = {{ padding: '0 10px' }}>
            <div className="mdl-textfield mdl-js-textfield" style = {{ width: '100%' }}>
                <textarea ref={el => this.comment = el}
                          className="mdl-textfield__input"
                          type="text"
                          rows= "3"
                          id="smsAd"
                          onKeyDown={this.onCommentKeyPress.bind(this)}
                  >
                </textarea>
              <label className="mdl-textfield__label" htmlFor="smsAd">What do you think of this ad?...</label>
            </div>
          </form>
          <div style = {{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '0 10px'
            }}
            >
            <button onClick={this.postComment.bind(this)} className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style= {{
                  width: '28px',
                  height: '28px',
                  minWidth: '28px',
                  paddingRight: '30px'
                }}
              >
              <i className="material-icons" style = {{ color: '#a99999', paddingBottom: '10px' }}>chat_bubble_outline</i>
            </button>
            Say it!
          </div>
        </div>
      </div>

    )
  }
}

export default Radium(DealComment);