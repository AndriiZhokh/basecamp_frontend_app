import React, { Component } from 'react';
import './AddSeasonForm.sass';

import Input from '../FormComponents/Input';
import Textarea from '../FormComponents/Textarea';
import Select from '../FormComponents/Select';
import File from '../FormComponents/File';

class AddSeasonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonName: '',
      seasonNumber: '',
      relatedShow: this.props.related,
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
    }).then((res)=>{this.props.onAdd()});
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendData('/season', this.state, this.fileInput);
  }
  
  render() {
    return(
      <div className = "col s6">
        <h5>Add new season</h5>
        <form className = "add-show-form" onSubmit = {this.handleSubmit}>
          <Input 
            title = 'Enter Season Name'
            name = 'seasonName'
            type = 'text'
            value = {this.state.seasonName}
            handleChange = {this.handleChange}
            required />

          <Input 
            title = 'Enter Season Number'
            name = 'seasonNumber'
            type = 'text'
            value = {this.state.seasonNumber}
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
            value = {this.setState.url}
            handleChange = {this.handleChange}
            required />

          <Select
            title = 'User rating'
            name = 'rating'
            className = 'browser-default'
            value = {this.state.rating}
            handleChange = {this.handleChange}
            options = {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',]}
            required />

          <File
            title = 'Chose Poster'
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

export default AddSeasonForm;