import React, { useEffect } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import style from "../Auth.module.css";
import logo from "../../../Images/Logo-Two.png";
import authImg from "../../../Images/auth-image.png";
import googleSignIn from "../../../Images/Icons/google-logo.png";
import fbSignIn from "../../../Images/Icons/facebookicon.png";
const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <section className="container mt-1 mt-md-3 d-flex justify-content-center align-items-center">
        <div className="row mx-1 shadow-lg rounded">
          <div className="col-12 col-md-12 col-lg-6 py-2">
            <div className="text-center p-0 m-0">
              <img src={logo} className="m-0 p-0" width="30%" alt="" />
            </div>
            <p className="display-6 fs-3 text-center ">
              Login <i className="fas fa-user-shield text-secondary"></i>
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-defult  w-100">
                Login <i className="fas fa-sign-in-alt"></i>
              </button>
            </form>
            <div
              className={`${style.or} d-flex justify-content-center my-2 position-relative`}
            >
              <span className="fs-5 fw-normal text-main">Or</span>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2 ">
                <button
                  className={`${style.responsive_btn} btn btn-defult-opposite d-flex justify-content-center align-items-center w-100`}
                >
                  <img src={googleSignIn} width="40px" height="40px" alt="" />
                  &nbsp;Sign In With Google
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2 ">
                <button
                  className={`btn btn-defult-opposite d-flex justify-content-center align-items-center w-100 ${style.responsive_btn}`}
                >
                  <img src={fbSignIn} width="40px" height="40px" alt="" />
                  &nbsp;Sign In With Facebook
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-3 bg-main-gradient rounded-end d-none d-lg-block d-flex justify-content-center align-items-center d-custom-none">
            <img
              className="img-fluid"
              src={authImg}
              alt="young-man-using-laptop-computer-with-dog-pet-on-white-background-free-vector"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
