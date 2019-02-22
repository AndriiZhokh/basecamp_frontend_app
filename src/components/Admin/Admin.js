import React, { Component } from 'react';
import './Admin.sass';
import { Switch, Route } from 'react-router-dom';

import AddShow from '../AddShow/AddShow';
import Show from '../Show/Show';
import Season from '../Season/Season';

class Admin extends Component {

  render () {
    return (
      <div className = "container">
        <h1>Admin Panel</h1>        
        <div className = "row">
          <Switch>
            <Route exact path = '/admin' component = {AddShow} />
            <Route exact path = '/admin/show/:id' component = {Show} />
            <Route path = '/admin/show/:id/season/:number' component = {Season} />
          </Switch>
        </div>        
      </div>   
    );
  }
}

export default Admin;