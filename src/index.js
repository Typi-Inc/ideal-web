import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import model from './model';
import intent from './intent';
import injectTapEventPlugin from 'react-tap-event-plugin';

const main = () => {
  injectTapEventPlugin();
  const model$ = model(intent());
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App model$={model$}/>, rootElement);
};

main();
