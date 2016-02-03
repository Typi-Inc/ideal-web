import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Link from './Link';
import DealsItemBusiness from './DealsItemBusiness';
import { values, range } from '../utils/helpers';
import FontIcon from 'material-ui/lib/font-icon';
import '../public/hover.css';
import Tag from './Tag';

const styles = {
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px',
    width: '100%',
    background: '#fff'
  },
  dealImage: {
    backgroundSize: '100% 100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '@media (min-width: 850px)': {
      height: '250px'
    },
    '@media (min-width: 1020px)': {
      height: '180px'
    }
  },
  mainOptionsCard: {
    display: 'flex',
    width: '50px',
    justifyContent: 'center',
    background: '#0679A2',
    height: '50px',
    color: '#fff',
    alignItems: 'center',
    fontWeight: '500'
  },
  tagBorder: {
    fontSize: '12px',
    borderRadius: '5px',
    lineHeight: '18px',
    minWidth: '40px',
    textTransform: 'none',
    height: '32px',
    background: '#fff',
    border: '2px solid #eee'
  }
};


class DealsItem extends React.Component {
  static propTypes = {
    deal: React.PropTypes.object
  };
  static queries = () => ({
    id: null,
    title: null,
    image: null,
    discount: null,
    likedByMe: null,
    business: {
      ...DealsItemBusiness.queries()
    },
    tags: {
      'sort:createdAt=desc': {
        edges: {
          ...range(0, 6, {
            id: null,
            ...Tag.queries()
          })
        }
      }
    },
    likes: {
      'sort:createdAt=desc': {
        count: null
      }
    }
  });

  render() {
    const deal = this.props.deal;
    return (
      <div key={deal.id}
        style={{ width: '100%', '@media (min-width: 1000px)': { width: '475px', paddingRight: '20px' } }}
      >
        <div style={{ display: 'none',
          '@media (min-width: 580px)': {
            display: 'block',
            background: '#fff',
            margin: '10px 0',
            width: '100%' }
        }}
        >
          <DealsItemBusiness {..._.pick(deal.business, Object.keys(DealsItemBusiness.queries()))} />
        </div>
        <div id="hoverCard" style={styles.card}>
          <div style={{ width: '100%', '@media (min-width: 580px)': { display: 'none' } }}>
            <DealsItemBusiness {..._.pick(deal.business, Object.keys(DealsItemBusiness.queries()))} />
          </div>
          <div style={{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
            <Link to={'/deal/' + deal.id} style = {{ textDecoration: 'none' }}>
              <div style={[styles.dealImage, {
                backgroundImage: `url("${deal.image}")`
              }]}
              >
                {
                  deal.discount && (
                    <div style={ styles.mainOptionsCard }>
                      <div style={{ paddingLeft: '5px' }}>
                        <span style={{ fontSize: '18px' }}>
                          -{deal.discount}
                        </span>
                        <span style={{ fontSize: '14px' }}>%</span>
                      </div>
                    </div>
                  )
                }
              </div>
            </Link>
          </div>

          <div style={{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}
            >
              <div style={{ padding: '10px' }}>
                <span style = {{ fontSize: '16px' }}>
                  {deal.title}
                </span>
              </div>
            </div>

            <div style={{ padding: '0 10px 10px 10px' }}>
              <FontIcon className="material-icons" color="green"
                style={{ fontSize: '14px', padding: '0 5px' }}
              >shopping_cart</FontIcon>
              {'?'}
              <FontIcon className="material-icons" color="red"
                style={{ fontSize: '14px', padding: '0 5px' }}
              >favorite</FontIcon>
              {_.get(deal, ['likes', 'sort:createdAt=desc', 'count'], 0)}
              <img src="/src/public/assets/hand132-5.png"
                style={{ height: '14px', padding: '0 5px' }}/>
              {'?'}
            </div>
            <div style = {{ display: 'flex', flexWrap: 'wrap' }}>
              {
                values(_.get(deal, ['tags', 'sort:createdAt=desc', 'edges'])).
                map(tag => (
                  <Tag>{tag.text}</Tag>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(DealsItem);
