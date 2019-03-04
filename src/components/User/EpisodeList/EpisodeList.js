import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

export default class SeasonList extends Component {

  render() {    
    const { items, season, show, cl } = this.props;
    console.log(this.props);
    
    const filtered = items.filter((item) => {
      return item.related_show.toString() === show.toString() && item.related_season.toString() === season.toString();
    });
    const list = filtered.map((item) => {
        return(
          <ListItem 
            key = {item.id}
            url = {`/show_details/${show}/season/${season}/episode/${item.id}`}
            name = {item.episode_name} />
        );
    });

    return (
      <div>
        <h4>Episodes</h4>
        <div className = {cl}>        
          {list}
        </div>
      </div>
    );
  }
}