import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import FrontPage from './FrontPage';
import Info from './Information';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import VideoBG from './VideoBG';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <VideoBG />
          <div className="absolute">
            <Navbar />
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Info} />
            <Route exact path="/register" component={RegisterForm} />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
