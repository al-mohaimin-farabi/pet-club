import React, { useEffect } from "react";
import Navigation from "../Shared/Navigation/Navigation";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
