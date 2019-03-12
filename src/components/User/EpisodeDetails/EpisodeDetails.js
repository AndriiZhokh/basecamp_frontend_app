import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import StarRatings from 'react-star-ratings';
import Poster from '../Poster/Poster';

export default class EpisodeDetails extends Component {
  constructor() {
    super();
    this.state = {
      episode: '',
      loading: 'false',
      error: null,
      rating: 0,
    }
  }

  changeRating = (newRating, name) => {
    this.setState({rating: newRating});

    const formData = new FormData();
    formData.append('rating', newRating );

    fetch(`/episode/rating/${this.state.episode.id}`, {
      method: 'PUT',
      body: formData
    });
  }

  componentDidMount() {
    this.setState({loading: true});

    fetch(`/episode/${this.props.match.params.eid}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error('Somesing went wrong...');
        }
      })
      .then(data => {
        this.setState({episode: data[0], loading: false, rating: data[0].users_rating});
      })
      .catch(err => this.setState({error: err, loading: false}));
  }

  render() {
    const { episode, error, loading } = this.state;

    if(error) {
      return <p>{error.message}</p>;
    }

    if(loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className = 'container show-details'>
        <div className = 'row details'>
          <Poster item = {episode.featured_image}  className = 'col s12 m7' />
          <div className = 'col s12 m5'>       
            <h4>{episode.episode_name}</h4>
            <h5>{episode.episode_number}</h5>
            <p>{unescape(episode.long_description)}</p>
            <p><span>Published: </span>{episode.date_of_publish}</p>
            <p><span>Last modified date: </span>{episode.last_modified_date}</p>
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
          <ReactPlayer className = 'col s12 m6' url={episode.video_fragment_url} controls />
        </div>
      </div>
    );
  }
}