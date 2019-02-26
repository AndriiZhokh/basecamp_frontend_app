import React, { Component } from 'react';
import './AddShow.sass';

import AddShowForm from '../AddShowForm/AddShowForm';
import ListOfShow from '../ListOfShow/ListOfShow';

export default class AddShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/show')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({items: data})
      })
      .catch(err => console.log('err'));
  }

  onAdd = () => {
    console.log(this.state);
    fetch('/show')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({items: data})
      })
      .catch(err => console.log('err'));
  }

  onDelete = (id) => {
    console.log(id);
    console.log(this.state.items);
    const i = this.state.items.filter((item) => {
      return id.toString() !== item.id.toString();
    });
    console.log(i);
    this.setState({items: i});
  }

  render() {
    return (
      <div className = "add-show">
        <AddShowForm onAdd = {this.onAdd}/>
        <ListOfShow items = {this.state.items} del = {this.onDelete} />
      </div>
    );
  }
}