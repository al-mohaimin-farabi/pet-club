import React, { useEffect } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import HeroSection from "../HeroSection";
import BlogShowCase from "../BlogShowCase";
import Services from "../../Services/ServiceShowCase";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <header className="header">
        <Navigation></Navigation>
        <HeroSection></HeroSection>
      </header>
      <Services></Services>
      <BlogShowCase></BlogShowCase>
      <Footer></Footer>
    </>
  );
};

export default Home;
