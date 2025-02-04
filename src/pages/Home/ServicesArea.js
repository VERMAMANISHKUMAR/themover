import React from "react";

import Gallery1 from '../../assets/img/gallery/gallery-1.png';
import Gallery2 from '../../assets/img/gallery/gallery-2.png';
import Gallery3 from '../../assets/img/gallery/gallery-3.png';
import Gallery4 from '../../assets/img/gallery/gallery-4.png';
import Gallery5 from '../../assets/img/gallery/gallery-5.png';
import Gallery6 from '../../assets/img/gallery/gallery-12.jpg';
import Gallery7 from '../../assets/img/gallery/gallery-7.png';
import Gallery8 from '../../assets/img/gallery/gallery-8.png';
import Gallery9 from '../../assets/img/gallery/gallery-9.png';
import WorkProces from '../../assets/img/gallery/work-process-web.png';

const ServicesArea = () => {
  const galleryImages = [
    { id: 1, src: Gallery1, alt: 'Gallery Image 1' },
    { id: 2, src: Gallery2, alt: 'Gallery Image 2' },
    { id: 3, src: Gallery3, alt: 'Gallery Image 3' },
    { id: 4, src: Gallery4, alt: 'Gallery Image 4' },
    { id: 5, src: Gallery5, alt: 'Gallery Image 5' },
    { id: 6, src: Gallery6, alt: 'Gallery Image 6' },
    { id: 7, src: Gallery7, alt: 'Gallery Image 7' },
    { id: 8, src: Gallery8, alt: 'Gallery Image 8' },
    { id: 9, src: Gallery9, alt: 'Gallery Image 9' },
  ];

  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title text-center">
            <span>Our Services</span>
            <h2>Best Packing and Unpacking Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="service-card text-center">
                <i className='bx bxs-ship'></i>
                <h3>OceanXpress</h3>
                <p>Reliable and efficient ocean freight solutions to seamlessly transport your goods across international waters, ensuring timely deliveries with utmost safety.</p>
                <a href="service-details.html" className="default-btn-two">Read More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="service-card text-center">
                <i className='bx bx-store'></i>
                <h3>StoreShip</h3>
                <p>Your trusted partner for secure cargo storage. With flexible and safe storage solutions, StoreShip keeps your goods protected and ready for transport.</p>
                <a href="service-details.html" className="default-btn-two">Read More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="service-card text-center">
                <i className='bx bxs-truck'></i>
                <h3>SpeedXpress</h3>
                <p>Fast, reliable, and door-to-door courier delivery service. SpeedXpress ensures your packages reach their destination on time.</p>
                <a href="service-details.html" className="default-btn-two">Read More</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="service-card text-center">
                <i className='bx bx-transfer'></i>
                <h3>TradeLink</h3>
                <p>A seamless B2B exchange platform for businesses to connect and trade efficiently. TradeLink helps you expand your network, manage transactions.</p>
                <a href="service-details.html" className="default-btn-two">Read More</a>
              </div>
            </div>
          </div>

          <div className="view-btn text-center">
            <a href="services.html" className="default-btn">View All</a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section ptb-100">
        <div className="container">
          <div className="text-center">
            <h2>How We Work</h2>
            <p>Relocate In 4 Easy Steps</p>
            <img src={WorkProces} alt="Shape" className="img-fluid" />
          </div>
          <div className="section-title text-center">
            <span>Gallery</span>
            <h2>Our Recent Work</h2>
          </div>

          <div className="row justify-content-center">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                <div className="gallery-item text-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
