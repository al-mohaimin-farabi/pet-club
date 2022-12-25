import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import paymentImg from "../../Images/bkash-payment.png";
import style from "./PaymentGuide.module.css";
const PaymentGuide = () => {
  return (
    <>
      <Navigation></Navigation>
      <div
        className={`${style.paymentImg_responsiveness} container  d-flex mx-auto justify-content-center `}
      >
        <img className="img-fluid" src={paymentImg} alt="" />
      </div>
    </>
  );
};

export default PaymentGuide;
