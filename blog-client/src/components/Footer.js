import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div class="footer-row row">
      <div class="col-sm-4 footer-col">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-4 footer-col">
        <ul>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-4 footer-col">
        <div className="icon-footer">
          <i class="fab fa-facebook-square fa-2x fontawesome" />
          <i class="fab fa-instagram fa-2x fontawesome" />
          <i class="fab fa-twitter-square fa-2x fontawesome" />
          <i class="fab fa-github-square fa-2x fontawesome" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
