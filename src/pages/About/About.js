import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slider = (
  <AwesomeSlider>
    <div className="text-white fw-bolder bg-success p-5">1</div>
    <div className="text-white fw-bolder bg-success p-5">2</div>
    <div className="text-white fw-bolder bg-success p-5">3</div>
    <div className="text-white fw-bolder bg-success p-5">4</div>
  </AwesomeSlider>
);

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      {slider}
      <Footer></Footer>
    </>
  );
};

export default About;
