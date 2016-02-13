import React, { PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from '../utils/shallowEqual';
import { values } from '../utils/helpers';

const styles = {
  contactCard: {
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
    conditions: PropTypes.string
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    conditions: null
  });
  render() {
    return (
      <div style = {styles.contactCard}>
        <div>
          <div style = {{ color: '#666',
            borderBottom: '1.5px solid rgba(0,0,0,0.12)',
            paddingBottom: '5px',
            fontSize: '18px'
          }}
          >
            Условия и особенности
          </div>
          <span>{this.props.conditions}</span>
        </div>
      </div>
    );
  }
}

export default Radium(DealContactInfo);
