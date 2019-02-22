import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddEpisodeForm from '../AddEpisodeForm/AddEpisodeForm';
import ListOfEpisode from '../ListOfEpisode/ListOfEpisode';

export default class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.match.params.id,
      season: this.props.match.params.number,
      episodes: [],
    }
  }

  componentDidMount() {
    fetch('/episode')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({episodes: data})
    })
    .catch(err => console.log('err'));
  }

  render() {
    console.log(this.state.episodes);
    return(
      <div>
        <Link className = 'btn' to = {`/admin/show/${this.state.show}`}>Back</Link>
        <h3>Show #{this.state.show} Season #{this.state.season}</h3>
        <AddEpisodeForm show = {this.state.show} season = {this.state.season} />
        <ListOfEpisode items = {this.state.episodes} show = {this.state.show} season = {this.state.season} />
      </div>      
    );
  }
}