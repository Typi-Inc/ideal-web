import React from 'react';
import Radium from 'radium';
import {
  Router,
  Route,
  IndexRoute
  } from 'react-router';
import { createHistory } from 'history';
import AppBodyWrapper from './AppBodyWrapper';
import Home from './Home';
import Other from './Other';
import Settings from './Settings';
import AppNotFound from './AppNotFound';
import Deal from './Deal';
import CreateDeal from './CreateDeal';
import MyProfile from './MyProfile';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return <Router history={createHistory()}>
      <Route path="/" component={AppBodyWrapper}>
        <IndexRoute component={Home}/>
        <Route path="/deal/:dealId" component={Deal}/>
        <Route path="/createDeal" component={CreateDeal}/>
        <Route path="/myProfile" component={MyProfile}/>
        <Route path="other" component={Other}/>
        <Route path="settings" component={Settings}/>
        <Route path="*" component={AppNotFound}/>
      </Route>
    </Router>;
  }
}
export default Radium(App);
