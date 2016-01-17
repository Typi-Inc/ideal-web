import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import model from './model';
import intent from './intent';
import injectTapEventPlugin from 'react-tap-event-plugin';

const main = () => {
  injectTapEventPlugin();
  const state$ = model(intent());
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App state$={state$} />, rootElement);
};

main();