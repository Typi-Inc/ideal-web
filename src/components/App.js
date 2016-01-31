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
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  getChildContext() {
    return {
      state$: this.props.state$
    };
  }
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={AppBodyWrapper}>
        <IndexRoute component={Home}/>
        <Route path="/deal" component={Deal}/>
        <Route path="/createDeal" component={CreateDeal}/>
        <Route path="/myProfile" component={MyProfile}/>
        <Route path="settings" component={Settings}/>
        <Route path="*" component={AppNotFound}/>
      </Route>
    </Router>;
  }
}
        //<Route path="/deal/:dealId" component={Deal}/>

App.propTypes = {
  state$: React.PropTypes.any
};

App.childContextTypes = {
  state$: React.PropTypes.any
};

export default Radium(App);
