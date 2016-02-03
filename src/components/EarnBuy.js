import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';

class EarnBuy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
        label="Отмена"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Скопировать"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 10px'
      }}
      >
        <div>
          <FlatButton labelStyle={{ color: 'red', fontSize: '16px', textTransform: 'none' }}
            label="Like"
            style={{
              backgroundColor: '#fff'
            }}
          />
        </div>
        <div>
          <FlatButton labelStyle={{ color: '#0679A2', fontSize: '16px', textTransform: 'none' }}
            label="Рекомендовать"
            onTouchTap={this.handleOpen.bind(this)}
            style={{
              backgroundColor: '#fff'
            }}
          />
        </div>
        <Dialog
          title="Твоя рекомендательная ссылка"
          actions={actions}
          titleStyle = {{ color: '#a99999' }}
          modal={false}
          open={this.state.open}
          contentStyle = {{ color: '#0679a2' }}
          onRequestClose={this.handleClose.bind(this)}
        >
          <FontIcon className="material-icons"
            color = "#0679a2"
            style = {{ fontSize: '18px', marginRight: '5px' }}
          >link</FontIcon>
          https://poblatu.kz/1232545434
        </Dialog>
        <div>
          <FlatButton labelStyle={{ color: '#54c085', fontSize: '16px', textTransform: 'none' }}
            label="Купить"
            style={{
              backgroundColor: '#fff'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Radium(EarnBuy);
