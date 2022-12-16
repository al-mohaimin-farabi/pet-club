import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../../Images/Logo-Two.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-light py-2 mt-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <div className={style.box}>
              <img
                src={logo}
                style={{ width: "40%" }}
                alt="logo"
                className="m-0 p-0"
              />
            </div>
            <p className=" text-main  ">
              Pet CLub is an online pet shop in Chittagong providing your loving
              pets with their favourite foods and other accessories. We home
              deliver your pet food so you can receive from your doorstep.
            </p>
            <div className={style.social_link}>
              <h5 className=" text-main  text-uppercase mb-2 ">Get social!</h5>
              <ul className="d-flex justify-content-start p-0 m-0">
                <li className="me-3">
                  <a
                    as={HashLink}
                    to="/"
                    className="rounded-circle button-defult-hover p-2 btn  d-flex"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a
                    as={HashLink}
                    to="/"
                    className="rounded-circle button-defult-hover p-2 btn  d-flex"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a
                    as={HashLink}
                    to="/"
                    className="rounded-circle button-defult-hover p-2 btn  d-flex"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className={style.box}>
              <h5 className=" text-main  text-uppercase">Contact Info</h5>
            </div>
            <ul className="p-0 m-0">
              <li className="m-0 p-0 d-flex">
                <p className=" text-main ">
                  <i className="fa-solid fa-house"></i>
                  <strong> Address: </strong>7 No. West Sholoshohor Ward
                  Chattogram
                </p>
              </li>
              <li className="m-0 p-0 d-flex align-itemscenter">
                <p className=" text-main ">
                  <i className="fa-solid fa-phone"></i>
                  <strong> Phone: </strong>01720867938
                </p>
              </li>
              <li className="m-0 p-0 d-flex">
                <p className=" text-main ">
                  <i className="fa-solid fa-envelope"></i>
                  <strong> Email: </strong>
                  petclub.contact@petclub.com
                </p>
              </li>
              <li className="m-0 p-0 d-flex">
                <p className=" text-main ">
                  <i className="fa-solid fa-clock"></i>
                  <strong> Working Hours: </strong>
                  Always Open
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-4 text-uppercase pb-5">
            <div className={style.box}>
              <h5 className=" text-main   text-uppercase">
                VISIT US IN PERSON!
              </h5>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7378.923911545445!2d91.82409723841555!3d22.373936003448637!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1670367710837!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: "1px solid black" }}
              allowFullScreen="True"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <br />
        <hr />
        <div className="text-center">
          <p className="text-muted">© 2022 PetClub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
