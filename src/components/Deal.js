import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import { values, range } from '../utils/helpers';
import DealContactInfo from './DealContactInfo';
import EarnBuy from './EarnBuy';
import Tag from './Tag.js';
import Certificate from './Certificate';
import Title from './Title';
import Stats from './Stats';
import DealComments from './DealComments';
import TabsOnSmallScreen from './TabsOnSmallScreen';
import Discount from './Discount';
import Image from './Image';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    background: '#fff'
  },
  title: {
    fontSize: '18px',
    color: '#666',
    borderBottom: '1.5px solid rgba(0,0,0,0.12)',
    marginBottom: '10px'
  },
  titleCertificate: {
    display: 'none',
    '@media (min-width: 740px)': {
      display: 'block',
      fontSize: '18px',
      color: '#666',
      borderBottom: '1.5px solid rgba(0,0,0,0.12)',
      paddingBottom: '5px'
    }
  },
  titleCard: {
    margin: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    '@media (min-width: 740px)': {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px 10px 10px 0'
    }
  }
};

class Deal extends React.Component {
  static propTypes = {
    deal: React.PropTypes.object,
    fetch: React.PropTypes.func
  };
  static queries = () => ({
    id: null,
    ...Title.queries(),
    ...Image.queries(),
    ...Discount.queries(),
    business: {
      ...DealContactInfo.queries()
    },
    tags: {
      'sort:createdAt=desc': {
        edges: {
          ...range(0, 20, {
            id: null,
            ...Tag.queries()
          })
        }
      }
    },
    certificates: {
      'sort:createdAt=desc': {
        edges: {
          ...range(0, 100, {
            id: null,
            ...Certificate.queries()
          })
        }
      }
    },
    ...DealComments.queries(),
    likes: {
      'sort:createdAt=desc': {
        ...Stats.queries()
      }
    }
  });
  render() {
    const deal = this.props.deal;
    return (
      <div style = {{
        paddingTop: '60px',
        display: 'flex', flexWrap: 'wrap',
        '@media (min-width: 950px)': { width: '950px', margin: '0 auto' },
        '@media (min-width: 1450px)': { width: '1450px', margin: '0 auto' }
      }}
      >
        <div style = {{ width: '100%', '@media (min-width: 740px)': { width: '40%' } }}>
          <div style={styles.card} key = {deal.id}>
            <Image {..._.pick(deal, Object.keys(Image.queries()))}>
              {
                deal.discount && (
                  <Discount {..._.pick(deal, Object.keys(Discount.queries()))} />
                )
              }
            </Image>
            <Title {..._.pick(deal, Object.keys(Title.queries()))} />
            <Stats {..._.pick(_.get(deal, ['likes', 'sort:createdAt=desc']), Object.keys(Stats.queries()))} />
            <div style = {{ display: 'flex', flexWrap: 'wrap' }}>
              {
                values(_.get(deal, ['tags', 'sort:createdAt=desc', 'edges'])).
                map(tag => (
                  <div key={`${deal.id}${tag.id}`}>
                    <Tag>{tag.text}</Tag>
                  </div>
                ))
              }
            </div>
          </div>
          <EarnBuy/>
          <div style = {{ display: 'none',
            '@media (min-width: 740px)': { display: 'block' } }}
          >
            <DealContactInfo {..._.pick(deal.business, Object.keys(DealContactInfo.queries()))} />
          </div>
        </div>

        <div style = {{ width: '100%', '@media (min-width: 740px)': { width: '60%' } }}>
          <div style = {{ display: 'none',
            '@media (min-width: 740px)': { display: 'block' } }}
          >
            <div style = {{
              color: '#a99999',
              padding: '5px',
              backgroundColor: '#fff',
              '@media (min-width: 740px)': { padding: '10px', margin: '10px 10px 10px 0' }
            }}
            >
              <div style = {styles.titleCertificate}>
                Сертификаты
              </div>
              <div>
                {
                  values(_.get(deal, ['certificates', 'sort:createdAt=desc', 'edges'])).
                  map(certificate => (
                    <div key={`${deal.id}${certificate.id}`}>
                    <Certificate {..._.pick(certificate, Object.keys(Certificate.queries()))} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <TabsOnSmallScreen deal={deal}/>
          <div style = {styles.titleCard}>
            <div style = {styles.title}>
              Похожие предложения
            </div>
          </div>

          <div style = {styles.titleCard}>
            <div style = {[styles.title, { width: '100%' }]}>
              Популярные запросы
            </div>
            <div style = {{ display: 'flex', flexWrap: 'wrap' }}>
              {
                values(_.get(deal, ['tags', 'sort:createdAt=desc', 'edges'])).
                map(tag => (
                  <div key={`${deal.id}${tag.id}`}>
                    <Tag>{tag.text}</Tag>
                  </div>
                ))
              }
            </div>
          </div>
          <div style = {{ display: 'none',
            '@media (min-width: 740px)': { display: 'block' } }}
          >
            <DealComments {..._.pick(deal, Object.keys(DealComments.queries()))} fetch={this.props.fetch} />
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(Deal);
