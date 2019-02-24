import React, { Component } from 'react';
import UpdateEpisode from '../UpdateEpisode/UpdateEpisode';

export default class ListOfEpisode extends Component {
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
      console.log(item);
      return <UpdateEpisode episode = {item} />
    }
  }

  render() {
    const { items, show, season } = this.props;
    const filteredItems = items.filter((item) => {
      return item.related_show.toString() === show.toString() && item.related_season.toString() === season.toString();
    });

    const list = filteredItems.map((item) => {
      return (
        <div key = {item.id} className = "collection-item">
          <li>
            {item.episode_name}
            <button id = {item.id} className = 'btn' onClick = {this.handleClick}>Update</button>
          </li>          
          {this.renderForm(item.id, item)}
        </div>);
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