import React from 'react';
import Radium from 'radium';
import DropZone from 'react-dropzone';
import CreateDealDetail from './CreateDealDetail';
import CreateDealAddTags from './CreateDealAddTags.js';
import CreateDealOfferDescribe from './CreateDealOfferDescribe';
import CreateDealAddConditions from './CreateDealAddConditions';

const styles = {
  dropZoneDetail: {
    background: '#fff',
    width: '398px',
    height: '250px',
    color: '#777777',
    borderStyle: 'dotted',
    borderColor: '#d6d6d6',
    marginTop: '10px',
    textAlign: 'center'
  }
};

class CreateDeal extends React.Component {

  onDrop(files) {
    console.log('Received files: ', files);
  }

  render() {
    return (
      <div key = "create deal"
        style = {{
          paddingTop: '60px',
          '@media (min-width: 1000px)': { width: '1000px', margin: '0 auto' },
          '@media (min-width: 1485px)': { width: '1485px', margin: '0 auto' }
        }}
      >
        <div style = {{
          display: 'none',
          width: '100%',
          '@media (min-width: 1000px)': { display: 'flex', justifyContent: 'center' }
          }}
        >
          <div style = {{ width: '400px' }}>
            <DropZone onDrop={this.onDrop}
              style ={styles.dropZoneDetail}
            >
              <div>
                <div style = {{ fontSize: '24px', fontWeight: '600', paddingTop: '80px' }}>
                  Добавить фото</div>
                <div style = {{ fontSize: '18px', padding: '20px 10px' }}>
                  Перетащите фото в рамку либо укажите путь к файлу</div>
              </div>
            </DropZone>
            <CreateDealDetail/>
            <CreateDealAddTags/>
            <CreateDealAddConditions/>
          </div>
          <CreateDealOfferDescribe/>
        </div>
        <div style = {{ background: '#fff', padding: '10px',
          '@media (min-width: 1000px)': { display: 'none' } }}
        >
          Опция создания сделки отключена на мобильной версии сайта
        </div>
      </div>
    );
  }
}

export default Radium(CreateDeal);
