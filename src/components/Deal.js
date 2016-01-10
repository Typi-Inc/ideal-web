import React from 'react';
import Radium from 'radium';
import Link from './Link';
import DealContactInfo from './DealContactInfo';
import EarnBuy from './EarnBuy';
import DealTag from './DealTag.js';
import Certificate from './Certificate';
import DealComment from './DealComment';
import TabsOnSmallScreen from './TabsOnSmallScreen';

class Deal extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          author: 'Almas',
          text: 'Hello my bitch'
        }
      ]
    };
  }
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }

  onCommentKeyPress(e) {
    if (e.keyCode === 13 && this.comment.value !== '') {
      this.postComment();
      this.comment.value = '';
    }
  }
  postComment() {
    const comment = this.comment.value;
    if (comment !== '') {
      this.setState({
        comments: this.state.comments.concat([{ author: 'Isken', text: comment }])
      });
      this.comment.value = '';
    }
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

    let deal;
    for (let i = 0; i < dealsListItem.length; i++) {
      if (dealsListItem[i].id === this.props.params.dealId) {
        deal = dealsListItem[i];
      }
    }


    const styles = {
      card: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        background: '#fff'
      },
      dealImage: {
        backgroundSize: '100% 100%',
        height: '200px',
        backgroundImage: deal.imageUrl,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        '@media (min-width: 420px)': {
          height: '250px'
        },
        '@media (min-width: 740px)': {
          height: '200px'
        },
        '@media (min-width: 900px)': {
          height: '250px'
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
      },
      title: {
        fontFamily: 'Proxima Nova, helvetica, arial, sans-serif',
        fontSize: '18px',
        color: '#666',
        borderBottom: '1.5px solid rgba(0,0,0,0.12)',
        marginBottom: '10px'
      },
      titleCardHugeScreen: {
        display: 'none',
        margin: '10px 0',
        padding: '10px',
        background: '#fff',
        '@media (min-width: 740px)': {
          display: 'flex',
          flexDirection: 'column',
          margin: '10px 10px 10px 0'
        }
      },
      titleCardSmallScreen: {
        margin: '10px',
        padding: '10px',
        background: '#fff',
        '@media (min-width: 740px)': { display: 'none' }
      }
    };
    return (
      <div style = {{
        display: 'flex', flexWrap: 'wrap',
        '@media (min-width: 950px)': { width: '950px', margin: '0 auto' },
        '@media (min-width: 1450px)': { width: '1450px', margin: '0 auto' }
      }}
      >
        <div style = {{ width: '100%', '@media (min-width: 740px)': { width: '40%' } }}>
          <div style={styles.card} key = {deal.id}>
            <Link className="mdl-navigation__link" to={'/deal/' + deal.id} >
              <div style={ styles.dealImage }>
                <div style={ styles.mainOptionsCard }>
                  <div style={{ paddingLeft: '5px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '600' }}>
                      {deal.dealSales}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: '600' }}>%</span>
                  </div>
                </div>
              </div>
            </Link>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            >
              <div style={{ padding: '10px' }}>
              <span>
                {deal.dealTitle}
              </span>
              <span style={{ paddingLeft: '10px' }}>
                {deal.dealType}
              </span>
              </div>
            </div>

            <div style={{ padding: '0 10px' }}>
              <i className="material-icons"
                style={{ color: 'green', fontSize: '14px', padding: '0 5px' }}
              >shopping_cart</i>
              {deal.purchasesAmount}
              <i className="material-icons" style={{ color: 'red', fontSize: '14px', padding: '0 5px' }}>favorite</i>
              {deal.likesAmount}
              <img src="/src/public/assets/hand132-5.png" style={{ height: '14px', padding: '0 5px' }}/>
              {deal.likesAmount}
            </div>
            <DealTag>{deal.tagThree}</DealTag>
            <EarnBuy/>
          </div>
          <DealContactInfo/>
        </div>

        <div style = {{ width: '100%', '@media (min-width: 740px)': { width: '60%' } }}>

          <Certificate/>
          <TabsOnSmallScreen/>

          <div style = {styles.titleCardSmallScreen}>
            <div style = {[styles.title]}>
              Other deals You might like
            </div>
          </div>

          <div style = {styles.titleCardSmallScreen}>
            <div style = {[styles.title, { width: '100%' }]}>
              Popular tags
            </div>
            <DealTag>{deal.tagThree}</DealTag>
          </div>

          <DealComment/>
          <div style = {styles.titleCardHugeScreen}>
            <div style = {[styles.title, { width: '100%' }]}>
              Other deals You might like
            </div>
          </div>

          <div style = {styles.titleCardHugeScreen}>
            <div style = {[styles.title, { width: '100%' }]}>
              Popular tags
            </div>
            <DealTag>{deal.tagOne}</DealTag>
          </div>
        </div>
      </div>
    );
  }
}

Deal.propTypes = {
  params: React.PropTypes.any
};

export default Radium(Deal);
