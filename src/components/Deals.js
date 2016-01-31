import React from 'react';
import Radium from 'radium';
import Link from './Link';
import _ from 'lodash';
import { values } from '../utils/helpers';
import FontIcon from 'material-ui/lib/font-icon';
import FlatButton from 'material-ui/lib/flat-button';
import '../public/hover.css';
import ReactList from 'react-list';

const RadiumReactList = Radium(ReactList);

const styles = {
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '8px 10px 5px 10px',
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
    padding: '6px 13px',
    margin: '0 5px 5px 0',
    textTransform: 'none',
    height: '32px',
    background: '#fff',
    border: '2px solid #eee'
  }
};

class Deals extends React.Component {
  static propTypes = {
    deals: React.PropTypes.array
  };
  static queries = {
    deal() {
      return [['title', 'conditions', 'id', 'image', 'discount']];
    },
    business() {
      return ['business', ['name', 'image']];
    },
    tags() {
      return ['tags', 'sort:createdAt=desc', 'edges', {from: 0, to: 6}, ['id', 'text']];
    },
    likes() {
      return ['likes', 'sort:createdAt=desc', 'count'];
    },
    likedByUser() {
      return ['likedByUser', '{{me}}'];
    }
  };
  renderItem(index, key) {
    const deal = this.props.deals[index];
    console.log(JSON.stringify(deal, null, 4), 'deal is here');
    return (
      <div key={deal.id}
        style={{ width: '100%', '@media (min-width: 1020px)': { width: '480px', marginLeft: '10px' } }}
      >
        <div style={{ display: 'none',
          '@media (min-width: 580px)': {
            display: 'block',
            background: '#fff',
            margin: '10px 10px 0 10px',
            width: '100%' }
        }}
        >
          <div style={{
            padding: '10px',
            fontStyle: 'italic',
            fontSize: '13px'
          }}
          >
            <span style={{ color: '#a99999' }}>Published by </span>
            <span>{_.get(deal, ['business', 'name'])}</span>
          </div>
        </div>
        <div id="hoverCard" style={styles.card}>
          <div style={{ width: '100%', '@media (min-width: 580px)': { display: 'none' } }}>
            <div style={{
              padding: '10px',
              fontStyle: 'italic',
              fontSize: '13px'
            }}>
              <span style={{ color: '#a99999' }}>Published by </span>
              <span>{_.get(deal, ['business', 'name'])}</span>
            </div>
          </div>

          <div style={{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
            <Link to={'/deal/' + deal.id}>
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
                <span>
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
            {
              values(_.get(deal, ['tags', 'sort:createdAt=desc', 'edges'])).
                map(tag => (
                  <div key={`${deal.id}${tag.id}`}
                    style={{
                      width: '95%',
                      padding: '0 10px 10px 10px',
                      fontSize: '10px',
                      color: '#a99999'
                    }}
                  >
                    <FlatButton color="#777777" label={tag.text}
                      style={styles.tagBorder}
                    />
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1500px',
          margin: 'auto'
        }}
      >
        <div>
          <RadiumReactList
            ref={el => this.list = el}
            itemRenderer={this.renderItem.bind(this)}
            length={this.props.deals.length}
            type="variable"
          />
        </div>
      </div>
    );
  }
}

export default Radium(Deals);
