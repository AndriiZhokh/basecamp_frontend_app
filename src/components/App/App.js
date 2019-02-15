import React, { Component } from 'react';
import './App.css';

import Admin from '../Admin/Admin';

class App extends Component {
  state = { users: [] }

/*   componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  } */
  render() {
    return (
      <div className="App">
        <h1>Serials</h1>
        <ul>
          {this.state.users.map(user => 
            <li key = {user.id}>{user.title} | {user.date_of} | {user.priority}</li>)}
        </ul>
        <Admin/>
      </div>
    );
  }
}

export default App;
