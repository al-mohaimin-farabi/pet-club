import React, { useEffect } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import style from "./OrderSuccess.module.css";

const OrderSuccess = () => {
  useEffect(() => {
    document.title = "Success";
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="container text-center">
        <div className={`${style.card} mt-3 bg-main `}>
          <div className={`${style.card_body} bg-secondary`}>
            <i className="checkmark display-3 fw-bold text-white">✓</i>
          </div>
          <h1 className="text-white">Success</h1>
          <p className="text-white">
            We received your purchase/service request;
            <br /> You Will Recive Your Order Shortly!
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
