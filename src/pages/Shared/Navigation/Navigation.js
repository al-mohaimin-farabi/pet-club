import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../Images/LOGO.png";
const Navigation = () => {
  const { user, logout, setAuthError, setMsg } = useAuth();

  const location = useLocation();

  useEffect(() => {
    // Clear msg and authError on route change
    setAuthError("");
    setMsg("");
    // console.log(user);
  }, [location, setAuthError, setMsg]);

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            width="100px"
            height="60px"
            src={logo}
            className="img-fluid"
            alt="pet club"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-main " to="/" end>
                Home
              </NavLink>
              <NavLink
                className="nav-link text-main visually-hidden"
                to="/home"
                end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-main " to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                to="/services"
                className="nav-link text-main "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Services <i className="fa-solid fa-caret-down"></i>
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item text-main  "
                    to="/services/pet-care">
                    Pet Care
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item text-main  "
                    to="/services/pet-food">
                    Pet Food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item text-main  "
                    to="/services/pet-toy-accessories">
                    Pet Toy & Accessories
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link text-main " to="/blogs">
                Blogs
              </NavLink>
            </li>
            {user?.email && (
              <>
                <li className="nav-item mb-1 mb-lg-0">
                  <NavLink className="nav-link text-main " to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item p-0 ms-0 me-2 d-flex align-items-center">
                  <NavLink
                    as={HashLink}
                    className="nav-link user text-main fw-normal me-1">
                    {user?.displayName}
                  </NavLink>
                  {user?.photoURL ? (
                    <img
                      className="rounded-circle border-primary"
                      src={user?.photoURL}
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  ) : (
                    <i className="fas fa-user"></i>
                  )}
                </li>
              </>
            )}

            <li className="nav-item">
              {!user.email ? (
                <NavLink
                  className="btn btn-sm btn-defult  rounded-pill px-3 py-1 mt-1 ms-1"
                  to="/login">
                  Login <i className="fas fa-sign-in-alt"></i>
                </NavLink>
              ) : (
                <NavLink
                  as={HashLink}
                  className="btn btn-sm btn-defult  rounded-pill px-3 py-1 mt-1 ms-1"
                  onClick={logout}>
                  Logout <i className="fas fa-sign-out-alt"></i>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
