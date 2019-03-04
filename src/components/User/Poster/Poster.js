import React, { Component } from 'react';
import './Poster.sass';

export default class Poster extends Component {
  render() {
    const { item } = this.props;

    if(item) {
      return (
        <div className = {`${this.props.className} poster `}>          
          <img src = {`http://localhost:3002/images/${item}`} alt = 'poster'/>
        </div>
      );
    } else {
      return (
        <div>          
          <p>Loading...</p>
        </div>
      );
    }
  }
}