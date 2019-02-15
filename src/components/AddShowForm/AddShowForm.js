import React, { Component } from 'react';
import './AddShowForm.sass';
import axios from 'axios';

class AddShowForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      date_of_start: '',
      long: '',
      short: '',
      url: '',
      priority: '',
      rating: '',
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
    /* console.log(this.fileInput.current.files[0].name);
    console.log(this.state.title);
    console.log(this.state.subtitle);
    console.log(this.state.date_of_start);
    console.log(this.state.long);
    console.log(this.state.short);
    console.log(this.state.priority);
    console.log(this.state.rating);
    console.log(this.state.url); */
    this.sendData('/addshow', this.state, this.fileInput);
  }
  
  render() {
    return(
      <form className = "add-show-form" onSubmit = {this.handleSubmit}>
        <label >Enter Title
          <input id = "title" 
                 name = "title" 
                 value = {this.state.title} 
                 onChange = {this.handleChange} 
                 type = "text" required/>
                 {this.state.title}
        </label>
        
        <label>Enter SubTitle
          <input id = "subtitle" 
                 name = "subtitle"
                 value = {this.state.subtitle}
                 onChange = {this.handleChange}
                 type = "text" required/>
                 {this.state.subtitle}
        </label>

        <label>Chose date of start
          <input id = "date-of-start" 
                 name = "date_of_start" 
                 type = "date" 
                 value = {this.state.date_of_start}
                 onChange = {this.handleChange}
                 required/>
                 {this.state.date_of_start}
        </label>

        <label>Long Description
          <textarea id = "long" 
                    name = "long" 
                    value = {this.state.long}
                    onChange = {this.handleChange}
                    required/>
                    {this.state.long}
        </label>
        
        <label>Short Description
          <textarea id = "short" 
                    name = "short" 
                    value = {this.state.short}
                    onChange = {this.handleChange}
                    required />
                    {this.state.short}
        </label>

        <label>Video URL
          <input id ="url" 
                 name = "url" 
                 type = "url" 
                 value = {this.setState.url}
                 onChange = {this.handleChange}
                 required/>
                 {this.state.url}
        </label>

        <label>Priority
          <select name = "priority" value = {this.state.prioryty} onChange = {this.handleChange}>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">5</option>
            <option value = "5">5</option>
          </select>
          {this.state.priority} 
        </label>

        <label>User rating
          <select name = "rating" value = {this.state.rating} onChange = {this.handleChange}>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
          </select>
          {this.state.rating}
        </label>

        <div>
          <label htmlFor = "image">Chose Poster</label>
          <input id = "image" 
                 name = "image" 
                 type = "file"
                 ref = {this.fileInput}/>
        </div>
        <button type = "submit">Send data</button>
      </form>
    );
  }
}

export default AddShowForm;