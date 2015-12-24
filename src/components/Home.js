import React from 'react';
import Radium from 'radium';
import Link from './Link';

class Home extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  render() {
    const dealsListItem = [
      {
        id: '1',
        imageUrl: 'url("http://europeanautomotiveservicetx.com/files/2011/09/EuropeanAutomotiveServiceWhitehouseTexas.jpg")',
        imageSrc: 'http://europeanautomotiveservicetx.com/files/2011/09/EuropeanAutomotiveServiceWhitehouseTexas.jpg',
        dealType: 'Car Service',
        dealDuration: '3 days',
        dealSales: '30',
        dealTitle: 'Auto Detail',
        previousPrice: '1000',
        price: '700',
        purchasesAmount: '129',
        likesAmount: '487',
        tagOne: 'Car',
        tagTwo: 'Diagnostic',
        tagThree: 'Oil recharge',
        tagFour: 'Toyota',
        linkTo: '/car_service_1'
      },
      {
        id: '2',
        imageUrl: 'url("http://www.thestudiodc.com/images/eoin_finn_bound_half_lotus_side_plank.jpg")',
        imageSrc: 'http://www.thestudiodc.com/images/eoin_finn_bound_half_lotus_side_plank.jpg',
        dealType: 'Yoga Masters',
        dealDuration: '1 week',
        dealSales: '30',
        dealTitle: 'Training with sensey of Yoga',
        previousPrice: '5000',
        price: '3500',
        purchasesAmount: '19',
        likesAmount: '55',
        tagOne: 'Yoga',
        tagTwo: 'Health',
        tagThree: 'Fitness',
        tagFour: 'Body',
        linkTo: '/yoga_masters_1'
      },
      {
        id: '3',
        imageUrl: 'url("http://biltmore.s3.amazonaws.com/27968/bistro_bistro_set_850x563__large.jpg")',
        imageSrc: 'http://biltmore.s3.amazonaws.com/27968/bistro_bistro_set_850x563__large.jpg',
        dealType: 'Bistro',
        dealDuration: '4 days',
        dealSales: '50',
        dealTitle: 'Sushi, Rolls and Pizza',
        previousPrice: '500',
        price: '250',
        purchasesAmount: '232',
        likesAmount: '189',
        tagOne: 'Cafe',
        tagTwo: 'Bistro',
        tagThree: 'Relax',
        tagFour: 'Chinese food',
        linkTo: '/bistro_1'
      },
      {
        id: '4',
        imageUrl: 'url("http://www.doctorhollywood.ru/files/fotos/1.jpg")',
        imageSrc: 'http://www.doctorhollywood.ru/files/fotos/1.jpg',
        dealType: 'Dentistry',
        dealDuration: 'Last day',
        dealSales: '10',
        dealTitle: 'White teeth with',
        previousPrice: '50000',
        price: '45000',
        purchasesAmount: '12',
        likesAmount: '3',
        tagOne: 'Teeth',
        tagTwo: 'Dentist',
        tagThree: 'Cheap',
        tagFour: 'Bestseller',
        linkTo: '/dentistry_1'
      }
    ];

    return (
      <div style = {{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {dealsListItem.map((dealItem, index) => {
          const styles = {
            card: {
              display: 'flex',
              flexWrap: 'wrap',
              margin: '5px 10px 5px 10px',
              width: '100%',
              background: '#fff'
            },
            dealImage: {
              backgroundSize: '100% 100%',
              height: '200px',
              backgroundImage: dealItem.imageUrl,
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
              alignItems: 'center'
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
              background: '#fff',
              border: '1.5px solid #eee'
            }
          };
          return (
            <div key = {index} style= {{width: '100%', '@media (min-width: 1020px)': { width: '480px', marginLeft: '10px' }}}>
              <div style={{ display: 'none' ,
                            '@media (min-width: 580px)': {
                                                           display: 'block',
                                                           background: '#fff',
                                                           margin: '10px 10px 0 10px',
                                                           width: '100%' }}}>
                <div style={{
                          padding: '10px',
                          fontStyle: 'italic',
                          fontSize: '13px'
                          }}>
                  <span style={{color: '#a99999'}}>Published by </span>
                  <span>{dealItem.dealType}</span>
                </div>
              </div>

              <div style={styles.card}>
                <div style={{ width: '100%', '@media (min-width: 580px)': { display: 'none' }}}>
                  <div style={{
                          padding: '10px',
                          fontStyle: 'italic',
                          fontSize: '13px'
                          }}>
                    <span style={{color: '#a99999'}}>Published by </span>
                    <span>{dealItem.dealType}</span>
                  </div>
                </div>

                <div style={{ width: '100%', '@media (min-width: 580px)': { width: '50%' } }}>
                  <Link className="mdl-navigation__link" to={'/deal/' + dealItem.id} >
                    <div style={ styles.dealImage }>
                      <div style={ styles.mainOptionsCard }>
                        <div style={{ paddingLeft: '5px' }}>
                      <span style={{ fontSize: '18px', fontWeight: '600' }}>
                        {dealItem.dealSales}
                      </span>
                          <span style={{ fontSize: '14px', fontWeight: '600' }}>%</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div style = {{ width: '100%', '@media (min-width: 580px)': { width:'50%' } }}>
                  <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                          }}>
                    <div style={{padding: '10px'}}>
                    <span>
                      {dealItem.dealTitle}
                    </span>
                    <span style={{paddingLeft: '10px'}}>
                      {dealItem.dealType}
                    </span>
                    </div>
                  </div>

                  <div style={{padding: '0 10px 10px 10px'}}>
                    <i className="material-icons"
                       style={{color:'green', fontSize: '14px', padding: '0 5px'}}>shopping_cart</i>
                    {dealItem.purchasesAmount}
                    <i className="material-icons" style={{color:'red', fontSize: '14px', padding: '0 5px'}}>favorite</i>
                    {dealItem.likesAmount}
                    <img src='/src/public/assets/hand132-5.png' style={{height: '14px', padding: '0 5px'}}/>
                    {dealItem.likesAmount}
                  </div>


                  <div style={{width: '95%', padding: '0 10px 10px 10px', fontSize: '10px', color: '#a99999'}}>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                            style={styles.tagBorder}>{dealItem.tagOne}
                    </button>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                            style={styles.tagBorder}>{dealItem.tagTwo}
                    </button>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                            style={styles.tagBorder}>{dealItem.tagThree}
                    </button>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                            style={styles.tagBorder}>{dealItem.tagFour}
                    </button>
                  </div>

                </div>

              </div>

            </div>


          );
        })}
      </div>
    )
  }
}

export default Radium(Home);

//<div style={{ display: 'flex', flexWrap: 'wrap' }}>
//  <div style={{ background: 'blue', height: '100px', width: '100%' }}></div>
//  <div style={{
//              background: 'yellow',
//              height: '100px',
//              width:'100%',
//              '@media (min-width: 580px)': { width: '50%', height: '200px'}}}></div>
//  <div style={{
//                background: 'green',
//                height: '100px',
//                width:'100%',
//                '@media (min-width: 580px)': { order: '2'}}}></div>
//  <div style={{ display: 'flex', flexWrap: 'wrap', width:'100%', '@media (min-width: 580px)': { width: '50%', order: '1'} }}>
//    <div style={{
//                background: 'orange',
//                height: '100px',
//                width:'100%'}}></div>
//    <div style={{
//                background: 'pink',
//                height: '100px',
//                width:'100%'}}></div>
//  </div>
//</div>



