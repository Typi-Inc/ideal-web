import React from 'react';
import Radium from 'radium';
import Link from './Link';
import DropZone from 'react-dropzone';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const styles = {
  titleStyle: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#777777',
    padding: '0 20px'
  },
  dealDetail: {
    background: '#fff',
    width: '360px',
    marginTop: '10px',
    padding: '10px 0'
  },
  dropZoneDetail: {
    background: '#fff',
    width: '360px',
    height: '250px',
    color: '#777777',
    borderStyle: 'dotted',
    borderColor: '#d6d6d6',
    marginTop: '10px',
    textAlign: 'center'
  },
  describeCard : {
    background: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '10px',
    fontWeight: '500',
    fontSize: '20px',
    color: '#777777'
  },
  tagBorder: {
    fontSize: '14px',
    borderRadius: '5px',
    minWidth: '40px',
    margin: '10px 5px 5px 0',
    padding: '5px',
    textAlign: 'center',
    color: '#777777',
    background: '#fff',
    border: '1.5px solid #eee'
  }
};

class CreateDeal extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  constructor() {
    super();
    this.state = {
      value: 2,
      dealOptions: [
        {
        dealTitleValue: '',
        oldPrice: '',
        newPrice: ''
        }
      ],
      tagNames : [],
      isOpen: 'false'
    };
  }

  postDeal() {
    const dealTitleValue = this.dealTitleValue.value;
    const oldPrice = this.oldPrice.value;
    const newPrice = this.newPrice.value;

    if(dealTitleValue !=='' && oldPrice !== '' && newPrice !== '') {
      this.setState({
        dealOptions: this.state.dealOptions.concat([{ dealTitleValue: dealTitleValue, oldPrice: oldPrice, newPrice: newPrice }])
      });
      this.oldPrice.value = '';
      this.newPrice.value = '';
      this.dealTitleValue.value = '';
    }
  }

  removeTag(tag) {
    this.setState({
      tagNames: this.state.tagNames.filter(t =>!(t===tag))
    })
  }

  postTag() {
    const tagName = this.tagName.value;
    if(tagName !=='') {
    this.setState({
      tagNames: this.state.tagNames.concat([tagName])
    });
    this.tagName.value = '';
    }
  }

  onDrop (files) {
    console.log('Received files: ', files);
  }
  handleChange (e, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div key = "create deal"
        style = {{
          '@media (min-width: 950px)': { width: '950px', margin: '0 auto' },
          '@media (min-width: 1450px)': { width: '1450px', margin: '0 auto' }
        }}
      >
        <div style = {{ display: 'none', '@media (min-width: 950px)': { display: 'flex', justifyContent: 'center' } }}>
          <div style = {{ width: '40%'}}>
            <DropZone onDrop={this.onDrop}
                      style ={styles.dropZoneDetail}>
              <div>
                <div  style = {{fontSize: '24px', fontWeight: '600', paddingTop: '80px'}}>Add item image</div>
                <div style = {{ fontSize: '18px', paddingTop: '20px' }}>Drop an image or browse it from your computer</div>
              </div>
            </DropZone>

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

            <div style = {{ background: '#fff', width: '360px', marginTop: '10px', padding: '10px 0' }}>
              <div style = {[styles.titleStyle, {textAlign: 'center', fontSize: '16px'}]}>
                Add tags that defines your Deal
              </div>
              <div style = {{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.tagNames.map(tagName => (
                  <div style={ styles.tagBorder }>
                    {tagName}
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                      onClick = {this.removeTag.bind(this, tagName)}
                      style = {{ lineHeight: '20px', height: '20px', minWidth: '20px', padding: '0' }}
                    >
                      <i className="material-icons" style = {{ fontSize: '14px' }}>remove</i>
                    </button>
                  </div>
                ))}
              </div>
              <div style ={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px 0 10px' }}>
                <input type="text"
                       ref={el => this.tagName = el}
                       placeholder="Autoservice, Bakery, Bar, e.g."
                       style = {{
                         border: 'solid 1px #dcdcdc',
                         borderRadius: '3px',
                         height: '32px',
                         width: '230px',
                         paddingLeft: '10px'
                         }}/>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        onClick={this.postTag.bind(this)}
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
          </div>
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
                <div>{dealOption.oldPrice}</div>
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
              <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <span style = {{ color: '#777777', fontSize: '16px', padding: '0 10px' }}>Old Price</span>
                  <input type="text"
                         ref={el => this.oldPrice = el}
                         style = {{ border: 'solid 1px #dcdcdc', width: '75px', height: '20px', borderRadius: '3px' }}/>
                </div>
                <div>
                  <span style = {{ color: '#777777', fontSize: '16px', padding: '0 10px'  }}>New Price</span>
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
        </div>

        <div style = {{ background: '#fff', padding: '10px', '@media (min-width: 950px)': { display: 'none' } }}>
          Create deal function is disabled for small screens
        </div>

      </div>
    );
  }
}

export default Radium(CreateDeal);
