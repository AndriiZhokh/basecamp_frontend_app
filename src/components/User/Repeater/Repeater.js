import React, { Component } from 'react';
import ShowPreview from '../ShowPreview/ShowPreview';
export default class Repeater extends Component {

  render() {    
    const { items, cl } = this.props;
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