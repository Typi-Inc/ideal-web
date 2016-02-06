import React from 'react';
import Radium from 'radium';
import FontIcon from 'material-ui/lib/font-icon';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import DealContactInfo from './DealContactInfo';
import Certificate from './Certificate';
import DealComment from './DealComment';

class TabsOnSmallScreen extends React.Component {
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
            <DealComment/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Radium(TabsOnSmallScreen);
