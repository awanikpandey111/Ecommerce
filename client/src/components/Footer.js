import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer" className="footer">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <h3>Location</h3>
                <p>
                  Kolkata
                  <br />
                  West Bengal,India
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h3>Share with love</h3>
                <div className="icon">
                  <a href="" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <h3>About Ecommerce</h3>
                <p>
                  This Is Simple Ecommerce Website made for practice purpose
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="f-bottom text-center">
          <div className="container">
            <h4>
              Copyright &copy; 2022 Awanik Ecommerce. All Rights Reserved{" "}
            </h4>
            <p>
              Made With <i className="fas fa-heart"></i> By{" "}
              <span className="author">Awanik Pandey</span>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
