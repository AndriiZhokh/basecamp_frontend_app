import React, { Component } from 'react';
import PopularShows from './PopularShows/PopularShows';

export default class User extends Component {
  render() {
    return (
      <div>
        <h1>Best Serials</h1>
        <PopularShows />
      </div>
    );
  }
}