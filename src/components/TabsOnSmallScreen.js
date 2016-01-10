import React from 'react';
import Radium from 'radium';

const styles = {

};

class TabsOnSmallScreen extends React.Component {
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
      <div  style = {{
            background: 'white',
            margin: '10px',
            '@media (min-width: 740px)': { display: 'none' }
             }} >
        <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
          <div className="mdl-tabs__tab-bar"
               style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }}
            >
            <a href="#deals" className="mdl-tabs__tab" style = {{ width: '33%' }}>
              <i className="material-icons" style = {{ paddingTop: '10px' }}>description</i>
            </a>
            <a href="#address" className="mdl-tabs__tab" style = {{ width: '33%' }}>
              <i className="material-icons" style = {{ paddingTop: '10px' }}>contact_phone</i>
            </a>
            <a href="#sms" className="mdl-tabs__tab" style = {{ width: '33%' }}>
              <i className="material-icons" style = {{ paddingTop: '10px' }}>chat</i>
            </a>
          </div>
          <div className="mdl-tabs__panel is-active" id="deals" >
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', alignItems: 'center' }}>
              <div style={{ width: '70%' }}>
                <div style={{ padding: '10px' }}>
                  Five Fitness and Conditioning Classes at #TeamTibbs Fitness (70% Off)
                </div>
              </div>
              <div>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        style= {{
                        width: '28px',
                        height: '28px',
                        background: '#a99999',
                        minWidth: '28px',
                        padding: '0px'
                      }}
                  >
                  <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }}>remove</i>
                </button>
                <span style = {{ padding: '0 5px', fontSize: '16px' }}>15</span>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        style= {{
                        width: '28px',
                        height: '28px',
                        background: '#54C085',
                        minWidth: '28px',
                        padding: '0px'
                      }}
                  >
                  <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }} >add</i>
                </button>
              </div>
            </div>
          </div>

          <div className="mdl-tabs__panel" id="address" style = {{ color: '#a99999', padding: '10px' }}>
            Address: c. Almaty, mkr. Mamyr 4, 197A
            <div>Tel:
              +7 (727) 255-58-57
              +7 (778) 668-88-58
            </div>
          </div>

          <div className="mdl-tabs__panel" id="sms">
            <div>
              <form action="#" style = {{ padding: '0 10px' }}>
                <div className="mdl-textfield mdl-js-textfield" style = {{ width: '100%' }}>
                      <textarea ref={el => this.comment = el}
                                className="mdl-textfield__input"
                                type="text"
                                rows= "3"
                                id="smsAd"
                        ></textarea>
                  <label className="mdl-textfield__label" htmlFor="smsAd">What do you think of this ad?...</label>
                </div>
              </form>
              <div style = {{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 10px' }}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        onClick={this.postComment.bind(this)}
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
        </div>
      </div>
    )
  }
}

export default Radium(TabsOnSmallScreen);