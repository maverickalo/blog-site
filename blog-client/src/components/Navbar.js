import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div className="links bg-dark">
          <h2>About</h2>
          <h2>Register</h2>
          <h2>Login</h2>
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
        <div className="logo-border">
          <h2 className="logo-right">Blog Site</h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
