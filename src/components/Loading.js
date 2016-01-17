import React from 'react';
import 'spinkit/css/spinners/4-wandering-cubes.css';

class Loading extends React.Component {
  render() {
    return (
      <div className="sk-wandering-cubes">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
      </div>
    );
  }
}

export default Loading;