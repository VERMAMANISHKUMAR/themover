import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img/speciality/speciality1.jpg'
import img2 from '../assets/img/speciality/speciality2.jpg'
import img3 from '../assets/img/speciality/speciality3.jpg'

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
    dots: true,
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
                    <a href="contact.html" className="default-btn-one me-3">
                      Contact Us
                    </a>
                    <a href="#" className="default-btn-two">
                      Get A Quote
                    </a>
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

const ContactArea = () => {
  const contacts = [
    {
      id: 1,
      icon: "bxs-phone",
      title: "Contact Number",
      details: ["+4560 123 987", "+0123 456 789"],
    },
    {
      id: 2,
      icon: "bxs-location-plus",
      title: "Our Location",
      details: ["Str, First avenue 1", "Silvy Road, Barbosa"],
    },
    {
      id: 3,
      icon: "bx-show",
      title: "Opening Hours",
      details: ["9:00 AM - 6:00 PM", "Saturday - Thursday"],
    },
    {
      id: 4,
      icon: "bxs-envelope",
      title: "Our Email",
      details: ["info@logistics.com", "support@logistics.com"],
    },
  ];

  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          {contacts.map((contact) => (
            <div key={contact.id} className="col-lg-3 col-sm-6">
              <div className="contact-card">
                <i className={`bx ${contact.icon}`}></i>
                <h4>{contact.title}</h4>
                {contact.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
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
                <a href="service-details.html" className="default-btn-two">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SpecialityArea = () => {
  const slides = [
    {
      id: 1,
      image:img1,
      title: "Office Relocation",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      link: "service-details.html",
    },
    {
      id: 2,
      image: img2,
      title: "House Moving",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      link: "service-details.html",
    },
    {
      id: 3,
      image:img3,
      title: "Curier Worldwide",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      link: "service-details.html",
    },
    {
      id: 4,
      image:img1,
      title: "Office Relocation",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      link: "service-details.html",
    },
    {
      id: 5,
      image: img2,
      title: "House Moving",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      link: "service-details.html",
    },
    {
      id: 6,
      image: img3,
      title: "Curier Worldwide",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
      link: "service-details.html",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="speciality-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Our Speciality</span>
          <h2>Safe and Faster Logistic Services</h2>
        </div>
        <Slider {...sliderSettings} className="speciality-slider">
          {slides.map((slide) => (
            <div key={slide.id} className="speciality-card">
              <a href={slide.link}>
                <img src={slide.image} alt={slide.title} />
              </a>
              <div className="speciality-text">
                <h3>
                  <a href={slide.link}>{slide.title}</a>
                </h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ContactArea />
      <ServicesArea />
      <SpecialityArea />
    </>
  );
};

export default HomePage;
