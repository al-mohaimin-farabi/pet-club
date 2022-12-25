import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import style from "../Auth.module.css";
import logo from "../../../Images/Logo-Two.png";
import authImg from "../../../Images/auth-image.png";
import googleSignIn from "../../../Images/Icons/google-logo.png";
import fbSignIn from "../../../Images/Icons/facebookicon.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const {
    user,
    loginUser,
    signInWithGoogle,
    isLoading,
    authError,
    signInWithFacebook,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (loginData) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    if (user?.email) reset();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  const handleFacebookSignIn = () => {
    signInWithFacebook(location, navigate);
  };
  useEffect(() => {
    document.title = "Login";
    console.log("from Login");
  }, []);
  return (
    <>
      <Navigation></Navigation>
      {isLoading && (
        <div className="w-100 text-center mt-5">
          <div
            className="spinner-grow text-secondary text-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <section className="container mt-1 mt-md-3 d-flex justify-content-center align-items-center">
        <div className="row mx-1 shadow-lg rounded">
          <div className="col-12 col-md-12 col-lg-6 py-2">
            <div className="text-center p-0 m-0">
              <img src={logo} className="m-0 p-0" width="22%" alt="" />
            </div>
            <p className="display-6 fs-4 text-center mt-0 mb-3 ">
              Login <i className="fas fa-user-shield text-secondary"></i>
            </p>
            {user.email && (
              <div className="alert alert-success" role="alert">
                <span className="bi bi-check-circle-fill"></span>Login
                successfull
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  {...register("email", {
                    required: "Email Can Not Be Empty",
                  })}
                  type="email"
                  name="email"
                  className={
                    errors?.email ? "form-control is-invalid" : "form-control"
                  }
                  placeholder="E-mail"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {errors?.email ? (
                  <p className="py-2 text-danger ">
                    <i className="fas  fa-exclamation-triangle ms-1"></i>{" "}
                    {errors?.email.message}{" "}
                  </p>
                ) : (
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "PassWord Can Not Be Empty",
                    minLength: {
                      value: 6,
                      message: "Minmum Lenght Should Be 6",
                    },
                  })}
                  type="password"
                  name="password"
                  className={
                    errors?.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Password"
                  id="exampleInputPassword1"
                />
                {errors?.password && (
                  <p className="py-2 text-danger ">
                    <i className="fas  fa-exclamation-triangle ms-1"></i>{" "}
                    {errors?.password.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-defult  w-100">
                Login <i className="fas fa-sign-in-alt"></i>
              </button>
              <NavLink to="/signup" className="fw-normal text-main ms-1">
                don't have an account!
              </NavLink>
            </form>

            <div
              className={`${style.or} d-flex justify-content-center my-2 position-relative`}
            >
              <span className="fs-5 fw-normal text-main">Or</span>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2 ">
                <button
                  onClick={handleGoogleSignIn}
                  className={`${style.responsive_btn} btn btn-defult-opposite d-flex justify-content-center align-items-center w-100`}
                >
                  <img src={googleSignIn} width="30px" height="30px" alt="" />
                  &nbsp;Login In With Google
                </button>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-2 ">
                <button
                  onClick={handleFacebookSignIn}
                  className={`btn btn-defult-opposite d-flex justify-content-center align-items-center w-100 ${style.responsive_btn}`}
                >
                  <img src={fbSignIn} width="30px" height="30px" alt="" />
                  &nbsp;Login In With Facebook
                </button>
              </div>
              <div className="col-12">
                {authError && (
                  <div className="alert alert-danger mt-3" role="alert">
                    <span className="bi bi-exclamation-circle-fill"></span>{" "}
                    &nbsp;
                    {authError}
                  </div>
                )}
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
