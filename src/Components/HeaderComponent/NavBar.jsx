import React, { Component } from 'react';
import logo from '../../file/logo.png';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <img src={logo} alt="Logo" className="Logo"/>;
          {/*<li className="navButton"><Link to="">Home</Link></li>*/}
          {/*<button class="ui secondary button">Click Here</button>*/}
        </ul>
      </header>
    )
  }
}

export default Menu;
