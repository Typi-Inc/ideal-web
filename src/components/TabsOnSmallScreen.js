import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import FontIcon from 'material-ui/lib/font-icon';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import DealContactInfo from './DealContactInfo';
import Certificate from './Certificate';
import DealComments from './DealComments';
import { values } from '../utils/helpers';

class TabsOnSmallScreen extends React.Component {
  static propTypes = {
    deal: React.PropTypes.object,
    fetch: React.PropTypes.func
  };
  render() {
    const deal = this.props.deal;
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
          {
            values(_.get(deal, ['certificates', 'sort:createdAt=desc', 'edges'])).
            map(certificate => (
              <div key={`${deal.id}${certificate.id}`}>
                <Certificate {..._.pick(certificate, Object.keys(Certificate.queries()))} />
              </div>
            ))
          }
          </Tab>
          <Tab icon ={
            <FontIcon color="#0679a2" className="material-icons">contact_phone</FontIcon>}
          >
            <DealContactInfo {..._.pick(deal.business, Object.keys(DealContactInfo.queries()))}/>
          </Tab>
          <Tab icon ={<FontIcon color="#0679a2" className="material-icons">chat</FontIcon>}>
            <DealComments {..._.pick(deal, Object.keys(DealComments.queries()))} fetch={this.props.fetch} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Radium(TabsOnSmallScreen);
