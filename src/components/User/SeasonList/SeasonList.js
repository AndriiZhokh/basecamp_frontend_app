import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

export default class SeasonList extends Component {

  render() {    
    const { items, show, cl } = this.props;
    const filtered = items.filter((item) => {
      return item.related_show === show.id;
    });
    const list = filtered.map((item) => {
        return(
          <ListItem 
            key = {item.id}
            url = {`/show_details/${show.id}/season/${item.id}`}
            name = {item.season_name}/>
        );
    });

    return (
      <div>
        <h4>Saesons</h4>
        <div className = {cl}>        
          {list}
        </div>
      </div>
    );
  }
}