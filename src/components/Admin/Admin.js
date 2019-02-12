import React, { Component } from 'react';
import './Admin.sass';

import AddShowForm from '../AddShowForm/AddShowForm';

class Admin extends Component {
  render () {
    return (
      <div>
        <h1>Admin Panel</h1>
        <AddShowForm/>
      </div>
    );
  }
}

export default Admin;