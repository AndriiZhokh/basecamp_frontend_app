import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddSeasonForm from '../AddSeasonForm/AddSeasonForm';

export default class Show extends Component {
  render() {
    return(
      <div>
        <h3>Show</h3>
        <Link className = 'btn' to = '/admin'>Back</Link>
        <AddSeasonForm />
      </div>
    );
  }
}