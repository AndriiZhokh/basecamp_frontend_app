import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Admin from '../Admin/Admin';
import User from '../User/User';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path = '/' component = {User}/>
            <Route path = '/admin' component = {Admin}/>            
            <Route component = {NotFound}/>
          </Switch>          
        </div>
      </Router>
      
    );
  }
}

export default App;
