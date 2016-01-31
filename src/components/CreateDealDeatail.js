import React from 'react';
import Radium from 'radium';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const styles = {
  dealDetail: {
    background: '#fff',
    width: '400px',
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
      value: 3
    }
  }
  handleChange (e, index, value) {
    this.setState({value});
  }
  render() {

    return (
      <div style = {styles.dealDetail }>
        <div>
          <span style = {[styles.titleStyle, {marginBottom: '10px'}]}>Название сделки</span>
          <input type="text" placeholder="Лучший автосервис"
                 style = {{
                        border: 'solid 1px #dcdcdc',
                        borderRadius: '3px',
                        height: '40px',
                        width: '350px',
                        marginLeft: '17px',
                        paddingLeft: '10px'
                        }}/>
        </div>
        <div style = {{ marginTop: '10px' }}>
          <span style = {styles.titleStyle}>Бонус</span>
                <span>
                  <input type="text" placeholder="100 Тг"
                         style = {{
                          border: 'solid 1px #dcdcdc',
                          width: '76px',
                          padding: '5px 0 5px 5px',
                          borderRadius: '3px' }}/>
                </span>
          <span style = {[styles.titleStyle, { marginLeft: '48px' }]}>Скидка</span>
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
          <span style = {styles.titleStyle}>Срок действия</span>
          <DropDownMenu labelStyle ={{color: '#777777', lineHeight: '24px'}}
                        style = {{ border: 'solid 1px #dcdcdc', height  : '26px' }}
                        iconStyle = {{ height: '18px', width: '18px', fill: 'black', top: '3px', right: '5px' }}
                        value={this.state.value} onChange={this.handleChange.bind(this)}>
            <MenuItem value={1} primaryText="Неделя"/>
            <MenuItem value={2} primaryText="2 Недели"/>
            <MenuItem value={3} primaryText="Месяц"/>
            <MenuItem value={4} primaryText="2 месяца"/>
            <MenuItem value={5} primaryText="Полгода"/>
            <MenuItem value={6} primaryText="Неограниченно"/>
          </DropDownMenu>
        </div>
      </div>

    )
  }
}

export default Radium(CreateDealDeatail);