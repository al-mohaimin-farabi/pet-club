import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import logo from "../../../Images/Logo-Two.png";
import authImg from "../../../Images/forgotpass.svg";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const { user, isLoading, resetPassword, msg, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (loginData) => {
    resetPassword(loginData.email);
    if (user?.email) reset();
  };

  // useEffect(() => {
  //   document.title = "Reset Password";
  //   // console.log("from Login");
  // }, []);
  return (
    <>
      <Navigation></Navigation>

      <section className="container mt-1 mt-md-3 d-flex justify-content-center align-items-center">
        <div className="row mx-1 shadow-lg rounded">
          <div className="col-12 col-md-12 col-lg-6 py-2">
            <div className="text-center p-0 m-0">
              <img src={logo} className="m-0 p-0" width="22%" alt="" />
            </div>
            <p className="display-6 fs-4 text-center mt-0 mb-3 ">
              Reset Password{" "}
              <i className="fas fa-user-shield text-secondary"></i>
            </p>
            {user.email && (
              <div className="alert alert-success" role="alert">
                <span className="bi bi-check-circle-fill"></span>Email Sent
                successfully
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  {...register("email", {
                    required: " Email Can't Be Empty",
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
                    <i className="fas  fa-exclamation-triangle ms-1"></i>
                    {errors?.email.message}
                  </p>
                ) : (
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-defult  w-100">
                Send Email <i className="fas fa-sign-in-alt"></i>
              </button>

              {isLoading ? (
                <div className="w-100 text-center mt-5">
                  <div
                    className="spinner-grow text-secondary text-center"
                    role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                (authError || msg) && (
                  <div
                    className={`alert mt-3 ${
                      authError ? "alert-danger" : "alert-success"
                    }`}
                    role="alert">
                    <span
                      className={`bi ${
                        authError
                          ? "bi-exclamation-circle-fill"
                          : "fa-solid fa-circle-check"
                      }`}></span>
                    &nbsp;
                    {authError || msg}
                  </div>
                )
              )}
            </form>
          </div>
          <div className="col-12 col-lg-6 pt-2 bg-main-gradient rounded-end d-none d-lg-block d-flex justify-content-center align-items-center d-custom-none">
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
