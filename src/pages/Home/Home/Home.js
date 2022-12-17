import React, { useEffect } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header";
import BlogShowCase from "../BlogShowCase";
import Services from "../../Services/ServiceShowCase";
import Faq from "../Faq";
import NewsLatter from "../NewsLatter";
import UserReview from "../UserReview";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      {/* <Services></Services> */}
      {/* <BlogShowCase></BlogShowCase> */}
      <UserReview></UserReview>
      <NewsLatter></NewsLatter>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
};

export default Home;
