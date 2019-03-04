import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListItem extends Component {
  render() {
    return (
      <div className = 'collection-item'>
        <Link to = {this.props.url}>{this.props.name}</Link>
      </div>
    );
  }
}