import React from 'react';
import Radium from 'radium';

const styles = {
  tagBorder: {
    fontSize: '16px',
    margin: '10px 5px 5px 0',
    padding: '5px',
    textAlign: 'center',
    color: 'black',
    background: '#fff'
  }
};

class CreateDealAddConditions extends React.Component {
  constructor() {
    super();
    this.state = {
      conditions : []
    };
  }

  postCondition() {
    const condition = this.condition.value;
    if(condition !=='') {
      this.setState({
        conditions: this.state.conditions.concat([condition])
      });
      this.condition.value = '';
    }
  }

  removeCondition(condition) {
    this.setState({
      conditions: this.state.conditions.filter(t =>!(t===condition))
    })
  }

  render() {

    return (
      <div style = {{ background: '#fff', width: '365px', marginTop: '10px', padding: '10px 0' }}>
        <div style = {{textAlign: 'center', fontSize: '16px'}}>
          Add Conditions
        </div>
        <div>
          {this.state.conditions.map(condition => (
            <div style = {{
                display: 'flex',
                padding: '10px 0 10px 10px',
                borderBottom: '1.5px solid rgba(0,0,0,0.12)' }}>
              <li style={{ width: '90%', color: '#5b5b5b' }}>
                {condition}
              </li>
              <div style = {{ width: '10%' }}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        onClick = {this.removeCondition.bind(this, condition)}
                        style = {{ lineHeight: '20px', height: '20px', minWidth: '20px', padding: '0' }}
                  >
                  <i className="material-icons" style = {{ fontSize: '24px' }}>clear</i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style ={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '10px 10px 0 10px' }}>
          <textarea type="text"
                    ref={el => this.condition = el}
                    placeholder="For example : no refunds, rescheduling, or rebooking allowed"
                    rows= "2"
                    style = {{
                         border: 'solid 1px #dcdcdc',
                         borderRadius: '3px',
                         height: '48px',
                         width: '270px',
                         paddingLeft: '10px'
                         }}/>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  onClick={this.postCondition.bind(this)}
                  style= {{
                      background: '#0679A2',
                      minWidth: '28px',
                      padding: '0 5px',
                      borderRadius: '3px',
                      textTransform: 'none'
                         }}
            >
            <span style = {{ color: 'white' }} >Add</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Radium(CreateDealAddConditions);





