import React, { Component } from 'react';

import Input from '../FormComponents/Input';
import Textarea from '../FormComponents/Textarea';
import Select from '../FormComponents/Select';
import File from '../FormComponents/File';

class UpdateEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodeName: this.props.episode.episode_name,
      episodeNumber: this.props.episode.episode_number,
      relatedShow: this.props.episode.related_show,
      relatedSeason: this.props.episode.related_season,
      long: this.props.episode.long_description,
      short: this.props.episode.short_description,
      url: this.props.episode.video_fragment_url,
      rating: this.props.episode.users_rating,
    };
    this.fileInput = React.createRef();
  }



  sendData = (url, data, file) => {
    console.log(file.current.files[0]);
    const formData = new FormData();

    for(const name in data) {
      formData.append(name, data[name])
    }

    if(file.current.files[0]) {
      formData.append('image', file.current.files[0], file.current.files[0].name);
    }

    for(const name of formData) {
      console.log(name);
    }

    fetch(url, {
      method: 'PUT',
      body: formData
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendData(`/episode/${this.props.episode.id}`, this.state, this.fileInput);
  }
  
  render() {
    return(
      <div>
        <h5>Update episode</h5>
        <form className = "add-show-form" onSubmit = {this.handleSubmit}>
          <Input
            title = 'Enter Episode Name'
            name = 'episodeName'
            type = 'text'
            value = {this.state.episodeName}
            handleChange = {this.handleChange}/>

          <Input
            title = 'Enter Episode Number'
            name = 'episodeNumber'
            type = 'number'
            value = {this.state.episodeNumber}
            handleChange = {this.handleChange}/>

          <Textarea
            title = 'Long Description'
            name = 'long'
            value = {this.state.long}
            handleChange = {this.handleChange}/>

          <Textarea
            title = 'Short Description'
            name = 'short'
            value = {this.state.short}
            handleChange = {this.handleChange}/>

          <Input
            title = 'Video URL'
            name = 'url'
            type = 'url'
            value = {this.state.url}
            handleChange = {this.handleChange}/>

          <Select
            title = 'User rating'
            name = 'rating'
            className = 'browser-default'
            value = {this.state.rating}
            handleChange = {this.handleChange}
            options = {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}/>

          <File
            title = 'Chose image'
            name = 'image'
            type = 'file'
            inputRef = {this.fileInput}/>

          <button className = "btn waves-effect waves-light" type = "submit">Send data</button>
        </form>
      </div>
      
    );
  }
}

export default UpdateEpisode;