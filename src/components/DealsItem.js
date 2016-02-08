import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Link from './Link';
import Business from './Business';
import Title from './Title';
import Stats from './Stats';
import Discount from './Discount';
import Image from './Image';
import { values, range } from '../utils/helpers';
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
    ...Title.queries(),
    ...Image.queries(),
    ...Discount.queries(),
    business: {
      ...Business.queries()
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
        ...Stats.queries()
      }
    }
  });

  render() {
    const deal = this.props.deal;
    return (
      <div key={deal.id}
        style={{ width: '100%',
          '@media (min-width: 1000px)': { width: '475px', paddingRight: '20px' },
          '@media (min-width: 1200px)': { width: '560px', paddingRight: '20px' },
          '@media (min-width: 1485px)': { width: '475px', paddingRight: '20px' }
           }}
      >
        <div style={{ display: 'none',
          '@media (min-width: 580px)': {
            display: 'block',
            background: '#fff',
            margin: '10px 0',
            width: '100%' }
        }}
        >
          <Business {..._.pick(deal.business, Object.keys(Business.queries()))}/>
        </div>
        <div id="hoverCard" style={styles.card}>
          <div style={{ width: '100%', '@media (min-width: 580px)': { display: 'none' } }}>
            <Business {..._.pick(deal.business, Object.keys(Business.queries()))}/>
          </div>
          <div style={{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
            <Link to={'/deal/' + deal.id} style = {{ textDecoration: 'none' }}>
              <Image {..._.pick(deal, Object.keys(Image.queries()))}>
                {
                  deal.discount && (
                    <Discount {..._.pick(deal, Object.keys(Discount.queries()))} />
                  )
                }
              </Image>
            </Link>
          </div>

          <div style={{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
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
        </div>
      </div>
    );
  }
}

export default Radium(DealsItem);
