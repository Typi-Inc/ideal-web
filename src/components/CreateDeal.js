import React from 'react';
import Radium from 'radium';
import Link from './Link';
import DropZone from 'react-dropzone';
import CreateDealDetail from './CreateDealDeatail';
import CreateDealAddTags from './CreateDealAddTags.js';
import CreateDealOfferDescribe from './CreateDealOfferDescribe';
import CreateDealAddConditions from './CreateDealAddConditions';

const styles = {
  dropZoneDetail: {
    background: '#fff',
    width: '360px',
    height: '250px',
    color: '#777777',
    borderStyle: 'dotted',
    borderColor: '#d6d6d6',
    marginTop: '10px',
    textAlign: 'center'
  }
};

class CreateDeal extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  onDrop (files) {
    console.log('Received files: ', files);
  }

  render() {
    return (
      <div key = "create deal"
        style = {{
          '@media (min-width: 950px)': { width: '950px', margin: '0 auto' },
          '@media (min-width: 1450px)': { width: '1450px', margin: '0 auto' }
        }}
      >
        <div style = {{
            display: 'none',
            '@media (min-width: 950px)': { display: 'flex', justifyContent: 'center' },
            '@media (min-width: 1450px)': { display: 'flex', justifyContent: 'space-around' }}}>
          <div style = {{ width: '40%'}}>
            <DropZone onDrop={this.onDrop}
                      style ={styles.dropZoneDetail}>
              <div>
                <div  style = {{fontSize: '24px', fontWeight: '600', paddingTop: '80px'}}>Add item image</div>
                <div style = {{ fontSize: '18px', paddingTop: '20px' }}>Drop an image or browse it from your computer</div>
              </div>
            </DropZone>
            <CreateDealDetail/>
            <CreateDealAddTags/>
            <CreateDealAddConditions/>
          </div>
          <CreateDealOfferDescribe/>
        </div>
        <div style = {{ background: '#fff', padding: '10px', '@media (min-width: 950px)': { display: 'none' } }}>
          Create deal function is disabled for small screens
        </div>
      </div>
    );
  }
}

export default Radium(CreateDeal);
