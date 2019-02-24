import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UpdateSeason from '../UpdateSeason/UpdateSeason';

export default class ListOfSeason extends Component {
  constructor() {
    super();
    this.state = {
      form: false,
      id: ''
    }
  }

  handleClick = (e) => {
    this.setState({form: !this.state.form, id: e.target.id});
  }

  renderForm = (id, item) => {
    if(this.state.form && this.state.id.toString() === id.toString()) {
      return <UpdateSeason season = {item} />
    }
  }

  render() {
    const { items, rel } = this.props;
    const filteredItems = items.filter((item) => {
      return item.related_show.toString() === rel.toString();
    });
    
    const list = filteredItems.map((item) => {
      return (
        <div key = {item.id} className = "collection-item">
          <li key = {item.id} >
            <Link to = {`/admin/show/${this.props.show}/season/${item.id}`} >{item.season_name}</Link>
            <button id = {item.id} className = 'btn' onClick = {this.handleClick} >Update</button>
          </li>
          {this.renderForm(item.id, item)}
        </div>
      );
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