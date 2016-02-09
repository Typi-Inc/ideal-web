import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import shallowEqual from '../utils/shallowEqual';

const styles = {
  flatButtonStyleLeft: {
    padding: '0',
    border: '1px solid #0679a2',
    lineHeight: '0',
    minWidth: '60px',
    borderRadius: '5px 0px 0px 5px'
  },
  flatButtonStyleRight: {
    padding: '0',
    lineHeight: '0',
    minWidth: '60px',
    border: '1px solid #0679a2',
    borderRadius: '0px 5px 5px 0px'
  }
};

class Certificate extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    newPrice: React.PropTypes.number,
    oldPrice: React.PropTypes.number,
    totalCount: React.PropTypes.number
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  static queries = () => ({
    newPrice: null,
    oldPrice: null,
    totalCount: null,
    title: null
  });
  render() {
    return (
      <div style = {{ borderBottom: '1.5px solid rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column'
        }}
      >
        <div style={{ display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center' }}
        >
          <div style={{ width: '65%', padding: '5px', fontSize: '12px',
            '@media (min-width: 740px)': { width: '75%', fontSize: '16px', padding: '10px' } }}
          >
            {this.props.title}
          </div>
          <div style = {{ paddingRight: '5px', '@media (min-width: 740px)': { paddingRight: '0px' } }}>
            <span style = {{ fontSize: '10px',
              textDecoration: 'line-through',
              marginRight: '5px',
              '@media (min-width: 740px)': { fontSize: '16px', paddingRight: '5px' }
            }}
            >
              {this.props.oldPrice}</span>
            <span style = {{ color: '#777777', fontSize: '12px',
             '@media (min-width: 740px)': { fontSize: '18px' } }}
            >
               {this.props.newPrice} тг</span>
          </div>
        </div>
        <div style = {{ display: 'flex', justifyContent: 'center', paddingBottom: '10px',
          '@media (min-width: 740px)': { margin: '0', alignSelf: 'flex-end', paddingBottom: '0' } }}
        >
          <FlatButton
            style = {styles.flatButtonStyleLeft}
          >
            <FontIcon className="material-icons"
              color="#0679a2" style = {{ fontSize: '18px' }}
            >remove</FontIcon>
          </FlatButton>
          <span style={{
            width: '30px',
            fontSize: '14px',
            color: '#0679a2',
            height: '36px',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            lineHeight: '36px',
            textAlign: 'center',
            '@media (min-width: 740px)': { fontSize: '22px' } }}
          >0</span>
          <FlatButton
            style = {styles.flatButtonStyleRight}
          >
            <FontIcon className="material-icons"
              color="#0679a2" style = {{ fontSize: '18px' }}
            >add</FontIcon>
          </FlatButton>
        </div>
      </div>
    );
  }
}

export default Radium(Certificate);
