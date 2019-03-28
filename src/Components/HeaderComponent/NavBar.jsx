import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          
          <li className="navButton"><Link to="">Home</Link></li>
          <button class="ui secondary button">Click Here</button>
        </ul>
      </header>
    )
  }
}

export default NavBar;
