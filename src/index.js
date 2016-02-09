import React from 'react';
import ReactDOM from 'react-dom';
import Auth0Lock from 'auth0-lock';
import App from './components/App';
import model from './model';
import intent from './intent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { login } from './intent';

const getLock = () => {
  const lock = new Auth0Lock('TWpDN8HdEaplEXJYemOcNYSXi64oQmf8', 'ideal.eu.auth0.com');
  const previousShow = lock.show;
  lock.show = (cb) => {
    previousShow.call(lock, {
      dict: 'ru',
      icon: 'http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png'
    }, (err, profile, token) => {
      if (err) {
        // TODO do something about it
        if (cb) {
          cb(err, null, null);
        }
        return;
      }
      login(profile, token);
      if (cb) {
        cb(err, profile, token);
      }
    });
  };
  return lock;
};

const main = () => {
  // material-ui dependency
  injectTapEventPlugin();
  // our model stream of data
  const model$ = model(intent());
  // auth0
  const lock = getLock();
  // rendering App in root div
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App model$={model$} lock={lock} />, rootElement);
};

main();
