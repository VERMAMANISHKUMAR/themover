import React from "react";
import BlogImg1 from "../assets/img/blog/blog1.jpg";
import BlogImg2 from "../assets/img/blog/blog2.jpg";
import BlogImg3 from "../assets/img/blog/blog11.jpg";
import BlogImg4 from "../assets/img/blog/blog12.jpg";
import BlogImg5 from "../assets/img/blog/blog13.jpg";
import BlogImg6 from "../assets/img/blog/blog10.jpg";
import { Link } from 'react-router-dom';
// PageBanner Component
const PageBanner = ({ title, breadcrumb }) => (
  <div className="page-banner bg-3">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="page-content">
            <h2>{title}</h2>
            <ul>
              <li>
               <Link to="/">Home</Link>
              </li>
              <li>{breadcrumb}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// BlogCard Component
const BlogCard = ({ image, category, date, title, description, link }) => (
  <div className="col-lg-4 col-md-6">
    <div className="blog-card">
      <a className="blog-image" href={link}>
        <img src={image} alt="blog" />
      </a>
      <div className="blog-text">
        <span className="meta-tag">{category}</span>
        <div className="date">{date}</div>
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p className="mb-20">{description}</p>
        <a href={link} className="default-btn-two">
          Read More
        </a>
      </div>
    </div>
  </div>
);

// Pagination Component
const Pagination = () => (
  <div className="col-lg-12 col-md-12">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
);

// BlogPage Component
const BlogPage = () => {
  const blogs = [
    {
      image: BlogImg1,
      category: "Delivery",
      date: "22 August 2024",
      title: "We ensure you best the quality services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor",
      link: "#",
    },
    {
      image: BlogImg2,
      category: "Transport",
      date: "23 August 2024",
      title: "Air cargo may become short-term solution",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor",
      link: "#",
    },
    {
      image: BlogImg3,
      category: "Delivery",
      date: "24 August 2024",
      title: "We introduce new boat and flight service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor",
      link: "#",
    },
    {
      image: BlogImg4,
      category: "Transport",
      date: "25 August 2024",
      title: "Goods will be contain in certified safe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor",
      link: "#",
    },
    {
      image: BlogImg5,
      category: "Delivery",
      date: "26 August 2024",
      title: "Introduce new boat service in this spring",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor",
      link: "#",
    },
    {
      image: BlogImg6,
      category: "Transport",
      date: "27 August 2024",
      title: "Our customer around the world satisty with it",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor",
      link: "#",
    },
  ];

  return (
    <>
      <PageBanner title="Our Blog" breadcrumb="Blog" />
      <div className="blog-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Blog</span>
            <h2>Read Our Latest News</h2>
          </div>

          <div className="row">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
