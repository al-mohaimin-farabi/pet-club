import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Images/LOGO.png";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
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
          aria-label="Toggle navigation"
        >
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
                end
              >
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
                aria-expanded="false"
              >
                Services <i className="fa-solid fa-caret-down"></i>
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item text-main hover"
                    to="/services/pet-adoption"
                  >
                    Pet Adoption
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item text-main hover"
                    to="/services/pet-care"
                  >
                    Pet Care
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item text-main hover"
                    to="/services/pet-food"
                  >
                    Pet Food
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item text-main hover"
                    to="/services/pet-toy-accessories"
                  >
                    Pet Toy & Accessories
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item me-2">
              <NavLink className="nav-link text-main hover" to="/tips">
                Tips
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn btn-sm button-defult-hover rounded-pill px-3 py-1 mt-1 "
                to="/login"
              >
                Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
