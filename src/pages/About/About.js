import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import OurTeam from "./OurTeam";
import DelivaryNetWork from "./DelivaryNetWork";
import target_mission from "../../Images/AboutUs/target-mission.svg";
import style from "./Aboute.module.css";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className={style.banner}>
        <div className="container  p-0 mt-0 mb-3 p-2">
          <h3 className={style.heading}>About US</h3>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 text-center">
              <p className="text-white fs-5 mt-2 w-50 mx-auto ">
                Pet CLub is an online pet shop based in Chittagong providing
                your loving pets with their favourite foods and other
                accessories. We home deliver your pet food so you can receive
                from your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h3 className={style.heading}>Our Mission</h3>
        <div className="row mt-3 gx-5 py-2">
          <div
            className={`col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center bg-main-light py-2 rounded-4 ${style.background_attachment_fixed}`}>
            <img src={target_mission} className="w-50 " alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-justifyed ">
            <p className="text-main fs-5 mt-2 ">
              <span className={style.mission_text}>Our</span> country is getting
              digitalized more than ever. But one sector is still running on the
              old system which is the pet market. People are looking for
              authentic and good quality pet food at a cheaper price. They are
              unable to find it. So we took a step to fill up this gap. Our
              mission is to provide authentic and good quality pet food at a
              cheaper price. We also provide pet care services. Which include
              pet vaccination. Price of our products are very affordable.
            </p>
          </div>
        </div>
      </div>
      <DelivaryNetWork></DelivaryNetWork>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </>
  );
};

export default About;
