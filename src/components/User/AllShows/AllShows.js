import React, { Component } from 'react';
import Repeater from '../Repeater/Repeater';

export default class AllShows extends Component {
  constructor() {
    super();
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    fetch('/shows')
      .then(res => res.json())
      .then(data => this.setState({shows: data}))
      .catch(err => console.log(err));
  }

  render() {
    const { shows } = this.state;
    return (
      <div>
        <h1>All Shows</h1>
        <Repeater 
          cl = 'row' 
          items = {shows} />
      </div>
    );
  }
}