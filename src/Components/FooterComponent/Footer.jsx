import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{'text-align':'center'}}>
          <span style={{float:'left'}}>
            Subscribe
          </span>
          <span >
            艾柏文化有限公司
          </span>
          <span className="right" style={{float:'right'}}>
            <i className="big facebook icon"></i>
            <i className="big instagram icon"></i>
        </span>
        </div>

      </footer>
    )
  }
}
export default Footer;
