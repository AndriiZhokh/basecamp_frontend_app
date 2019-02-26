import React, { Component } from 'react';

export default class ShowDetails extends Component {
  render() {
    console.log(this.props.match.params.id);
    return(
      <div>
        Show Details {this.props.match.params.id}
      </div>
    );
  }
}