import React from 'react';
import img1 from '../../src/assets/img/clients/client1.jpg'
import signature from '../assets/img/sign.png'
import Shipping from '../assets/img/speciality/speciality2.jpg'
import Blog from '../assets/img/blog/blog7.jpg'
import partner from '../assets/img/partner/partner1.png'
const AboutUs = () => {
  return (
    <>
      {/* Page banner Area */}
      <div className="page-banner bg-1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-content">
                <h2>About Us</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page banner Area */}

      {/* About Safe Area */}
      <div className="about-text-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-safe-text">
                <h2>Safe, Faster And Easy Solution For Shipping</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit, totam rem aperiam, eaque ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia sunt explicabo.</p>
              </div>

              <div className="shipping-card">
                <div className="shipping-contant">
                  <div className="shipping-sign">
                    <img src={signature} alt="signature" />
                  </div>
                  <div className="shipping-image">
                    <img src={img1} alt="John Doe" />
                  </div>
                  <h3>John Doe</h3>
                  <span>CEO, Ferry</span>
                  <p>Nor again is there anyone who loves or pursues or desires to.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="safe-image">
                <img src={Shipping}alt="Shipping" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Safe Area */}

      {/* About Info */}
      <div className="about-info-area pb-70">
        <div className="container">
          <div className="row">
            {/* Our Mission */}
            <div className="col-lg-4 col-md-6">
              <div className="about-info-card">
                <h3>Our Mission</h3>
                <ul>
                  <li><i className='bx bx-check'></i> We provide best logistic service worldwide</li>
                  <li><i className='bx bx-check'></i> All payment methods we accept</li>
                  <li><i className='bx bx-check'></i> We provide proper safety and security</li>
                </ul>
              </div>
            </div>

            {/* Our Promises */}
            <div className="col-lg-4 col-md-6">
              <div className="about-info-card">
                <h3>Our Promises</h3>
                <ul>
                  <li><i className='bx bx-check'></i> We provide best logistic service worldwide</li>
                  <li><i className='bx bx-check'></i> All payment methods we accept</li>
                  <li><i className='bx bx-check'></i> We provide proper safety and security</li>
                </ul>
              </div>
            </div>

            {/* Our Vision */}
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="about-info-card">
                <h3>Our Vision</h3>
                <ul>
                  <li><i className='bx bx-check'></i> We provide best logistic service worldwide</li>
                  <li><i className='bx bx-check'></i> All payment methods we accept</li>
                  <li><i className='bx bx-check'></i> We provide proper safety and security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Info */}

      {/* Digital Area */}
      <div className="digital-area ptb-100">
        <div className="container">
          <div className="digital-top-contant">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="digital-image">
                  <img src={Blog} alt="Digital Shipping" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-text">
                  <h2>Trusted Digital Shipping From <span>1998</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="digital-card-contant">
            <div className="row">
              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bx-cart-alt'></i>
                    <h3><span>1998</span> - Company Started</h3>
                    <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bx-map-alt'></i>
                    <h3><span>2008</span> - Office Worldwide</h3>
                    <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bxs-truck'></i>
                    <h3><span>2004</span> - Vehicles Adding</h3>
                    <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bx-award'></i>
                    <h3><span>2012</span> - Award Of The Year Won</h3>
                    <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Digital Area */}

      {/* Partner Slider Area */}
      <div className="partner-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Partner</span>
            <h2>20+ Companies Trusted Us and Getting Result</h2>
          </div>

          <div className="partner-slider owl-carousel owl-theme">
            {/* Slider Items */}
            <div className="partner-slider-item">
              <a href="#">
                <img src={partner}alt="Logo" />
              </a>
            </div>
            {/* Additional Partner Items */}
          </div>
        </div>
      </div>
      {/* End Partner Slider Area */}

      {/* Newsletter Area */}
      <div className="newsletter-area">
        <div className="container">
          <div className="newsletter-content">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="newsletter-title">
                  <h3>Subscribe to our newsletter:</h3>
                  <p>Focused on the transport and logistic industry</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form">
                  <form>
                    <input type="email" className="form-control" placeholder="Email Address" required autoComplete="off" />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                    <div id="validator-newsletter" className="form-result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Newsletter Area */}
    </>
  );
};

export default AboutUs;
