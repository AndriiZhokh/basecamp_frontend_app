import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.sass';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container foot">
          © 2019 Copyright Text
          <Link className="grey-text text-lighten-4 right" to = "/">Home</Link>
        </div>
      </footer>
    );
  }
}