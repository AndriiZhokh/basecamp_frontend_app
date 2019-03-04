import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.sass';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className = "nav-wrapper">
          <Link to = "/" className = "brand-logo">BestTV</Link>
          <ul id = "nav-mobile" className = "right hide-on-med-and-down">
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>              
              <Link to = "/allshows">All Shows</Link>
            </li>
          </ul>
        </div>
      </nav>
      
    );
  }
}