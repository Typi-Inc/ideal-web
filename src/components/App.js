import React from 'react';

class App extends React.Component {
  componentDidMount() {
    window.componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    window.componentHandler.upgradeDom();
  }
  render() {
    return <div>Hello World</div>;
  }
}

export default App;
