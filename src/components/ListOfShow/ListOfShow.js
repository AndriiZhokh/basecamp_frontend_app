import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UpdateShow from '../UpdateShow/UpdateShow';

export default class ListOfShow extends Component {
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
      return <UpdateShow show = {item} />
    }
  }

  render() {
    const { items } = this.props;
    const list = items.map((item) => {
      return (
        <div key = {item.id} className = "collection-item">
          <li key = {item.id} >
            <Link to = {`/admin/show/${item.id}`} >{item.title}</Link>
            <button id = {item.id} className = 'btn' onClick = {this.handleClick} >Update</button>
          </li>
          {this.renderForm(item.id, item)}
        </div>
        );
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