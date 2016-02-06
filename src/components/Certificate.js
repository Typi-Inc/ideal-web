import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
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

const certificateOptions = [
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  }
];

class Certificate extends React.Component {

  render() {
    return (
      <div style = {{
        display: 'flex',
        flexDirection: 'column',
        color: '#a99999',
        padding: '5px',
        background: '#fff',
        '@media (min-width: 740px)': { padding: '10px', margin: '10px 10px 10px 0' }
      }}
      >
        <div style = {styles.title}>
          Сертификаты
        </div>
        {certificateOptions.map(certificateOption => (
          <div style = {{ borderBottom: '1.5px solid rgba(0,0,0,0.12)' }}>
            <div style={{ display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center' }}
            >
              <div style={{ width: '70%', padding: '5px', fontSize: '12px',
                '@media (min-width: 740px)': { fontSize: '16px', padding: '10px' } }}
              >
                {certificateOption.certificateTitle}
              </div>
              <div>
                <span style = {{ fontSize: '10px',
                  textDecoration: 'line-through',
                  marginRight: '5px',
                  '@media (min-width: 740px)': { fontSize: '16px' }
                }}
                >
                  {certificateOption.oldPrice} тг</span>
                <span style = {{ color: '#777777', fontSize: '12px',
                 '@media (min-width: 740px)': { fontSize: '18px' } }}
                >
                   {certificateOption.newPrice} тг</span>
              </div>
            </div>
            <div style = {{ display: 'flex', justifyContent: 'center', paddingBottom: '10px',
              '@media (min-width: 740px)': { display: 'block',
                margin: '0', float: 'right', paddingBottom: '0' } }}
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
        ))}
      </div>
    );
  }
}

export default Radium(Certificate);
