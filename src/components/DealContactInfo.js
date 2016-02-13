import React, { PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';
import { values } from '../utils/helpers';
import FontIcon from 'material-ui/lib/font-icon';

const styles = {
  title: {
    display: 'none',
    '@media (min-width: 740px)': {
      display: 'block',
      fontSize: '18px',
      color: '#666',
      borderBottom: '1.5px solid rgba(0,0,0,0.12)',
      paddingBottom: '5px'
    }
  },
  contactCard: {
    color: '#a99999',
    padding: '10px',
    '@media (min-width: 740px)': {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px',
      background: '#fff'
    }
  }
};

class DealContactInfo extends React.Component {
  static propTypes = {
    city: PropTypes.string,
    street: PropTypes.string,
    phones: PropTypes.array,
    schedule: PropTypes.array,
    conditions: PropTypes.string
  };
  shouldComponentUpdate(nextProps) {
    console.log(!shallowEqual(this.props, nextProps));
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    city: null,
    street: null,
    phones: null,
    schedule: null,
    conditions: null
  });
  render() {
    return (
      <div style = {styles.contactCard}>
        <div style = {styles.title }>
          Контактная информация
        </div>
        <div style = {{ display: 'flex', paddingTop: '10px' }}>
          <div style = {{ width: '10%', alignSelf: 'center' }}>
            <FontIcon className="material-icons"
                      color = "#0679a2"
                      style = {{ fontSize: '24px' }}
            >location_on</FontIcon>
          </div>
          <div>
            Адрес: {this.props.city}, {this.props.street}
          </div>
        </div>
        <div style = {{ display: 'flex' }}>
          <div style = {{ width: '10%', alignSelf: 'center' }}>
            <FontIcon className="material-icons"
                      color = "#0679a2"
                      style = {{ fontSize: '24px' }}
            >schedule</FontIcon>
          </div>
          <div>
            <div>
              Tel: {values(this.props.phones).map(phone => <span key={phone}>{phone}<br/></span>)}
            </div>
            <div>
              Работаем: {values(this.props.schedule).map(item => <span key={item}>{item}<br/></span>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(DealContactInfo);
