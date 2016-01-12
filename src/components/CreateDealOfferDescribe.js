import React from 'react';
import Radium from 'radium';

const styles = {
  describeCard : {
    background: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    margin: '10px 0',
    fontWeight: '500',
    fontSize: '20px',
    color: '#777777'
  }
};

class CreateDealOfferDescribe extends React.Component {
  constructor() {
    super();
    this.state = {
      dealOptions: [
      ]
    };
  }

  postDeal() {
    const dealTitleValue = this.dealTitleValue.value;
    const newPrice = this.newPrice.value;

    if(dealTitleValue !=='' && newPrice !== '') {
      this.setState({
        dealOptions: this.state.dealOptions.concat([{ dealTitleValue: dealTitleValue,  newPrice: newPrice }])
      });
      this.newPrice.value = '';
      this.dealTitleValue.value = '';
    }
  }
  removeDeal(deal) {
    this.setState({
      dealOptions: this.state.dealOptions.filter(t =>!(t===deal))
    })
  }
  render() {
    return (
      <div style = {{ width: '50%'}}>
        <div
          style = {styles.describeCard}>
          Describe Your offers
        </div>

        {this.state.dealOptions.map(dealOption => (
            <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: '#fff',
                  margin: '10px 0'
                }}
              >
              <div>
                <div style = {{
                  color: '#5b5b5b',
                  fontSize: '18px',
                  padding: '10px' }} >{dealOption.dealTitleValue}</div>
                <div style = {{
                  float: 'right',
                  fontFamily: 'Monaco, Consolas, monospace',
                  padding: '0 0 10px 10px',
                  fontSize: '16px'
                }}>{dealOption.newPrice}</div>
              </div>
              <div style = {{marginRight: '5px'}}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        onClick = {this.removeDeal.bind(this, dealOption)}
                        style= {{
                          borderRadius: '3px',
                          textTransform: 'none',
                          minWidth: '24px',
                          padding: '0'
                               }}
                  >
                  <i className="material-icons" style = {{ color: '#777777', fontSize: '20px' }} >delete</i>
                </button>
              </div>
            </div>
        ))}

        <div style = {{ background: '#fff', padding: '10px', marginBottom: '10px' }}>
          <div style = {{ color: '#777777', fontSize: '16px' }}>
            Offer Title
          </div>
          <div>
                <textarea
                  type="text"
                  ref={el => this.dealTitleValue = el}
                  placeholder="Be clear and descriptive" rows= "4"
                  style = {{
                    border: 'solid 1px #dcdcdc',
                    width: '95%',
                    height: '75px',
                    margin: '10px 0',
                    paddingLeft: '5%',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '3px'
                     }}/>
          </div>
          <div style = {{ display: 'flex', justifyContent: 'flex-end' }}>
            <div>
              <span style = {{ color: '#777777', fontSize: '16px', padding: '0 10px'  }}>Price</span>
              <input type="text"
                     ref={el => this.newPrice = el}
                     style = {{ border: 'solid 1px #dcdcdc', width: '75px', height: '20px', borderRadius: '3px' }}/>
            </div>
          </div>
        </div>
        <div>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  onClick={this.postDeal.bind(this)}
                  style={{
                        background: '#fff',
                        width: '100%',
                        color: '#0679A2',
                        borderRadius: '3px',
                        boxShadow: '0',
                        fontSize: '18px',
                        textTransform: 'none',
                        fontWeight: '500'
                        }}>
            Add
          </button>
        </div>
      </div>
    )
  }
}

export default Radium(CreateDealOfferDescribe);

