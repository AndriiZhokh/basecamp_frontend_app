import React, { Component } from 'react';
import './AddEpisodeForm.sass';

import Input from '../FormComponents/Input';
import Textarea from '../FormComponents/Textarea';
import Select from '../FormComponents/Select';
import File from '../FormComponents/File';

class AddEpisodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodeName: '',
      episodeNumber: '',
      relatedShow: this.props.show,
      relatedSeason: this.props.season,
      long: '',
      short: '',
      url: '',
      rating: '1',
    };
    this.fileInput = React.createRef();
  }



  sendData = (url, data, file) => {
    console.log(file.current.files[0]);
    const formData = new FormData();

    for(const name in data) {
      formData.append(name, data[name])
    }

    formData.append('image', file.current.files[0], file.current.files[0].name);

    for(const name of formData) {
      console.log(name);
    }

    fetch(url, {
      method: 'POST',
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
    this.sendData('/episode', this.state, this.fileInput);
  }
  
  render() {
    return(
      <div className = "col s6">
        <h5>Add new episode</h5>
        <form className = "add-show-form" onSubmit = {this.handleSubmit}>
          <Input
            title = 'Enter Episode Name'
            name = 'episodeName'
            type = 'text'
            value = {this.state.episodeName}
            handleChange = {this.handleChange}
            required />

          <Input
            title = 'Enter Episode Number'
            name = 'episodeNumber'
            type = 'number'
            value = {this.state.episodeNumber}
            handleChange = {this.handleChange}
            required />

          <Textarea
            title = 'Long Description'
            name = 'long'
            value = {this.state.long}
            handleChange = {this.handleChange}
            required />

          <Textarea
            title = 'Short Description'
            name = 'short'
            value = {this.state.short}
            handleChange = {this.handleChange}
            required />

          <Input
            title = 'Video URL'
            name = 'url'
            type = 'url'
            value = {this.state.url}
            handleChange = {this.handleChange}
            required />

          <Select
            title = 'User rating'
            name = 'rating'
            className = 'browser-default'
            value = {this.state.rating}
            handleChange = {this.handleChange}
            options = {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
            required />

          <File
            title = 'Chose image'
            name = 'image'
            type = 'file'
            inputRef = {this.fileInput}
            required />

          <button className = "btn waves-effect waves-light" type = "submit">Send data</button>
        </form>
      </div>
      
    );
  }
}

export default AddEpisodeForm;