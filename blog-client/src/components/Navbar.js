import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div className="links bg-dark">
          <h2>About</h2>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <h2>Register</h2>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <h2>Login</h2>
          </Link>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <Link style={{ textDecoration: 'none' }} to="/">
          <div className="logo-border">
            <h2 className="logo-right">Blog Site</h2>
          </div>
        </Link>

        <div className="icon-footer">
          <i class="fab fa-facebook-square fa-2x fontawesome" />
          <i class="fab fa-instagram fa-2x fontawesome" />
          <i class="fab fa-twitter-square fa-2x fontawesome" />
          <i class="fab fa-github-square fa-2x fontawesome" />
        </div>
      </nav>
      <div class="login-alert-contain">
        <div class="alert alert-danger login-alert" role="alert">
          You are Not Logged In
        </div>
      </div>
    </div>
  );
};

export default Navbar;
