import React from "react";
import TitleBox from "../Shared/Title-box/TitleBox";
import ReviewSlider from "./ReviewSlider";

const UserReview = () => {
  return (
    <div className="container my-4">
      <TitleBox title={"Happy Clients & Feedbacks"}></TitleBox>
      <ReviewSlider></ReviewSlider>
    </div>
  );
};

export default UserReview;
