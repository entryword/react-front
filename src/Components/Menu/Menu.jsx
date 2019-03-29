import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="ui pointing menu">
        <a className="active item">
          Collection
        </a>
        <a className="item">
          About
        </a>
        <a className="item">
          Contact
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..."></input>
                <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
      // <div class="ui segment" >
      // <p></p>
      // </div>
    )
  }
}

export default Menu;
