import React from "react";
import TitleBox from "../Shared/Title-box/TitleBox";
import style from "../Home/Home/Home.module.css";
import petCare from "../../Images/Icons/petCare.png";
import petFood from "../../Images/Icons/petFood.png";
import petToyAndAcc from "../../Images/Icons/petToy_Acc.png";
import { NavLink } from "react-router-dom";

const servicess = () => {
  return (
    <section className="py-2 my-3">
      <div className="container">
        <TitleBox title={"Our servicess"}></TitleBox>

        <div className="row mt-3 px-2 g-3 mb-1">
          <div className="col-12 col-sm-12 col-lg-4 col-md-6 ">
            <div
              className={`${style.services_card} card h-100 text-center border-0 p-3`}>
              <div className="card-body">
                <div className={`${style.icon_wrapper} bg-main mx-auto `}>
                  <img src={petCare} alt="" className="" />
                </div>
                <h3 className="text-main card-title">Pet Care</h3>
                <p className="card-text m-0">
                  You don't need to worry about your pet when you are at your
                  work or when you are in a tour. We will look after your pet.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 m-0">
                <NavLink
                  to="services/pet-care"
                  className={`${style.services_btn} btn btn-defult`}>
                  Pet Care
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 col-md-6  ">
            <div
              className={`${style.services_card} ${style.even} card h-100 text-center border-0 p-3`}>
              <div className="card-body">
                <div className={`${style.icon_wrapper}  bg-secondary mx-auto `}>
                  <img src={petFood} alt="" className="" />
                </div>
                <h3 className="text-secondary card-title">Pet Food</h3>
                <p className="card-text m-0">
                  If you are woandaring where to find good quality othentic pet
                  food at afordable price, You are at the right place.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 m-0">
                <NavLink
                  to="services/pet-food"
                  className={`${style.services_btn} btn `}>
                  Pet Food
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 col-md-12 ">
            <div
              className={`${style.services_card} card h-100 text-center border-0 p-3`}>
              <div className="card-body">
                <div className={`${style.icon_wrapper} bg-main mx-auto `}>
                  <img src={petToyAndAcc} alt="" className="" />
                </div>
                <h3 className="text-main card-title">Pet Toy & Accessories</h3>
                <p className="card-text m-0">
                  Play is important because it is instinctive and necessary for
                  the mental health of dogs and cats. So we took a initiative to
                  provide Pet Toy & Accessories.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 m-0">
                <NavLink
                  to="services/pet-toy-accessories"
                  className={`${style.services_btn} btn btn-defult `}>
                  Pet Toy & Accessories
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default servicess;
