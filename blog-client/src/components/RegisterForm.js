import React from 'react';
import '../styles/registerform.css';

class RegisterForm extends React.Component {
  render() {
    return (
      <div class="container">
        <div className="header-reg text-center mb-5 mt-5">
          <h1 className="jumbo-text">Register</h1>
        </div>
        <div className="social-buttons col-sm-12 mb-5 row">
          <div className="col-sm-3">
            <a class="btn btn-block btn-social btn-reddit">
              <span class="fab fa-twitter mt-1 mb-1" /> Sign up with Twitter
            </a>
          </div>
          <div className="col-sm-3">
            <a class="btn btn-block btn-social btn-reddit">
              <span class="fab fa-github mt-1 mb-1" /> Sign up with GitHub
            </a>
          </div>
          <div className="col-sm-3">
            <a class="btn btn-block btn-social  btn-reddit">
              <span class="fab fa-facebook mt-1 mb-1" /> Sign up with Facebook
            </a>
          </div>
          <div className="col-sm-3">
            <a class="btn btn-block btn-social  btn-reddit">
              <span class="fab fa-instagram mt-1 mb-1" /> Sign up with Instagram
            </a>
          </div>
        </div>
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label login-text">
              Email
            </label>
            <div class="col-sm-8 mr-auto">
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
              class="col-sm-3 col-form-label login-text"
            >
              Password
            </label>
            <div class="col-sm-8 mr-auto">
              <input
                type="password"
                class="form-control input-bg"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group row mt-2">
            <label
              for="inputPassword3"
              class="col-sm-3 col-form-label login-text"
            >
              Confirm Password
            </label>
            <div class="col-sm-8 mr-auto">
              <input
                type="password"
                class="form-control input-bg"
                id="inputPassword3"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="form-group row mt-2">
            <label for="inputEmail3" class="col-sm-3 col-form-label login-text">
              First Name
            </label>
            <div class="col-sm-8 mr-auto">
              <input
                type="email"
                class="form-control input-bg"
                id="inputEmail3"
                placeholder="First Name"
              />
            </div>
          </div>
          <div class="form-group row mt-2">
            <label for="inputEmail3" class="col-sm-3 col-form-label login-text">
              Last Name
            </label>
            <div class="col-sm-8 mr-auto">
              <input
                type="email"
                class="form-control input-bg"
                id="inputEmail3"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="form-group col-sm-6 mt-5">
            <label
              for="exampleFormControlFile1"
              class="col-form-label login-text custom-file"
              id="customFile"
            >
              Add Profile Image
            </label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <div class="form-group row">
            <div class=" col-sm-10 ">
              <button
                type="submit"
                class="btn btn-primary btn-outline-dark float-right mt-2"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
