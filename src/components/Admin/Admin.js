import React, { Component } from 'react';
import './Admin.sass';
import { Switch, Route } from 'react-router-dom';

import AddShow from '../AddShow/AddShow';
import Show from '../Show/Show'

class Admin extends Component {

  render () {
    return (
      <Switch>
        <div className = "container">
          <h1>Admin Panel</h1>
          <div className = "row">
            <Route exact path = '/admin' component = {AddShow} />
            <Route path = '/admin/show/:id' component = {Show} />
          </div>
        </div>
      </Switch>      
    );
  }
}

export default Admin;