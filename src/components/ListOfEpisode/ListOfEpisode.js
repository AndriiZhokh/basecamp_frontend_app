import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListOfEpisode extends Component {
  render() {
    const { items, show, season } = this.props;
    const filteredItems = items.filter((item) => {
      return item.related_show.toString() === show.toString() && item.related_season.toString() === season.toString();
    });
    const list = filteredItems.map((item) => {
      return <li key = {item.id} className = "collection-item">{item.episode_name}</li>
    });

    return(
      <div>
        <h5>List of Episodes</h5>
        <ul className = "collection">
          {list}
        </ul>
      </div>      
    );
  }
}