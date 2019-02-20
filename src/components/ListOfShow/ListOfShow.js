import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListOfShow extends Component {
  render() {
    const { items } = this.props;
    const list = items.map((item) => {
      return <li className = "collection-item"><Link key = {item.id} to = {`/admin/show/${item.id}`} >{item.title}</Link></li>
    });

    return(
      <div>
        <h5>List of Shows</h5>
        <ul className = "collection">
          {list}
        </ul>
      </div>      
    );
  }
}