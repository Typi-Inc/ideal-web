import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';
import FlatButton from 'material-ui/lib/flat-button';

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
          author: 'Алмас',
          text: 'Дарова!'
        }
      ]
    };
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
        comments: this.state.comments.concat([{ author: 'Еса', text: comment }])
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
            <FontIcon className="material-icons" style = {{ fontSize: '14px' }}>
              chat_bubble_outline</FontIcon>
            <span style = {{ paddingLeft: '5px' }}>Комментарии</span>
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
          <textarea
            type="text"
            ref={el => this.comment = el}
            onKeyDown={this.onCommentKeyPress.bind(this)}
            placeholder="Что вы думаете об этой сделке?" rows= "2"
            style = {{
              border: 'solid 1px #dcdcdc',
              width: '95%',
              height: '75px',
              margin: '10px 0',
              paddingLeft: '2%',
              fontSize: '16px',
              fontWeight: '500',
              borderRadius: '3px'
            }}
          />
          <div style = {{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '0 10px'
          }}
          >
            Поделись!
            <FlatButton
              onClick = {this.postComment.bind(this)}
              style = {{ width: '28px',
                minWidth: '28px'
            }}
            >
              <FontIcon className="material-icons"
                color = "#a99999"
                style = {{ fontSize: '18px' }}
              >chat_bubble_outline</FontIcon>
            </FlatButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(DealComment);