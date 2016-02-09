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
import DealWrapper from './DealWrapper';
import CreateDeal from './CreateDeal';
import MyProfile from './MyProfile';

class App extends React.Component {
  static propTypes = {
    model$: React.PropTypes.any.isRequired,
    lock: React.PropTypes.object.isRequired
  };
  static childContextTypes = {
    model$: React.PropTypes.any,
    lock: React.PropTypes.object
  };
  getChildContext() {
    return {
      model$: this.props.model$,
      lock: this.props.lock
    };
  }
  componentWillMount() {
    this.subscription = this.props.model$.getData(['loggedIn']).
      subscribe(loggedIn => {
        this.loggedIn = loggedIn;
      });
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  requireAuth(nextState, replace) {
    if (!this.loggedIn) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
      this.props.lock.show();
    }
  }
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={AppBodyWrapper}>
        <IndexRoute component={Home}/>
        <Route path="/deal/:dealId" component={DealWrapper}/>
        <Route path="/createDeal" component={CreateDeal} onEnter={this.requireAuth.bind(this)} />
        <Route path="/myProfile" component={MyProfile} onEnter={this.requireAuth.bind(this)} />
        <Route path="settings" component={Settings} onEnter={this.requireAuth.bind(this)} />
        <Route path="*" component={AppNotFound}/>
      </Route>
    </Router>;
  }
}

export default Radium(App);
