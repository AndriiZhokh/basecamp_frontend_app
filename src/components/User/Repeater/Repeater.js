import React, { Component } from 'react';
import ShowPreview from '../ShowPreview/ShowPreview';

export default class Repeater extends Component {

  filtered = (items) => {    
    const filtered = items.filter(item => {
      return item.priority === 1;
    });
    return filtered;
  }

  render() {    
    const { cl, filter } = this.props;
    let { items } = this.props;
    if(filter) {      
      items = this.filtered(items);
    }
    const list = items.map((item) => {
      return(
        <ShowPreview key = {item.id} show = {item}/>
      );
    });

    return (
      <div className = {cl}>        
        {list}
      </div>
    );
  }
}