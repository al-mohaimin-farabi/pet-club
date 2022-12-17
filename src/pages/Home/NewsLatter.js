import React from "react";
import Style from "./NewsLatter.module.css";

const NewsLatter = () => {
  return (
    <div className={`${Style.NewsLatter} my-4 bg-main`}>
      <div className="container ">
        <div className="NewsLatter_content text-center py-2">
          <h2 className="text-white m-0 fs-2">NewsLatter.</h2>
          <p className="text-success mb-1 fw-light">
            Stay up to date with our latest news and products
          </p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12  col-md-5 col-lg-5 ">
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-0 bg-light border-secondary "
                placeholder="Email"
                aria-label="Recipient's Email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn light rounded-0 border-secondary text-white fw-light"
                type="button"
                id="button-addon2"
              >
                Send <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div className="col-12 text-center  py-2">
            <span className="text-muted ">
              *your email is safe with us, we don't spam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
