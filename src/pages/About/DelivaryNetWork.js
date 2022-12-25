import React from "react";
import style from "./Aboute.module.css";
import bdmap from "../../Images/AboutUs/bdmap.svg";

const DelivaryNetWork = () => {
  return (
    <section className="container my-3">
      <h3 className={style.heading}>
        Our Delivary Network <i className="fa-solid fa-truck"></i>
      </h3>
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3 ">
          <h5 className="text-main fs-5 ms-5 ">
            We Delivare In 7 Major City Of Bangladesh
          </h5>
          <ul className="list-group border-0 ms-5 ">
            <li className="list-group-item border-0 ms-4">
              <i className="fa-solid fa-chevron-right"></i> Dhaka
            </li>
            <li className="list-group-item border-0 ms-4">
              <i className="fa-solid fa-chevron-right"></i> Chittagong
            </li>
            <li className="list-group-item border-0 ms-4">
              <i className="fa-solid fa-chevron-right"></i> Sylhet
            </li>
            <li className="list-group-item border-0 ms-4">
              <i className="fa-solid fa-chevron-right"></i> Rajshahi
            </li>
            <li className="list-group-item border-0 ms-4">
              <i className="fa-solid fa-chevron-right"></i> Khulna
            </li>
            <li className="list-group-item border-0 ms-4">
              <i className="fa-solid fa-chevron-right"></i> Barisal
            </li>
            <li className="list-group-item border-0 ms-4">
              <i className="fa-solid fa-chevron-right"></i> Jashore
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center my-3 ">
          <img className="img-fluid mx-auto w-50" src={bdmap} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DelivaryNetWork;
