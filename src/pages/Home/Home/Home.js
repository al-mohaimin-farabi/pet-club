import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import HeroSection from "../HeroSection";
import BlogShowCase from "../BlogShowCase";

const Home = () => {
  return (
    <>
      <header className="header">
        <Navigation></Navigation>
        <HeroSection></HeroSection>
      </header>
      <BlogShowCase></BlogShowCase>
      <Footer></Footer>
    </>
  );
};

export default Home;
