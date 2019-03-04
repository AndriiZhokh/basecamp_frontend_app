import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddSeasonForm from '../AddSeasonForm/AddSeasonForm';
import ListOfSeason from '../ListOfSeason/ListOfSeason';

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedShow: this.props.match.params.id,
      seasons: [],
    }
  }

  componentDidMount() {
    fetch('/seasons')
    .then(response => response.json())
    .then(data => {
      this.setState({seasons: data})
    })
    .catch(err => console.log('err'));
  }

  onAdd = () => {
    console.log(this.state);
    fetch('/season')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({seasons: data})
      })
      .catch(err => console.log('err'));
  }

  onDelete = (id) => {
    const i = this.state.seasons.filter((item) => {
      return id.toString() !== item.id.toString();
    });
    this.setState({seasons: i});
  }

  render() {
    return(
      <div>
        <h3>Show # {this.state.relatedShow}</h3>
        <Link className = 'btn' to = '/admin'>Back</Link>
        <AddSeasonForm 
          related = {this.state.relatedShow} 
          onAdd = {this.onAdd} />
        <ListOfSeason 
          items = {this.state.seasons} 
          rel = {this.state.relatedShow} 
          show = {this.state.relatedShow}
          del = {this.onDelete} />
      </div>
    );
  }
}