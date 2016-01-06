import React from 'react';
import Radium from 'radium';
import Link from './Link';

const styles = {
  card: {
    margin: '10px',
    background: '#fff',
    padding: '10px'
  }
};

class Settings extends React.Component {

  render() {

    return (
      <div key = 'settings' style = {{
      '@media (min-width: 950px)': { width: '950px',margin:'0 auto'},
      '@media (min-width: 1450px)': { width: '1450px',margin:'0 auto'} }}>
        <div style = {styles.card}>
          <div style = {{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(0,0,0,.12)',
                  paddingBottom: '10px'
                       }}>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect" style = {{height: '50px'}}>
              <i className="material-icons" style = {{ color: '#a99999 ', fontSize: '50px' }}>account_box</i>
            </button>
            <span style = {{ fontWeight: '500', fontSize: '20px', textAlign: 'center', paddingRight: '30px' }}>Your Profile</span>
          </div>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" >
              <textarea className="mdl-textfield__input" type="text" rows= "2" id="email" ></textarea>
              <label className="mdl-textfield__label" htmlFor="email">Email</label>
            </div>
          </form>
        </div>
        <div style = {styles.card}>
          <div  style = {{
                  fontWeight: '500',
                  fontSize: '20px',
                  textAlign: 'center',
                  paddingBottom: '10px',
                  borderBottom: '1px solid rgba(0,0,0,.12)' }}>
            Your tags
          </div>
          <div style = {{ display : 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style = {{ width: '70%'}}>
              <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" type="text" id="tags"/>
                  <label className="mdl-textfield__label" htmlFor="tags">Add preferable deal types</label>
                </div>
              </form>
            </div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                    style= {{
                        width: '28px',
                        height: '28px',
                        background: '#0679A2',
                        minWidth: '28px',
                        padding: '0px',
                        margin: '0 5px'
                      }}>
              <i className="material-icons" style = {{color:'white', paddingBottom: '10px'}} >add</i>
            </button>
          </div>
        </div>
        <div style = {{
              display: 'flex',
              justifyContent: 'flex-end',
              background: '#dedede',
              paddingBottom: '10px',
              margin : '0 10px'
                     }}>
          <div style = {{width: '10%'}}>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style={{background: '#0679A2', width: '100%', color: 'white', borderRadius: '10px', boxShadow: '0'}}>
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Settings);

//<div style = {styles.card}>
//  <div  style = {{
//                  fontWeight: '500',
//                  fontSize: '20px',
//                  textAlign: 'center',
//                  paddingBottom: '10px',
//                  borderBottom: '1px solid rgba(0,0,0,.12)' }}>
//    Private Info
//  </div>
//  <div style = {{ display : 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//    <div style = {{ width: '40%'}}>
//      <form action="#">
//        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//          <input className="mdl-textfield__input" type="text" id="gender0"/>
//          <label className="mdl-textfield__label" htmlFor="gender">Gender</label>
//        </div>
//      </form>
//    </div>
//    <div style = {{ width: '40%'}}>
//      <form action="#">
//        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
//          <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="birthYear"/>
//          <label className="mdl-textfield__label" htmlFor="birthYear">Year of birth</label>
//          <span className="mdl-textfield__error">It's not a number!</span>
//        </div>
//      </form>
//    </div>
//  </div>
//</div>