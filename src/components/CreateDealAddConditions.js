import React from 'react';
import Radium from 'radium';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';


class CreateDealAddConditions extends React.Component {
  constructor() {
    super();
    this.state = {
      conditions: []
    };
  }

  postCondition() {
    const condition = this.condition.value;
    if (condition !== '') {
      this.setState({
        conditions: this.state.conditions.concat([condition])
      });
      this.condition.value = '';
    }
  }

  removeCondition(condition) {
    this.setState({
      conditions: this.state.conditions.filter(t => !(t === condition))
    });
  }

  render() {
    return (
      <div style = {{ background: '#fff', width: '400px', marginTop: '10px', padding: '10px 0' }}>
        <div style = {{ textAlign: 'center', fontSize: '16px' }}>
          Условия сделки
        </div>
        <div>
          {this.state.conditions.map(condition => (
            <div style = {{
              display: 'flex',
              padding: '10px 0 5px 25px',
              borderBottom: '1.5px solid rgba(0,0,0,0.12)' }}
            >
              <li style={{ width: '90%', color: '#5b5b5b' }}>
                {condition}
              </li>
              <div style = {{ width: '10%' }}>
                <FlatButton
                  onClick = {this.removeCondition.bind(this, condition)}
                  style = {{ lineHeight: '20px', height: '20px', minWidth: '20px', padding: '0' }}
                >
                  <FontIcon className="material-icons" style = {{ fontSize: '14px' }}>
                    clear</FontIcon>
                </FlatButton>
              </div>
            </div>
          ))}
        </div>
        <div style ={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end', padding: '10px 10px 0 10px' }}
        >
          <textarea type="text"
            ref={el => this.condition = el}
            placeholder="К примеру : возврату, изменению не подлежат"
            rows= "2"
            style = {{
              border: 'solid 1px #dcdcdc',
              borderRadius: '3px',
              height: '48px',
              width: '260px',
              paddingLeft: '10px'
            }}
          />
          <FlatButton labelStyle = {{ color: '#fff', textTransform: 'none', padding: '0px' }}
            label = "Добавить"
            onClick={this.postCondition.bind(this)}
            style = {{
              backgroundColor: '#0679A2', width: '80px'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Radium(CreateDealAddConditions);
