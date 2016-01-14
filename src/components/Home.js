import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Link from './Link';
import Combinator from './Combinator';
import { getQuery } from '../intent/getQuery';
import '../public/hover.css';

class Home extends React.Component {
  componentDidMount() {
    getQuery([
      ['featuredDeals', { from: 0, to: 9 }, 'tags', 'sort:createdAt=desc', 'edges', { from: 0, to: 6 }, 'text'],
      ['featuredDeals', { from: 0, to: 9 }, ['title', 'conditions', 'id', 'image', 'discount']],
      ['featuredDeals', { from: 0, to: 9 }, 'business', ['name', 'image']],
      ['featuredDeals', { from: 0, to: 9 }, 'likes', 'sort:createdAt=desc', 'count']
    ], {
      featuredDeals: 'isLoading'
    });
    window.componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }
  render() {
    const styles = {
      card: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '8px 10px 5px 10px',
        width: '100%',
        backgroundColor: '#fff'

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
        backgroundColor: '#0679A2',
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
        color: '#777777',
        backgroundColor: '#fff',
        border: '1.5px solid #eee'
      }
    };
    return (
      <div style = {{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1500px',
        margin: 'auto'
      }}
      >
        <Combinator>
          {
            this.context.state$.map(state => {
              if (!state.featuredDeals) {
                return <div>No deals</div>;
              }
              if (state.featuredDeals === 'isLoading') {
                return <div>Loading</div>;
              }
              return (
                <div>
                  {
                    _.values(state.featuredDeals).map(deal => (
                      <div key={deal.id}
                        style={{
                          width: '100%',
                          '@media (min-width: 1020px)': {
                            width: '480px', marginLeft: '10px'
                          }
                        }}
                      >
                        <div style={{ display: 'none',
                        '@media (min-width: 580px)': {
                          display: 'block',
                          backgroundColor: '#fff',
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
                            <span>{deal.business.name}</span>
                          </div>
                        </div>

                        <div id="hoverCard" style={styles.card}>
                          <div style={{ width: '100%', '@media (min-width: 580px)': { display: 'none' } }}>
                            <div style={{
                              padding: '10px',
                              fontStyle: 'italic',
                              fontSize: '13px'
                            }}
                            >
                              <span style={{ color: '#a99999' }}>Published by </span>
                              <span>{deal.business.name}</span>
                            </div>
                          </div>

                          <div style={{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
                            <Link className="mdl-navigation__link" to={'/deal/' + deal.id} >
                              <div style={[styles.dealImage, { backgroundImage: `url(${deal.image})` }]}>
                                <div style={styles.mainOptionsCard}>
                                  <div style={{ paddingLeft: '5px' }}>
                                    <span style={{ fontSize: '18px' }}>
                                      -{deal.discount}
                                    </span>
                                    <span style={{ fontSize: '14px' }}>%</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>

                          <div style = {{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
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
                                <span style={{ paddingLeft: '10px' }}>
                                  {deal.business.name}
                                </span>
                              </div>
                            </div>

                            <div style={{ padding: '0 10px 10px 10px' }}>
                              <i className="material-icons"
                                style={{
                                  color: 'green',
                                  fontSize: '14px',
                                  padding: '0 5px'
                                }}
                              >shopping_cart</i>
                              {'?'}
                              <i className="material-icons" style={{
                                color: 'red',
                                fontSize: '14px',
                                padding: '0 5px'
                              }}
                              >favorite</i>
                              {deal.likes['sort:createdAt=desc'].count}
                              <img src="/src/public/assets/hand132-5.png" style={{ height: '14px', padding: '0 5px' }}/>
                              {'?'}
                            </div>
                            <div style={{ width: '95%', padding: '0 10px 10px 10px', fontSize: '10px', color: '#a99999' }}>
                              {
                                _.values(deal.tags['sort:createdAt=desc'].edges).map(tag => (
                                  <button key={tag.id} className="mdl-button mdl-js-button mdl-js-ripple-effect"
                                    style={styles.tagBorder}
                                  >{tag.text}</button>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              );
            })
          }
        </Combinator>
      </div>
    );
  }
}

Home.contextTypes = {
  state$: React.PropTypes.any
};


export default Home;
