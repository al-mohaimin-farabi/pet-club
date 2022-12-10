import React from "react";
import { NavLink } from "react-router-dom";
import petAdoption from "../../Images/petAdoption.jpg";
import petCare from "../../Images/petcare.jpg";
import petFood from "../../Images/petFood.jpg";
import PetAccessories from "../../Images/petAccessories.jpg";

const Services = () => {
  return (
    <section className="service-showcase py-2 my-3">
      <div className="container">
        <div className="messeage-box mt-1">
          <h2 className="text-main  position-relative">Our Services</h2>
        </div>
        <div className="row gx-5 gy-4 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mt-0 py-2">
          <div className="col">
            <div className="card my-2 h-100">
              <img
                className="card-icon img-fluid m-0 p-0 h-100"
                // style={{ height: "380px" }}
                src={petAdoption}
                alt="pet adoption"
              />
              <div className="card__body p-3">
                <h4 className="card-title text-main">Pet Adoption</h4>
                <p className="card-text text-muted  ">
                  Your pet need some care just like a human. We can look after
                  your pet when you will be busy at your work. Pet Club can
                  provide you best pet adoption service.
                </p>
              </div>
              <div className="card-footer bg-transparent  border-0 mb-2">
                <NavLink
                  to="/services/pet-adoption"
                  className="btn button-defult-hover"
                >
                  Pet Adoption
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card my-2 h-100">
              <img
                className="card-icon img-fluid m-0 p-0 h-100"
                // style={{ height: "380px" }}
                src={petCare}
                alt="pet adoption"
              />
              <div className="card__body p-3">
                <h4 className="card-title text-main">Pet Care</h4>
                <p className="card-text text-muted  ">
                  Your pet need some care just like a human. We can look after
                  your pet when you will be busy at your work. Pet Club can
                  provide you best pet adoption service.
                </p>
              </div>
              <div className="card-footer bg-transparent  border-0 mb-2">
                <NavLink
                  to="/services/pet-care"
                  className="btn button-defult-hover"
                >
                  Pet Care
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card my-2 h-100">
              <img
                className="card-icon img-fluid m-0 p-0 h-100"
                // style={{ height: "380px" }}
                src={petFood}
                alt="pet accessories"
              />
              <div className="card__body p-3">
                <h4 className="card-title text-main">Pet Food</h4>
                <p className="card-text text-muted  ">
                  Your pet need good quality food for better helth. Pet Club can
                  provide you best quality authentic and organic Food.
                </p>
              </div>
              <div className="card-footer bg-transparent  border-0 mb-2">
                <NavLink
                  to="/services/pet-food"
                  className="btn button-defult-hover"
                >
                  Pet Food
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card my-2 h-100">
              <img
                className="card-icon img-fluid m-0 p-0 h-100"
                // style={{ height: "380px" }}
                src={PetAccessories}
                alt="pet accessories"
              />
              <div className="card__body p-3">
                <h4 className="card-title text-main">Pet Accessories</h4>
                <p className="card-text text-muted  ">
                  Mentel helth is very important for animal. Pet Club can
                  provide you best quality Accessories and Toy for your pet.
                </p>
              </div>
              <div className="card-footer bg-transparent  border-0 mb-2">
                <NavLink
                  to="/services/pet-toy-accessories"
                  className="btn button-defult-hover"
                >
                  Pet Accessories
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
