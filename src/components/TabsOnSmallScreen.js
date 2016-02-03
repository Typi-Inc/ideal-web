import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import DealContactInfo from './DealContactInfo';
import Certificate from './Certificate';

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
      <div style = {{
        background: 'white',
        margin: '10px',
        '@media (min-width: 740px)': { display: 'none' }
      }}
      >
        <Tabs inkBarStyle = {{ backgroundColor: '#0679a2' }}
          tabItemContainerStyle = {{ backgroundColor: '#fff' }}
        >
          <Tab icon ={<FontIcon color="#0679a2" className="material-icons">description</FontIcon>}>
            <Certificate/>
          </Tab>
          <Tab icon ={
            <FontIcon color="#0679a2" className="material-icons">contact_phone</FontIcon>}
          >
            <DealContactInfo/>
          </Tab>
          <Tab icon ={<FontIcon color="#0679a2" className="material-icons">chat</FontIcon>}>
            Yesa
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Radium(TabsOnSmallScreen);

//<div className="mdl-tabs__panel" id="sms">
//  <div>
//  <form action="#" style = {{ padding: '0 10px' }}>
//<div className="mdl-textfield mdl-js-textfield" style = {{ width: '100%' }}>
//<textarea ref={el => this.comment = el}
//className="mdl-textfield__input"
//type="text"
//rows= "3"
//id="smsAd"
//  ></textarea>
//  <label className="mdl-textfield__label" htmlFor="smsAd">What do you think of this ad?...</label>
//</div>
//</form>
//<div style = {{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 10px' }}>
//  <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
//          onClick={this.postComment.bind(this)}
//          style= {{
//                    width: '28px',
//                    height: '28px',
//                    minWidth: '28px',
//                    paddingRight: '30px'
//                  }}
//  >
//    <i className="material-icons" style = {{ color: '#a99999', paddingBottom: '10px' }}>chat_bubble_outline</i>
//  </button>
//  Say it!
//</div>
//</div>
//</div>