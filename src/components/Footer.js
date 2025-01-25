import React from "react";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/dark.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import "../assets/css/meanmenu.min.css";
import "../assets/css/magnific-popup.min.css";
import themoverLogo from "../assets/img/themover-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-area pt-100 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="logo">
                  <img
                    src={themoverLogo}
                    className="main-logo"
                    alt="Themover Logo"
                  />
                  <img
                    src={themoverLogo}
                    className="white-logo"
                    alt="The Mover White Logo"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul className="footer-socials">
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

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Company</h3>
                <ul className="footer-text">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Cost Calculator</a></li>
                  <li><a href="#">Latest News</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Support</h3>
                <ul className="footer-text">
                  <li><a href="faq.html">FAQ’s</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="terms-condition.html">Terms & Conditions</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Contact Info</h3>
                <ul className="info-list">
                  <li>
                    <i className="bx bxs-location-plus"></i>
                    6th Floor, Barbosa, Sidney
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:info@themover.in">info@themover.in</a>
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:support@themover.in">support@themover.in</a>
                  </li>
                  <li>
                    <i className="bx bxs-phone"></i>
                    <a href="tel:+0123456789">+0123 456 789</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <p>
            Copyright 2025. All Rights Reserved{" "}
            <a href="https://themover.in/" target="_blank" rel="noopener noreferrer">
              Themover
            </a>
          </p>
        </div>
      </div>
      <div class="go-top">
        <i class='bx bx-chevrons-up'></i>
      </div>
    </>
  );
};

export default Footer;
