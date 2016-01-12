import React from 'react';
import Radium from 'radium';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const styles = {
  dealDetail: {
    background: '#fff',
    width: '365px',
    marginTop: '10px',
    padding: '10px 0'
  },
  titleStyle: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#777777',
    padding: '0 20px'
  },
};

class CreateDealDeatail extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 2
    }
  }
  handleChange (e, index, value) {
    this.setState({value});
  }
  render() {

    return (
      <div style = {styles.dealDetail }>
        <div>
          <span style = {styles.titleStyle}>Title</span>
          <input type="text" placeholder="Best Auto service, e.g."
                 style = {{
                        border: 'solid 1px #dcdcdc',
                        borderRadius: '3px',
                        height: '40px',
                        width: '250px',
                        marginLeft: '17px',
                        paddingLeft: '10px'
                        }}/>
        </div>
        <div style = {{ marginTop: '10px' }}>
          <span style = {styles.titleStyle}>Payout</span>
                <span>
                  <input type="text" placeholder="100Tg"
                         style = {{
                          border: 'solid 1px #dcdcdc',
                          width: '76px',
                          padding: '5px 0 5px 5px',
                          borderRadius: '3px' }}/>
                </span>
          <span style = {styles.titleStyle}>Discount</span>
                <span>
                  <input type="text" placeholder="10%"
                         style = {{
                           border: 'solid 1px #dcdcdc',
                           width: '76px',
                           padding: '5px 0 5px 5px',
                           borderRadius: '3px' }}/>
                </span>
        </div>
        <div  style = {{ marginTop: '10px' }}>
          <span style = {styles.titleStyle}>Deal duration</span>
          <DropDownMenu labelStyle ={{color: '#777777', lineHeight: '24px'}}
                        style = {{ border: 'solid 1px #dcdcdc', height  : '26px' }}
                        iconStyle = {{ height: '18px', width: '18px', fill: 'black', top: '3px', right: '5px' }}
                        value={this.state.value} onChange={this.handleChange.bind(this)}>
            <MenuItem value={1} primaryText="Week"/>
            <MenuItem value={2} primaryText="2 Weeks"/>
            <MenuItem value={3} primaryText="Month"/>
            <MenuItem value={4} primaryText="2 Months"/>
            <MenuItem value={5} primaryText="Half year"/>
            <MenuItem value={6} primaryText="Unlimit"/>
          </DropDownMenu>
        </div>
      </div>

    )
  }
}

export default Radium(CreateDealDeatail);