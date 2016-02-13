import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';

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
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        margin: '0 10px'
      }}
      >
        <div style = {{ paddingTop: '5px' }}>
          <Checkbox
            checkedIcon={<ActionFavorite />}
            unCheckedIcon={<ActionFavoriteBorder />}
            label="Like"
            labelStyle = {{ color: 'red' }}
            iconStyle = {{ fill: 'red' }}
          />
        </div>
        <div>
          <img src="/src/public/assets/hand132-5.png" height = "22px" style = {{
          verticalAlign: 'middle' }}/>
          <FlatButton labelStyle={{ color: '#0679A2', fontSize: '16px', textTransform: 'none' }}
            label="Рекомендовать"
            onTouchTap={this.handleOpen.bind(this)}
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
      </div>
    );
  }
}

export default Radium(EarnBuy);
