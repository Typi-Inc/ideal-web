import React from 'react';
import Radium from 'radium';
import Link from './Link';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    margin: '10px',
    background: '#fff',
    padding: '10px'
  }
};

class CreateDeal extends React.Component {
  render() {
    return (
      <div key = "createDeal" style = {{ fontFamily: 'Roboto, Helvetica, sans-serif' }}>
        <div style={styles.card}>
          <div style = {{ display: 'flex', justifyContent: 'space-between' }}>
            <div style = {{ width: '30%'}}>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect" style = {{height: '50px'}}>
                <i className="material-icons" style = {{ color: '#a99999 ', fontSize: '50px' }}>add_a_photo</i>
              </button>
            </div>
            <div style = {{ display: 'flex', width: '70%', justifyContent: 'space-around'}}>
              <div style = {{ width: '60%' }}>
                <form action="#">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" >
                    <textarea className="mdl-textfield__input" type="text" rows= "2" id="dealTitle" ></textarea>
                    <label className="mdl-textfield__label" htmlFor="dealTitle">Title</label>
                  </div>
                </form>
              </div>
              <div style = {{ width: '30%' }}>
                <form action="#">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="discount"/>
                    <label className="mdl-textfield__label" htmlFor="discount" style = {{ fontSize: '18px' }}>%</label>
                    <span className="mdl-textfield__error">It's not a number!</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div style = {{ width: '100%'}}>
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style = {{ width: '100%'}}>
                <textarea className="mdl-textfield__input" type="text" rows= "3" id="dealDescribe" ></textarea>
                <label className="mdl-textfield__label" htmlFor="dealDescribe">Describe details of the deals</label>
              </div>
            </form>
          </div>
          <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style = {{ width: '90%'}}>
                <input className="mdl-textfield__input" type="text" id="dealTags"/>
                <label className="mdl-textfield__label" htmlFor="dealTags">Add tags</label>
              </div>
            </form>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style= {{
                        width: '28px',
                        height: '28px',
                        background: '#54C085',
                        minWidth: '28px',
                        padding: '0px',
                        margin: '0 5px'
                      }}>
              <i className="material-icons" style = {{color:'white', paddingBottom: '8px'}} >add</i>
            </button>
          </div>
        </div>
        <div style={styles.card}>
          <span style = {{
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(0,0,0,.12)',
                  fontSize: '16px',
                  fontWeight: '500',
                  paddingBottom: '10px'
                  }}>
            Deal List
          </span>
          <div style = {{ display : 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style = {{ width: '70%'}}>
              <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style = {{width: '100%'}}>
                  <input className="mdl-textfield__input" type="text" id="deals"/>
                  <label className="mdl-textfield__label" htmlFor="deals">Add </label>
                </div>
              </form>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style= {{
                        width: '28px',
                        height: '28px',
                        background: '#54C085',
                        minWidth: '28px',
                        padding: '0px',
                        margin: '0 5px'
                      }}>
              <i className="material-icons" style = {{color:'white', paddingBottom: '8px'}} >add</i>
            </button>
          </div>
        </div>
        <div style = {{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              background: '#f6f6f6',
              paddingBottom: '10px'
                     }}>
          <div style = {{width: '40%'}}>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style={{background: '#0679A2', width: '100%', color: 'white', borderRadius: '10px'}}>
              Publish
            </button>
          </div>
          <div style = {{width: '40%'}}>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    style={{background: '#54C085', width: '100%', color: 'white', borderRadius: '10px'}}>
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(CreateDeal);

//