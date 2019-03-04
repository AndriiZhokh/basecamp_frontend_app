import React, { Component } from 'react';
import './AddShowForm.sass';

import Input from '../FormComponents/Input';
import Textarea from '../FormComponents/Textarea';
import Select from '../FormComponents/Select';
import File from '../FormComponents/File';

export default class AddShowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      date_of_start: '',
      long: '',
      short: '',
      url: '',
      priority: '1',
      rating: '1',
    };
    this.fileInput = React.createRef();
  }

  sendData = (url, data, file) => {
    const formData = new FormData();

    for(const name in data) {
      formData.append(name, data[name])
    }

    formData.append('image', file.current.files[0], file.current.files[0].name);

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
    this.sendData('/show', this.state, this.fileInput);
    this.setState({
      title: '',
      subtitle: '',
      date_of_start: '',
      long: '',
      short: '',
      url: '',
      priority: '1',
      rating: '1',
    });
  }
  
  render() {
    return(
      <div className = "col s6">
        <h5>Add new show</h5>
        <form className = "add-show-form" onSubmit = {this.handleSubmit}>
          <Input
            title = 'Enter Title'
            name = 'title'
            type = 'text'
            value = {this.state.title}
            handleChange = {this.handleChange}
            required />
          
          <Input
            title = 'Enter Subtitle'
            name = 'subtitle'
            type = 'text'
            value = {this.state.subtitle}
            handleChange = {this.handleChange}
            required />

          <Input
            title = 'Chose date of start'
            name = 'date_of_start'
            type = 'date'
            value = {this.state.date_of_start}
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
            title = 'Priority'
            name = 'priority'
            className = 'browser-default'
            value = {this.state.prioryty}
            handleChange = {this.state.prioryty}
            options = {['1', '0']} />

          <Select
            title = 'User rating'
            name = 'rating'
            className = 'browser-default'
            value = {this.state.rating}
            handleChange = {this.handleChange}
            options = {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} />

          <File
            title = 'Chose Poster'
            name = 'image'
            type = 'file'
            inputRef = {this.fileInput} />
          
          <button className = "btn waves-effect waves-light" type = "submit">Send data</button>
        </form>
      </div>
      
    );
  }
}
