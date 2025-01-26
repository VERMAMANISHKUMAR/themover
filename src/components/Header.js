import React from "react";
import { Link } from "react-router-dom";
import themoverLogo from "../assets/img/themover-logo.png";


const Header = () => {
  return (
    <header className="header-area">
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <ul className="left-info">
                <li>
                  <a
                    href="mailto:support@themover.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxs-envelope"></i>
                    support@themover.in
                  </a>
                </li>
                <li>
                  <a href="tel:+919136369036">
                    <i className="bx bxs-phone-call"></i>
                    +91 91363 69036
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-sm-6">
              <ul className="right-info">
                <li className="mr-20">
                  <Link to="/for-enterprise">For Enterprise</Link>
                </li>
                <li className="mr-20">
                  <Link to="/delivery-partners">Delivery Partners</Link>
                </li>
                <li className="mr-20">
                  <Link to="/contact-us">Support</Link>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Start Navbar Area */}
      <div className="navbar-area">
        <div className="ferry-responsive-nav">
          <div className="container">
            <div className="ferry-responsive-menu">
              <div className="logo">
                <Link to="index.html">
                  <img src={themoverLogo} className="main-logo" alt="logo" />
                  <img src={themoverLogo} className="white-logo" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ferry-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="index.html">
                <img src={themoverLogo} className="main-logo" alt="logo" />
                <img src={themoverLogo} className="white-logo" alt="logo" />
              </Link>

              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/services" className="nav-link">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
