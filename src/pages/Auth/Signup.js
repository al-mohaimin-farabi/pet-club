import React, { useEffect } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import style from "./Login.module.css";
import logo from "../../Images/Logo-Two.png";
import authImg from "../../Images/auth-image.png";
// import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
const Signup = () => {
  useEffect(() => {
    document.title = "SignUp";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-3 mt-md-5 d-flex justify-content-center align-items-center">
        <div className="row shadow-lg rounded mx-1">
          <div className="col-12 col-md-12 col-lg-6 px-3 py-1">
            <div className="d-flex justify-content-center align-items-center ">
              <img width="35%" className="img-fluid" src={logo} alt="petclub" />
            </div>
            <div>
              <h3 className="text-main fs-3 mb-0">Signup For PetClub</h3>
            </div>
            <form>
              <div className="mb-2">
                <label htmlFor="Name" className="form-label mt-2">
                  Name
                </label>
                <input
                  placeholder="Your Name"
                  requred="true"
                  type="text"
                  className="form-control form-control-sm text-main"
                  id="Name"
                  aria-describedby="nameHelp"
                />
                <label htmlFor="exampleInputEmail1" className="form-label mt-2">
                  Email
                </label>
                <input
                  requred="true"
                  placeholder="Email"
                  type="email"
                  className="form-control form-control-sm text-main"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  requred="true"
                  placeholder="Password"
                  type="password"
                  className="form-control form-control-sm text-main"
                  id="exampleInputPassword1"
                />
              </div>

              <button
                type="submit"
                className="btn w-100 rounded button-defult-hover px-4 py-1 mt-2"
                href="./index.html"
              >
                SignUp&nbsp; <i className="fa-solid fa-user-plus"></i>
              </button>
            </form>
            <div
              className={`${style.or} d-flex justify-content-center my-1 position-relative`}
            >
              <span className="fs-5 fw-normal text-main">Or</span>
            </div>
            <div className="solcial-signup pb-4">
              <div className="row ">
                <div className="col-6">
                  <button
                    className={`${style.responsive} d-flex w-100 h-100 justify-content-center align-items-center btn button-defult-reverse-hover   rounded px-4 py-1`}
                  >
                    <i className="fa-brands fa-google"></i> &nbsp; Sign Up with
                    Google
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className={`${style.responsive} d-flex w-100 h-100 justify-content-center align-items-center btn button-defult-reverse-hover  rounded px-4 py-1`}
                  >
                    <i className="fa-brands fa-facebook"></i> &nbsp; Sign Up
                    With Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-3 rounded-end d-none d-lg-block d-flex justify-content-center align-items-center d-custom-none bg-main-gradient">
            <img
              className="img-fluid"
              src={authImg}
              alt="young-man-using-laptop-computer-with-dog-pet-on-white-background-free-vector"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
