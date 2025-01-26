import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import ChooseArea from './ChooseArea'
import SpecialityArea from './SpecialityArea'
import TestimonialsArea from './TestimonialsArea'
import TransportationArea from './TransportationArea'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      bgClass: "item-bg1",
      title: "Transport & Logistic Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      bgClass: "item-bg2",
      title: "Reliable Logistic Support",
      description:
        "Efficient and seamless logistics to meet all your transport needs.",
    },
    {
      id: 3,
      bgClass: "item-bg3",
      title: "Innovative Solutions",
      description:
        "Creative and cutting-edge solutions to ensure faster delivery.",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="hero-slider">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className={`hero-slider-item ${slide.bgClass}`}>
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-content">
                    <span>Since 1992</span>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <Link to="/contact" className="default-btn-one me-3">
                      Contact Us
                    </Link>
                    <Link to="#" className="default-btn-two">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ServicesArea = () => {
  const services = [
    {
      id: 1,
      icon: "bxs-ship",
      title: "Ocean Cargo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 2,
      icon: "bx-store",
      title: "Cargo Storage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 3,
      icon: "bxs-truck",
      title: "Courier Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 4,
      icon: "bx-transfer",
      title: "B2B Exchange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <div className="services-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Our Services</span>
          <h2>Safe and Faster Logistic Services</h2>
        </div>
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-sm-6">
              <div className="service-card">
                <i className={`bx ${service.icon}`}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/service-details" className="default-btn-two">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ServicesArea />
      {/* <ChooseArea/> */}
      <SpecialityArea/>
      <TestimonialsArea/>
      <TransportationArea/>
    </>
  );
};

export default HomePage;
