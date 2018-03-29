import React from 'react';
import '../styles/loginform.css';
import '../styles/bootstrap-social.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div class="container login-contain">
        <div className="header-reg text-center mb-5 mt-5">
          <h1 className="jumbo-text">Login</h1>
        </div>
        <div className="social-buttons col-sm-12 mb-5 row">
          <div className="col-sm-3">
            <a class="btn btn-block btn-social btn-reddit">
              <span class="fab fa-twitter mt-1 mb-1" /> Sign in with Twitter
            </a>
          </div>
          <div className="col-sm-3">
            <a class="btn btn-block btn-social btn-reddit">
              <span class="fab fa-github mt-1 mb-1" /> Sign in with GitHub
            </a>
          </div>
          <div className="col-sm-3">
            <a class="btn btn-block btn-social  btn-reddit">
              <span class="fab fa-facebook mt-1 mb-1" /> Sign in with Facebook
            </a>
          </div>
          <div className="col-sm-3">
            <a class="btn btn-block btn-social  btn-reddit">
              <span class="fab fa-instagram mt-1 mb-1" /> Sign in with Instagram
            </a>
          </div>
        </div>

        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label login-text">
              Email
            </label>
            <div class="col-sm-10 ">
              <input
                type="email"
                class="form-control input-bg"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group row mt-2">
            <label
              for="inputPassword3"
              class="col-sm-2 col-form-label login-text"
            >
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control input-bg"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-sm-2 col-sm-10 ">
              <button
                type="submit"
                class="btn btn-primary btn-outline-dark float-right mt-2"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
