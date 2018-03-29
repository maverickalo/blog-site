import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/jumbotron.css';

const FrontPage = () => {
  return (
    <div>
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
              <Link to="/login">
                <button type="button" class="btn-lg btn-outline-dark">
                  Login
                </button>
              </Link>
            </div>
            <div className="btn-front">
              <Link to="/register">
                <button type="button" class="btn-lg btn-outline-dark">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
