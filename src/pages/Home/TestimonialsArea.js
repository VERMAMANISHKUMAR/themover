import React from "react";
import shape3 from '../../assets/img/shape/shape3.png'
import shape6 from '../../assets/img/shape/shape6.png'
const testimonialsData = [
  {
    name: "Jhon Smith",
    position: "CEO of LTD company",
    image: "assets/img/clients/client6.jpg",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "William leo",
    position: "CEO of LTD company",
    image: "assets/img/clients/client5.jpg",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    name: "Benjamin Liam",
    position: "CEO of LTD company",
    image: "assets/img/clients/client4.jpg",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

const TestimonialsArea = () => {
  return (
    <div className="testimonials-area ptb-100">
      <div className="container">
        <div className="shape-two">
          <img
            src={shape6}
            className="shape-1"
            alt="shape"
          />
          <img src={shape3} />
        </div>
        <div className="section-title">
          <span>Feedback</span>
          <h2>What Our Clients Said About Us</h2>
        </div>

        <div className="testimonials-slider owl-carousel owl-theme">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonials-card" key={index}>
              <div className="client-img">
                <img src={testimonial.image} alt="client" />
                <h3>{testimonial.name}</h3>
                <span>{testimonial.position}</span>
              </div>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star"></i>
                ))}
              </div>

              <div className="feedback-text">
                <p>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsArea;
