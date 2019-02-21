import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListOfShow extends Component {
  render() {
    const { items, rel } = this.props;
    const filteredItems = items.filter((item) => {
      return item.related_show == rel;
    });
    const list = filteredItems.map((item) => {
      return <li key = {item.id} className = "collection-item"><Link to = {`/admin/season/${item.id}`} >{item.season_name}</Link></li>
    });

    return(
      <div>
        <h5>List of Seasons</h5>
        <ul className = "collection">
          {list}
        </ul>
      </div>      
    );
  }
}