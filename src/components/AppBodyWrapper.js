import React from 'react';
import Radium, { StyleRoot } from 'radium';
import AppBody from './AppBody';

class AppBodyWrapper extends React.Component {
  render() {
    return (
      <StyleRoot>
        <AppBody {...this.props} />
      </StyleRoot>
    );
  }
}

export default AppBodyWrapper;
