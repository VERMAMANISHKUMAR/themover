import React from "react";
import { Link } from 'react-router-dom';
import ServiceImg1 from '../assets/img/services/services1.jpg'
import ServiceImg2 from '../assets/img/services/services2.jpg'
import ServiceImg3 from '../assets/img/services/services3.jpg'
import ServiceImg4 from '../assets/img/services/services4.jpg'
import ServiceImg5 from '../assets/img/services/services5.jpg'
import ServiceImg6 from '../assets/img/services/services6.jpg'
import ServiceImg7 from '../assets/img/services/services7.jpg'
const ServicesPage = () => {
    return (
        <>
            {/* Page Banner Area */}
            <div className="page-banner bg-2">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-content">
                                <h2>Our Services</h2>
                                <ul>
                                <Link to="/">Home</Link>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Banner Area */}

            {/* Our Services Area */}
            <div className="our-services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Our Services</span>
                        <h2>Safe, Faster and Reliable Logistics Services</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg1} alt="Road Freight" />
                                <div className="service-caption">
                                    <h3>Road Freight</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.</p>
                                    <a href="#" className="default-btn-two">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg2} alt="Ocean Freight" />
                                <div className="service-caption">
                                    <h3>Ocean Freight</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.</p>
                                    <a href="#" className="default-btn-two">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg3} alt="Air Freight" />
                                <div className="service-caption">
                                    <h3>Air Freight</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.</p>
                                    <a href="#" className="default-btn-two">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg4} alt="B2B Exchange" />
                                <div className="service-caption">
                                    <h3>B2B Exchange</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.</p>
                                    <a href="#" className="default-btn-two">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg5} alt="Home Shipping" />
                                <div className="service-caption">
                                    <h3>Home Shipping</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.</p>
                                    <a href="#" className="default-btn-two">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg6} alt="Office Moving" />
                                <div className="service-caption">
                                    <h3>Office Moving</h3>
                                    <p>But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.</p>
                                    <a href="#" className="default-btn-two">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Our Services Area */}

            {/* Best Logistic Area */}
            <div className="best-logistic-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="logistic-text">
                                <h2>Best <span>Logistic Service</span> Solution Near you</h2>
                                <p>At vero eos et et iusto odio ducimus qui blanditiis praesentium animi voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            </div>
                            <a href="#" className="default-btn-one">Read More</a>
                        </div>

                        <div className="col-lg-6">
                            <div className="logistic-image">
                                <img src={ServiceImg7} alt="Best Logistic Service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Best Logistic Area */}

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
                                <form className="newsletter-form" data-bs-toggle="validator">
                                    <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
                                    <button type="submit" className="btn btn-primary">Subscribe</button>

                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Newsletter Area */}
        </>
    );
};

export default ServicesPage;
