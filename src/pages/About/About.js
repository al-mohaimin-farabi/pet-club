import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Slider from "./Slider";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
};

export default About;
