import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const main = () => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);
};

main();
