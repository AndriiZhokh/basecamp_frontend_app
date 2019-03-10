import React, { Component } from 'react';

import Input from '../FormComponents/Input';
import Textarea from '../FormComponents/Textarea';
import Select from '../FormComponents/Select';
import File from '../FormComponents/File';

class UpdateShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.show.title,
      subtitle: this.props.show.subtitle,
      dateOfStart: this.props.show.date_of_start,
      long: unescape(this.props.show.long_description),
      short: unescape(this.props.show.short_description),
      priority: this.props.show.priority,
      url: this.props.show.video_fragment_url,
      rating: this.props.show.users_rating,
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
    this.sendData(`/show/${this.props.show.id}`, this.state, this.fileInput);
  }
  
  render() {
    return(
      <div>
        <h5>Update Show</h5>
        <form className = "add-show-form" onSubmit = {this.handleSubmit}>
          <Input
            title = 'Enter title'
            name = 'title'
            type = 'text'
            value = {this.state.title}
            handleChange = {this.handleChange}/>

          <Input
            title = 'Enter Subtitle'
            name = 'subtitle'
            type = 'text'
            value = {this.state.subtitle}
            handleChange = {this.handleChange}/>

          <Input
            title = 'Chose date of start'
            name = 'dateOfStart'
            type = 'date'
            value = {this.state.dateOfStart}
            handleChange = {this.handleChange} />

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

          <Select 
            title = 'Priority'
            name = 'priority'
            className = 'browser-default'
            value = {this.state.priority}
            handleChange = {this.handleChange}
            options = {['1', '0']} />

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

export default UpdateShow;