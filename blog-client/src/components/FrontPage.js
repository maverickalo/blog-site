import React from 'react';
import '../styles/jumbotron.css';

const FrontPage = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="jumbo-text">
          <h1 class="display-3">Welcome To This Blog Site</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
        <div className="btn-container">
          <div className="btn-front">
            <button type="button" class="btn-lg btn-outline-dark">
              Login
            </button>
          </div>
          <div className="btn-front">
            <button type="button" class="btn-lg btn-outline-dark">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
