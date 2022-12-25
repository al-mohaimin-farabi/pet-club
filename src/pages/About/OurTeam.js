import React from "react";
import style from "./Aboute.module.css";
import farabi from "../../Images/AboutUs/farabi.jpg";
import rahela from "../../Images/AboutUs/rahela.jpg";
import imran from "../../Images/AboutUs/imran.jpg";

const OurTeam = () => {
  return (
    <section className="container">
      <h3 className={style.heading}>
        Our Team <i className="fa-solid fa-people-group"></i>
      </h3>

      <div className="row mt-3 gx-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
          <div className={`card w-100 border-0  ${style.card_hover}`}>
            <div
              className={`${style.img_box} bg-main-linear-gradient rounded-top`}
            >
              <img src={farabi} className="card-img-top p-2" alt="..." />
            </div>

            <div className="card-body rounded-bottom">
              <h5 className="card-title text-secondary mt-5 mb-1 pb-0">
                Al Mohaimin Farabi
              </h5>
              <p className="card-text text-main  mb-0 mt-0 p-0">Student</p>
              <p className="card-text text-main m-0">Roll: 590924</p>
              <p className="card-text text-main my-1 mb-3">
                I am studying at the Daffodil Institute of IT for a Diploma in
                Computer Technology 4th semester. This is our first project.
              </p>
              <ul className="w-100 ps-0">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/almohaimin.farabi"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/al-mohaimin-farabi"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/almohaiminfarabi/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
          <div className={`card w-100 border-0  ${style.card_hover}`}>
            <div
              className={`${style.img_box} bg-main-linear-gradient rounded-top`}
            >
              <img src={rahela} className="card-img-top p-2" alt="..." />
            </div>

            <div className="card-body rounded-bottom">
              <h5 className="card-title text-secondary mt-5 mb-1 pb-0">
                Rahela Begum
              </h5>
              <p className="card-text text-main  mb-0 mt-0 p-0">Student</p>
              <p className="card-text text-main m-0">Roll: 590948</p>
              <p className="card-text text-main my-1 mb-3 me-0">
                I am studying at the Daffodil Institute of IT for a Diploma in
                Computer Technology 4th semester. This is our first project.
              </p>
              <ul className="w-100 ps-0">
                <li>
                  <a target="_blank" href="https://www.facebook.com/Rahela89">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rahela-b-1b17aa209/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center my-3">
          <div className={`card w-100 border-0  ${style.card_hover}`}>
            <div
              className={`${style.img_box} bg-main-linear-gradient rounded-top`}
            >
              <img src={imran} className="card-img-top p-2" alt="..." />
            </div>

            <div className="card-body rounded-bottom">
              <h5 className="card-title text-secondary mt-5 mb-1 pb-0">
                Imran Ali Nishat
              </h5>
              <p className="card-text text-main  mb-0 mt-0 p-0">Student</p>
              <p className="card-text text-main m-0">Roll: 590976</p>
              <p className="card-text text-main my-1 mb-3">
                I am studying at the Daffodil Institute of IT for a Diploma in
                Computer Technology 4th semester. This is our first project.
              </p>
              <ul className="w-100 ps-0">
                <li>
                  <a target="_blank" href="https://www.facebook.com/ianishat77">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ianishat77/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
