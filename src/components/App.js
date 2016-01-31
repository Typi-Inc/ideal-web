import React from 'react';
import Radium from 'radium';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router';
import { browserHistory } from 'react-router';
import AppBodyWrapper from './AppBodyWrapper';
import Home from './Home';
import Settings from './Settings';
import AppNotFound from './AppNotFound';
import Deal from './Deal';
import CreateDeal from './CreateDeal';
import MyProfile from './MyProfile';

class App extends React.Component {
  static propTypes = {
    model$: React.PropTypes.any
  };
  static childContextTypes = {
    model$: React.PropTypes.any
  };
  getChildContext() {
    return {
      model$: this.props.model$
    };
  }
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={AppBodyWrapper}>
        <IndexRoute component={Home}/>
        <Route path="/deal/:dealId" component={Deal}/>
        <Route path="/createDeal" component={CreateDeal}/>
        <Route path="/myProfile" component={MyProfile}/>
        <Route path="settings" component={Settings}/>
        <Route path="*" component={AppNotFound}/>
      </Route>
    </Router>;
  }
}

export default Radium(App);
