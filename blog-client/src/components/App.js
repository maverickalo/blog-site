import React, { Component } from 'react';
import Navbar from './Navbar';
import FrontPage from './FrontPage';
import Info from './Information';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FrontPage />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
