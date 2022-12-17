import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const ReviewSlider = () => {
  return (
    <div className="row px-2 mt-4">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        autoPlay={true}
        disableButtonsControls={true}
      >
        <div className="card shadow h-100 mx-2 my-1 border-0">
          <div className="card-body"></div>
          <div className="card-footer bg-transparent border-0"></div>
        </div>
        <div className="card shadow h-100 mx-2 my-1 border-0">
          <div className="card-body"></div>
          <div className="card-footer bg-transparent border-0"></div>
        </div>
        <div className="card shadow h-100 mx-2 my-1 border-0">
          <div className="card-body"></div>
          <div className="card-footer bg-transparent border-0"></div>
        </div>
      </AliceCarousel>
    </div>
  );
};

export default ReviewSlider;
