import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Admin from '../AdminPanel/Admin/Admin';
import User from '../User/User';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import ShowDetails from '../User/ShowDetails/ShowDetails';
import SeasonDetails from '../User/SeasonDetails/SeasonDetails';
import EpisodeDetails from '../User/EpisodeDetails/EpisodeDetails';
import AllShows from '../User/AllShows/AllShows';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path = '/' component = {User}/>
            <Route path = '/admin' component = {Admin}/>
            <Route exact path = '/show_details/:id' component = {ShowDetails} />
            <Route exact path = '/show_details/:title/season/:id' component = {SeasonDetails} />
            <Route path = '/show_details/:title/season/:id/episode/:eid' component = {EpisodeDetails} />
            <Route path = '/allshows' component = {AllShows} />
            <Route component = {NotFound}/>
          </Switch>          
        </div>
      </Router>
      
    );
  }
}

export default App;
