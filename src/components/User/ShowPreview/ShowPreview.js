import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ShowPreview extends Component {
  render() {
    const { show } = this.props;
    return (
      <div key = {show.id}>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={`http://localhost:3002/images/${show.poster_image}`} alt = 'poster'/>
              <span className="card-title">{show.subtitle}</span>
            </div>
            <div className="card-content">
              <Link to = {`/show_details/${show.id}`}>{show.title}</Link>
              <p>{unescape(show.short_description)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}