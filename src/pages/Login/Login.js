import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import style from "./Login.module.css";
import logo from "../../Images/Logo-Two.png";
import authImg from "../../Images/auth-image.png";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Login = () => {
  return (
    <>
      <Navigation></Navigation>
      <section className="container mt-3 mt-md-5 d-flex justify-content-center align-items-center">
        <div className="row shadow-lg rounded mx-1">
          <div className="col-12 col-md-12 col-lg-6 p-3">
            <div className="d-flex justify-content-center py-2 mb-2 ">
              <img
                className=""
                width="40%"
                // height="70px"
                src={logo}
                alt="petclub"
              />
            </div>
            <div>
              <h3 className="text-main fs-3 mb-3">Login To PetClub</h3>
            </div>
            <form>
              <div className="mb-3">
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
              </div>
              <div className="mb-3">
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
                className="btn w-100 button-defult-hover  rounded px-4 py-1"
              >
                Login&nbsp;{" "}
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </button>
            </form>
            <NavLink to="#" className="mt-1 ms-1 d-block text-main">
              forget password
            </NavLink>
            <div
              className={`${style.or} d-flex justify-content-center my-3 position-relative`}
            >
              <span className="fs-5 fw-normal text-main">Or</span>
            </div>
            <div className="solcial-signup pb-2">
              <div className="row">
                <div className="col">
                  <NavLink
                    as={HashLink}
                    className={`${style.responsive} d-flex w-100 h-100 justify-content-center align-items-center btn button-defult-reverse-hover   rounded px-4 py-1`}
                  >
                    <i className="fa-brands fa-google"></i> &nbsp; Login with
                    Google
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink
                    as={HashLink}
                    className={`${style.responsive} d-flex w-100 h-100 justify-content-center align-items-center btn button-defult-reverse-hover  rounded px-4 py-1`}
                  >
                    <i className="fa-brands fa-facebook"></i> &nbsp; Login With
                    Facebook
                  </NavLink>
                </div>
              </div>

              <div className="text-main p-1 rounded mt-2 bg-white">
                <span>Dont Have An Account!</span>&nbsp;
                <NavLink className="text-main" to="/signup">
                  create an account
                </NavLink>
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
