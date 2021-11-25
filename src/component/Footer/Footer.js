import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex-container justify-between">
          <div className="footer-item">
            Build by <a href="https://github.com/johnforjc">JohnforJC</a>
          </div>
          <div className="footer-item">
            <a className="link" href="https://github.com/johnforjc">
              Github
            </a>
            <a className="link" href="https://github.com/johnforjc/cashier-app">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
