import React from "react";
import style from "./Product.module.css";
const Products = ({ data }) => {
  const { img, title, price, animal, stock, brand } = data;

  return (
    <div className={`col ${style.card_hover} `}>
      <div className="card h-100 border-0 shadow">
        <div className={`${style.img_box} text-center p-2`}>
          <img src={img} className="rounded" alt="" />
        </div>
        <div className="card-body px-3 py-0 m-0 mt-1">
          <h2 className={`${style.title} text-main`}>{title}</h2>
        </div>
        <div className="card-footer border-0 bg-transparent px-3 d-flex justify-content-between">
          <p className="text-main m-0 fw-normal">
            Price: <span className="fs-6">৳{price}</span>
          </p>
          <p className="text-main m-0 fw-normal">For: {animal.toUpperCase()}</p>
          <p className="text-main m-0 fw-normal">Stock: {stock}</p>
        </div>
        <div className="card-footer border-0 bg-transparent px-3 mb-1">
          <button className="btn w-100 button-defult-hover fw-light">
            Buy Now <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
