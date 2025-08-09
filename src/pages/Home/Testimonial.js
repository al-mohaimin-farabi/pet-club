import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import userOne from "../../Images/UserReviewPhoto/ThTanmoy.jpg";
import userTwo from "../../Images/UserReviewPhoto/AlFaysal.jpg";
import userThree from "../../Images/UserReviewPhoto/kazi.jpg";
import userFour from "../../Images/UserReviewPhoto/sharmin.jpg";
import style from "./Home/Home.module.css";
import TitleBox from "../Shared/Title-box/TitleBox";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Testimonial = () => {
  return (
    <div className="container my-4">
      <TitleBox title={"Happy Clients & Feedbacks"}></TitleBox>
      <div className="row px-2 mt-4">
        <AliceCarousel
          responsive={responsive}
          autoPlay={true}
          disableButtonsControls={true}
          infinite={true}
          autoPlayInterval={3000}
        >
          <div className={`${style.review_card} card h-100 mx-2 my-1 border-0`}>
            <div className={style.quate}>
              <i className="fa-solid fa-quote-right text-secondary"></i>
            </div>
            <div className="card-body text-center p-0 h-[60px]">
              <p className="card-text text-main mb-0 py-1 px-1 mt-1">
                More I say about them that will be less. They have good pet care
                service.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 d-flex justify-content-center align-items-center  ">
              <img className={`${style.userIcon} me-2`} src={userOne} alt="" />
              <div className={style.user_data}>
                <p className="text-secondary mb-0">TH Tanmoy</p>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
              </div>
            </div>
          </div>
          <div className={`${style.review_card} card h-100 mx-2 my-1 border-0`}>
            <div className={style.quate}>
              <i className="fa-solid fa-quote-right text-secondary"></i>
            </div>
            <div className="card-body text-center p-0 h-[60px]">
              <p className="card-text text-main mb-0 py-1 px-1 mt-1">
                I am realy happy with there product. They provide Othentic
                product. You can trust them.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 d-flex justify-content-center align-items-center  ">
              <img className={`${style.userIcon} me-2`} src={userTwo} alt="" />
              <div className={style.user_data}>
                <p className="text-secondary mb-0">Al Faysal</p>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>
              </div>
            </div>
          </div>
          <div className={`${style.review_card} card h-100 mx-2 my-1 border-0`}>
            <div className={style.quate}>
              <i className="fa-solid fa-quote-right text-secondary"></i>
            </div>
            <div className="card-body text-center p-0 h-[60px]">
              <p className="card-text text-main mb-0 py-1 px-1 mt-1">
                I am happy with their product. I will suggest everyone to buy
                their product.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 d-flex justify-content-center align-items-center  ">
              <img
                className={`${style.userIcon} me-2`}
                src={userThree}
                alt=""
              />
              <div className={style.user_data}>
                <p className="text-secondary mb-0">Kazi Moinul Ahsan</p>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>
              </div>
            </div>
          </div>
          <div className={`${style.review_card} card h-100 mx-2 my-1 border-0`}>
            <div className={style.quate}>
              <i className="fa-solid fa-quote-right text-secondary"></i>
            </div>
            <div className="card-body text-center p-0 h-[60px]">
              <p className="card-text text-main mb-0 py-1 px-1 mt-1">
                They provide good quality pet food at much cheaper than other
                places.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 d-flex justify-content-center align-items-center  ">
              <img className={`${style.userIcon} me-2`} src={userFour} alt="" />
              <div className={style.user_data}>
                <p className="text-secondary mb-0">Shama Nishat Sharmin</p>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-regular fa-star text-warning"></i>
              </div>
            </div>
          </div>
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
