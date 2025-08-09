import React from "react";
import ScrollToTop from "react-scroll-to-top";
const GoToTop = () => {
  return (
    <>
      <ScrollToTop
        style={{ width: "45px", height: "45px" }}
        className="text-main bg-secondary d-flex justify-content-center align-items-center"
        component={<i className="fa-regular fa-circle-up fs-4"></i>}
        title="Scroll TO Top"
        smooth
        top="700"
      />
    </>
  );
};

export default GoToTop;
