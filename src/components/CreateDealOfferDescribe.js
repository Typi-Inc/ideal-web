import React from 'react';
import Radium from 'radium';

const styles = {
  describeCard : {
    background: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '10px',
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
        {
          dealTitleValue: '',
          newPrice: ''
        }
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

  render() {
    return (
      <div style = {{ width: '50%'}}>
        <div
          style = {styles.describeCard}>
          Describe Your offers
        </div>

        {this.state.dealOptions.map(dealOption => (
          <div style={{
                background: '#fff',
                margin: '10px 0'
              }}
            >
            <div style = {{ color: '#a99999', fontSize: '18px' }} >{dealOption.dealTitleValue}</div>
            <div>{}</div>
            <div>{dealOption.newPrice}</div>
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