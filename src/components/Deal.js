import React from 'react';
import Radium from 'radium';
import Link from './Link';

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

            <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagOne}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagTwo}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagThree}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagFour}
                </button>
              </div>
            </div>

            <div style = {{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '10px',
              padding: '0 10px'
            }}
            >
              <div style={{ width: '40%' }}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style = {{
                    background: '#0679A2',
                    color: 'white',
                    width: '100%'
                  }}
                >
                  Earn
                </button>
              </div>
              <div style={{ width: '40%' }}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style = {{
                    background: '#54C085',
                    color: 'white',
                    width: '100%'
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div style = {{
            display: 'none',
            '@media (min-width: 740px)': {
              display: 'flex',
              flexDirection: 'column',
              color: '#a99999',
              padding: '10px',
              margin: '10px',
              background: '#fff'
            }
          }}
          >
            <div style = {styles.title }>
              Contact Info
            </div>
            Address: c. Almaty, mkr. Mamyr 4, 197A
            <div>Tel:
              +7 (727) 255-58-57
              +7 (778) 668-88-58
            </div>
          </div>

        </div>

        <div style = {{ width: '100%', '@media (min-width: 740px)': { width: '60%' } }}>

          <div style = {{
            display: 'none',
            '@media (min-width: 740px)': {
              display: 'flex',
              flexDirection: 'column',
              color: '#a99999',
              padding: '10px',
              margin: '10px 10px 10px 0',
              background: '#fff'
            }
          }}
          >
            <div style = {styles.title}>
              Deals info
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', alignItems: 'center' }}>
              <div style={{ width: '70%', padding: '10px' }}>
                  Five Fitness and Conditioning Classes at #TeamTibbs Fitness (70% Off)
              </div>
              <div>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style= {{
                    width: '28px',
                    height: '28px',
                    background: '#a99999',
                    minWidth: '28px',
                    padding: '0px'
                  }}
                >
                  <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }}>remove</i>
                </button>
                <span style={{ padding: '0 5px', fontSize: '16px' }}>15</span>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style= {{
                    width: '28px',
                    height: '28px',
                    background: '#54C085',
                    minWidth: '28px',
                    padding: '0px'
                  }}
                >
                  <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }} >add</i>
                </button>
              </div>
            </div>
          </div>

          <div style = {{
            background: 'white',
            margin: '10px',
            '@media (min-width: 740px)': { display: 'none' }
          }}
          >
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect" >
              <div className="mdl-tabs__tab-bar"
                style={{
                  display: 'flex',
                  justifyContent: 'space-around'
                }}
              >
                <a href="#deals" className="mdl-tabs__tab" style = {{ width: '33%' }}>
                  <i className="material-icons" style = {{ paddingTop: '10px' }}>description</i>
                </a>
                <a href="#address" className="mdl-tabs__tab" style = {{ width: '33%' }}>
                  <i className="material-icons" style = {{ paddingTop: '10px' }}>contact_phone</i>
                </a>
                <a href="#sms" className="mdl-tabs__tab" style = {{ width: '33%' }}>
                  <i className="material-icons" style = {{ paddingTop: '10px' }}>chat</i>
                </a>
              </div>
              <div className="mdl-tabs__panel is-active" id="deals" >
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', alignItems: 'center' }}>
                  <div style={{ width: '70%' }}>
                    <div style={{ padding: '10px' }}>
                      Five Fitness and Conditioning Classes at #TeamTibbs Fitness (70% Off)
                    </div>
                  </div>
                  <div>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                      style= {{
                        width: '28px',
                        height: '28px',
                        background: '#a99999',
                        minWidth: '28px',
                        padding: '0px'
                      }}
                    >
                      <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }}>remove</i>
                    </button>
                    <span style = {{ padding: '0 5px', fontSize: '16px' }}>15</span>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                      style= {{
                        width: '28px',
                        height: '28px',
                        background: '#54C085',
                        minWidth: '28px',
                        padding: '0px'
                      }}
                    >
                      <i className="material-icons" style = {{ color: 'white', paddingBottom: '8px' }} >add</i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mdl-tabs__panel" id="address" style = {{ color: '#a99999', padding: '10px' }}>
                Address: c. Almaty, mkr. Mamyr 4, 197A
                <div>Tel:
                  +7 (727) 255-58-57
                  +7 (778) 668-88-58
                </div>
              </div>

              <div className="mdl-tabs__panel" id="sms">
                <div>
                  <form action="#" style = {{ padding: '0 10px' }}>
                    <div className="mdl-textfield mdl-js-textfield" style = {{ width: '100%' }}>
                      <textarea ref={el => this.comment = el}
                        className="mdl-textfield__input"
                        type="text"
                        rows= "3"
                        onKeyDown={this.onCommentKeyPress.bind(this)}
                        id="smsAd"
                      ></textarea>
                      <label className="mdl-textfield__label" htmlFor="smsAd">What do you think of this ad?...</label>
                    </div>
                  </form>
                  <div style = {{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 10px' }}>
                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                      onClick={this.postComment.bind(this)}
                      style= {{
                        width: '28px',
                        height: '28px',
                        minWidth: '28px',
                        paddingRight: '30px'
                      }}
                    >
                      <i className="material-icons" style = {{ color: '#a99999', paddingBottom: '10px' }}>chat_bubble_outline</i>
                    </button>
                    Say it!
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div style = {{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            background: 'white',
            margin: '10px 10px 0 10px',
            '@media (min-width: 740px)': { margin: '10px 10px 0 0' }
          }}
          >
            <div style = {styles.title}>
              <i className="material-icons" style = {{ fontSize: '18px' }}>chat_bubble_outline</i>
              <span style = {{ paddingLeft: '5px' }}>Comments</span>
            </div>

            <div style = {{ display: 'flex' }}>
              <div>
                <img src="https://newyorksightseeingtours.files.wordpress.com/2011/11/kenneth-cole.jpg"
                  style={{ height: '50px' }}
                />
              </div>
              <div style = {{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                <div style = {{ fontWeight: '600' }}>
                  Kenneth Lee
                </div>
                <div style = {{ fontSize: '16px' }}>
                  Great deal!
                </div>
                <div style = {{ color: '#a99999' }}>
                  24 august 2015
                </div>
              </div>
            </div>
            <div style = {{
              display: 'flex',
              paddingTop: '10px',
              borderTop: '1px solid rgba(0,0,0,0.12)'
            }}
            >
              <div>
                <img src="http://www.spacefacts.de/bios/portraits_hi/cosmonauts/kotov_oleg.jpg"
                  style={{ height: '50px' }}
                />
              </div>
              <div style = {{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                <div style = {{ fontWeight: '600' }}>
                  Oleg  Potapovich
                </div>
                <div style = {{ fontSize: '16px' }}>
                  Hu9ase!
                </div>
                <div style = {{ color: '#a99999' }}>
                  Today
                </div>
              </div>
            </div>
            {this.state.comments.map(comment => (
              <div style={{
                display: 'flex',
                paddingTop: '10px',
                borderTop: '1px solid rgba(0,0,0,0.12)'
              }}
              >
                <div>
                  <img src="http://www.spacefacts.de/bios/portraits_hi/cosmonauts/kotov_oleg.jpg"
                    style={{ height: '50px' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                  <div style={{ fontWeight: '600' }}>
                    {comment.author}
                  </div>
                  <div style={{ fontSize: '16px' }}>
                    {comment.text}
                  </div>
                  <div style={{ color: '#a99999' }}>
                    Today
                  </div>
                </div>
              </div>

            ))}
          </div>

          <div style = {{
            margin: '10px',
            padding: '10px',
            background: '#fff',
            '@media (min-width: 740px)': { display: 'none' }
          }}
          >
            <div style = {[styles.title]}>
              Other deals You might like
            </div>
          </div>
          <div style = {{
            margin: '10px',
            padding: '10px',
            background: '#fff',
            '@media (min-width: 740px)': { display: 'none' }
          }}
          >
            <div style = {[styles.title, { width: '100%' }]}>
              Popular tags
            </div>
            <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagOne}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagTwo}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagThree}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                  style={styles.tagBorder}
                >
                  {deal.tagFour}
                </button>
              </div>
            </div>
          </div>

          <div style = {{
            display: 'none',
            '@media (min-width: 740px)': {
              display: 'flex',
              flexDirection: 'column',
              color: '#a99999',
              margin: '10px 10px 10px 0',
              padding: '10px',
              background: '#fff'
            }
          }}
          >
            <form action="#" style = {{ padding: '0 10px' }}>
              <div className="mdl-textfield mdl-js-textfield" style = {{ width: '100%' }}>
                <textarea ref={el => this.comment = el}
                  className="mdl-textfield__input"
                  type="text"
                  rows= "3"
                  id="smsAd"
                  onKeyDown={this.onCommentKeyPress.bind(this)}
                >
                </textarea>
                <label className="mdl-textfield__label" htmlFor="smsAd">What do you think of this ad?...</label>
              </div>
            </form>
            <div style = {{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '0 10px'
            }}
            >
              <button onClick={this.postComment.bind(this)}className="mdl-button mdl-js-button mdl-js-ripple-effect"
                style= {{
                  width: '28px',
                  height: '28px',
                  minWidth: '28px',
                  paddingRight: '30px'
                }}
              >
                <i className="material-icons" style = {{ color: '#a99999', paddingBottom: '10px' }}>chat_bubble_outline</i>
              </button>
              Say it!
            </div>
          </div>

          <div style = {{
            display: 'none',
            margin: '10px 0',
            padding: '10px',
            background: '#fff',
            '@media (min-width: 740px)': {
              display: 'flex',
              margin: '10px 10px 10px 0'
            }
          }}
          >
            <div style = {[styles.title, { width: '100%' }]}>
              Other deals You might like
            </div>
          </div>
          <div style = {{
            display: 'none',
            margin: '10px 0',
            padding: '10px',
            background: '#fff',
            '@media (min-width: 740px)': {
              display: 'flex',
              margin: '10px 10px 10px 0',
              flexDirection: 'column'
            }
          }}
          >
            <div style = {[styles.title, { width: '100%' }]}>
              Popular tags
            </div>
            <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '100%', fontSize: '10px', color: '#a99999' }}>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect" style={styles.tagBorder}>
                  {deal.tagOne}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect" style={styles.tagBorder}>
                  {deal.tagTwo}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect" style={styles.tagBorder}>
                  {deal.tagThree}
                </button>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect" style={styles.tagBorder}>
                  {deal.tagFour}
                </button>
              </div>
            </div>
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
