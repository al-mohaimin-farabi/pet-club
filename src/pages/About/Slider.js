import React from "react";
import logo from "../../Images/Logo-Two.png";
import style from "./Slider.module.css";

const Slider = () => {
  return (
    <div className="container-fluid mb-3 bg-main py-4">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container ">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                <div className={`${style.img_box}`}>
                  <h2 className="text-main fst-italic   ">Welcome To</h2>
                  <img src={logo} className="img-fluid mt-4" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-start align-items-center">
                <h1 className="text-white display-2">
                  Why we are here <span className="display-1">?</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                <div className={`${style.img_box}`}>
                  <h2 className="text-main fst-italic   ">Welcome To</h2>
                  <img src={logo} className="img-fluid mt-4" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-start align-items-center">
                <h1 className="text-white display-2">
                  Why we are here <span className="display-1">?</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                <div className={`${style.img_box}`}>
                  <h2 className="text-main fst-italic   ">Welcome To</h2>
                  <img src={logo} className="img-fluid mt-4" alt="" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-start align-items-center">
                <h1 className="text-white display-2">
                  Why we are here <span className="display-1">?</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
