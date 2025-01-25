import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            {/* Page Banner Area */}
            <div className="page-banner bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-content">
                                <h2>Contact With Us</h2>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Banner Area */}

            {/* Contact Info */}
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {/* Contact Number */}
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="bx bxs-phone"></i>
                                <h4>Contact Number</h4>
                                <p><a href="tel:+0123654987">+0123 654 987</a></p>
                                <p><a href="tel:+0123456789">+0123 456 789</a></p>
                            </div>
                        </div>

                        {/* Our Location */}
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="bx bxs-location-plus"></i>
                                <h4>Our Location</h4>
                                <p>6th floor, Anthina</p>
                                <p>Barbosa Sidney</p>
                            </div>
                        </div>

                        {/* Contact Email */}
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="contact-info">
                                <i className="bx bxs-envelope"></i>
                                <h4>Contact Email</h4>
                                <p><a href="mailto:someone@example.com">someone@example.com</a></p>
                                <p><a href="mailto:someoneelse@example.com">someoneelse@example.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Info */}

            {/* Contact Form Area */}
            <div className="contact-form-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Contact Us</span>
                        <h2>Get in Touch</h2>
                    </div>

                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="row">
                                {/* Name Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            required
                                            placeholder="Your email address"
                                        />
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="msg_subject"
                                            id="msg_subject"
                                            className="form-control"
                                            required
                                            placeholder="Your Subject"
                                        />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone_number"
                                            className="form-control"
                                            id="phone_number"
                                            required
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            cols="30"
                                            rows="6"
                                            required
                                            placeholder="Write your message..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="col-lg-12 col-md-12 text-center">
                                    <button type="submit" className="default-btn-one">
                                        Send Message
                                    </button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Contact Form Area */}

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
                                <form className="newsletter-form">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        name="EMAIL"
                                        required
                                        autoComplete="off"
                                    />
                                    <button type="submit" className="btn btn-primary">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Newsletter Area */}
        </div>
    );
};

export default ContactUs;
