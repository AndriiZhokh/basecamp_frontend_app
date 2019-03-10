import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Poster from '../Poster/Poster';
import StarRatings from 'react-star-ratings';
import SeasonList from '../SeasonList/SeasonList';
import './ShowDetails.sass';

export default class ShowDetails extends Component {
  constructor() {
    super();
    this.state = {
      show: '',
      seasons: [],
      loading: false,
      error: null,
      rating: 0,
    }
  }

  changeRating = (newRating, name) => {
    this.setState({rating: newRating});

    const formData = new FormData();
    formData.append('rating', newRating );

    fetch(`/rating/${this.state.show.id}`, {
      method: 'PUT',
      body: formData
    });
  }

  componentDidMount() {
    this.setState({loading: true});

    fetch(`/show/${this.props.match.params.id}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error('Somesing went wrong...');
        }
      })
      .then(data => {
        this.setState({show: data[0], loading: false, rating: data[0].users_rating});
        console.log(data[0].users_rating)
        fetch('/seasons')
          .then(res => res.json())
          .then(data => this.setState({seasons: data}))
      })
      .catch(err => this.setState({error: err, loading: false}));

    
  }

  renderImage = (image) => {
    if(image) {
      return <img src = {`http://localhost:3002/images/${image}`} alt = 'poster'/>
    } else {
      return <p>Loading...</p>
    }
  }

  render() {
    const { show, seasons, loading, error } = this.state;
    console.log(seasons);

    if(error) {
      return <p>{error.message}</p>;
    }

    if(loading) {
      return <p>Loading...</p>;
    }

    return(
      <div className = 'container show-details'>
        <div className = 'row details'>
          <Poster item = {show.poster_image}  className = 'col s12 m7' />
          <div className = 'col s12 m5'>       
            <h4>{show.title}</h4>
            <h5>{show.subtitle}</h5>
            <p>{unescape(show.long_description)}</p>
            <p><span>Started: </span>{show.date_of_start}</p>
            <p><span>Published: </span>{show.date_of_publish}</p>
            <p><span>Last modified date: </span>{show.last_modified_date}</p>
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
          <ReactPlayer className = 'col s12 m6' url={show.video_fragment_url} controls />
          <SeasonList items = {seasons} show = {show} cl = 'col s12 m6 collection' />
        </div>
      </div>
    );
  }
}