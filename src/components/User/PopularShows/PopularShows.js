import React, { Component } from 'react';
import Repeater from '../Repeater/Repeater';

export default class PopularShows extends Component {
  constructor() {
    super();
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    fetch('/show')
      .then(res => res.json())
      .then(data => this.setState({shows: data}))
      .catch(err => console.log(err));
  }

  render() {
    const { shows } = this.state;
    return (
      <div>
        <h1>Most Popular</h1>
        <Repeater 
          cl = 'row' 
          items = {shows} />
      </div>
    );
  }
}