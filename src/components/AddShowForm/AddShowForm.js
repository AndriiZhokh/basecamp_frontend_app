import React, { Component } from 'react';
import './AddShowForm.sass';
import axios from 'axios';

class AddShowForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      selectedFile: null,
      loaded: 0
    };
  }

  handleSelectedFile = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  handleUpload = () => {
    const data = new FormData();
    data.append('file', this.state.selectedFile, this.state.selectedFile.name);

    axios.post('/upload', data);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(this.state)
    }

    const request = new Request('/show', options)

    fetch(request);
  }

  render() {
    return(
      <form className = "add-show-form">
        {/* <label htmlFor = "title">Enter Title{this.state.title}</label>
        <input id = "title" 
               name = "title" 
               value = {this.state.title} 
               onChange = {this.handleChange} 
               type = "text" required/>

        <label htmlFor = "subtitle">Enter SubTitle</label>
        <input id = "subtitle" 
               name = "subtitle"
               value = {this.state.subtitle}
               onChange = {this.handleChange}
               type = "text" required/> */}

        {/* <label htmlFor = "date-of-start">Chose date of start</label>
        <input id = "date-of-start" name = "date-of-start" type = "date" required/> */}
        <div>
          <label htmlFor = "image">Chose Poster</label>
          <input id = "image" 
                 name = "image" 
                 type = "file"
                 onChange = {this.handleSelectedFile}/>
          <div> {Math.round(this.state.loaded,2) } %</div>
          <button onClick = {this.handleUpload}>Upload</button>
        </div>


        {/* <textarea name = "long" placeholder = "Long Description" required></textarea>
        <textarea name = "short" placeholder = "Short Description" required></textarea>
        <select name = "priority">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input name = "url" placeholder = "video url" type = "url" required/> */}
        <button type = "submit">Send data</button>
      </form>
    );
  }
}

export default AddShowForm;