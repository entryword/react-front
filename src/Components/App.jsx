import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
// import HomePage from './HomePage';
import About from './About/About'
import NavBar from './HeaderComponent/NavBar';
import MainMenu from './Menu/MainMenu'
import Footer from './FooterComponent/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <MainMenu />
          <Route name="About" exact path="/" component={About} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;
