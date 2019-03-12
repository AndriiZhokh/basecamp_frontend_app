import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Poster from '../Poster/Poster';
import EpisodeList from '../EpisodeList/EpisodeList';
import StarRatings from 'react-star-ratings';

export default class SeasonDetails extends Component {
  constructor() {
    super();
    this.state = {
      season: '',
      loading: false,
      error: null,
      episodes: [],
      rating: 0
    }
  }

  changeRating = (newRating, name) => {
    this.setState({rating: newRating});

    const formData = new FormData();
    formData.append('rating', newRating );

    fetch(`/season/rating/${this.state.season.id}`, {
      method: 'PUT',
      body: formData
    });
  }

  componentDidMount() {
    this.setState({loading: true});

    fetch(`/season/${this.props.match.params.id}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error('Somesing went wrong...');
        }
      })
      .then(data => {
        this.setState({season: data[0], loading: false, rating: data[0].users_rating});
        fetch('/episode')
          .then(res => res.json())
          .then(data => this.setState({episodes: data}))
      })
      .catch(err => this.setState({error: err, loading: false}));
  }

  render() {
    const { season, episodes, loading, error } = this.state;
    const { title, id } = this.props.match.params;

    if(error) {
      return <p>{error.message}</p>;
    }

    if(loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className = 'container show-details'>
        <div className = 'row details'>
          <Poster item = {season.featured_image}  className = 'col s12 m7' />
          <div className = 'col s12 m5'>       
            <h4>{season.season_name}</h4>
            <h5>{season.season_number}</h5>
            <p>{unescape(season.long_description)}</p>
            <p><span>Published: </span>{season.date_of_publish}</p>
            <p><span>Last modified date: </span>{season.last_modified_date}</p>
            <div>
              <h5>Users rating</h5>
              <StarRatings
                rating = {this.state.rating}
                starRatedColor = '#ee6e73'
                starEmptyColor = '#ffffff'
                numberOfStars = {10}
                starDimension = '20px'
                starSpacing = '3px'
                name = 'rating'
                changeRating = {this.changeRating} />
            </div>      
          </div>
        </div>
        <div className = 'row'>
          <ReactPlayer className = 'col s12 m6' url={season.video_fragment_url} controls />
          <EpisodeList items = {episodes}  show = {title} season = {id}  cl = 'col s12 m6 collection' />
        </div>
      </div>
    );
  }
}