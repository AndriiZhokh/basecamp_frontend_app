import React, { Component } from 'react';
import PopularShows from './PopularShows/PopularShows';

export default class User extends Component {
  render() {
    return (
      <div className = 'container'>
        <PopularShows />
      </div>
    );
  }
}