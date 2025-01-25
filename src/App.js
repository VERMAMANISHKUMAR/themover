import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <>
      {/* <div class="preloader">
      <div class="d-table">
          <div class="d-table-cell">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
      </div>
    </div> */}
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<About/>} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
