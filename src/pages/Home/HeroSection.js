import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../../Images/hero-photo.png";
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="hero-content py-md-5 py-2 mt-4 mt-md-2 px-2">
              <h1 className="display-3 fw-bolder text-main mb-2">
                Enjoy 5% Off
              </h1>
              <h3 className="fs-4 text-main">
                Are you a new user? Join today and enjoy
                <span className="fw-bold">Flat 5% Discount</span> on your 1st
                order. For a limited time!
              </h3>
              <NavLink
                className="btn button-defult-hover rounded-pill t px-3 py-1 mt-1"
                to="/signup"
              >
                Signup Now
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center">
            <img
              className="img-fluid"
              style={{ objectFit: "cover" }}
              src={heroImg}
              alt="phots of some pet"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
