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
  },{
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },{
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },
  {
    certificateTitle: 'Five Fitness and Conditioning Classes at #TeamTibbs Fitness',
    oldPrice: '1000',
    newPrice: '500'
  },{
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
        padding: '10px',
        margin: '10px 10px 10px 0',
        background: '#fff'
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
              <div style={{ width: '70%', padding: '10px' }}>
                {certificateOption.certificateTitle}
              </div>
              <div>
                <span style = {{ fontSize: '16px',
                  textDecoration: 'line-through',
                  marginRight: '5px'
                }}
                >
                  {certificateOption.oldPrice} тг</span>
                <span style = {{ color: '#777777', fontSize: '18px' }}>
                   {certificateOption.newPrice} тг</span>
              </div>
            </div>
            <div style = {{ float: 'right' }}>
              <FlatButton
                style = {{ lineHeight: '20px', height: '20px', minWidth: '20px', padding: '0' }}
              >
                <FontIcon className="material-icons"
                  color="red" style = {{ fontSize: '18px' }}
                >remove</FontIcon>
              </FlatButton>
              <span style={{ padding: '0 5px', fontSize: '22px' }}>0</span>
              <FlatButton
                style = {{ lineHeight: '20px', height: '20px', minWidth: '20px', padding: '0' }}
              >
                <FontIcon className="material-icons"
                  color="#54c085" style = {{ fontSize: '18px' }}
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
