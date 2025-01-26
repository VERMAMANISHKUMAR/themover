import React from "react";

const specialityData = [
  {
    title: "Office Relocation",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    image: "assets/img/speciality/speciality1.jpg",
    link: "service-details.html",
  },
  {
    title: "House Moving",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    image: "assets/img/speciality/speciality2.jpg",
    link: "service-details.html",
  },
  {
    title: "Curier Worldwide",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    image: "assets/img/speciality/speciality3.jpg",
    link: "service-details.html",
  },
  {
    title: "Office Relocation",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    image: "assets/img/speciality/speciality1.jpg",
    link: "service-details.html",
  },
  {
    title: "House Moving",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    image: "assets/img/speciality/speciality2.jpg",
    link: "service-details.html",
  },
  {
    title: "Curier Worldwide",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.",
    image: "assets/img/speciality/speciality3.jpg",
    link: "service-details.html",
  },
];

const SpecialityArea = () => {
  return (
    <div className="speciality-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Our Speciality</span>
          <h2>Safe and Faster Logistic Services</h2>
        </div>

        <div className="speciality-slider owl-carousel owl-theme">
          {specialityData.map((item, index) => (
            <div className="speciality-card" key={index}>
              <a href={item.link}>
                <img src={item.image} alt="speciality" />
              </a>
              <div className="speciality-text">
                <h3>
                  <a href={item.link}>{item.title}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialityArea;
