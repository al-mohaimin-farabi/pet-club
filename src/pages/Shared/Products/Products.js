import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Product.module.css";

const Products = ({ data, from }) => {
  const { _id, img, title, price, animal, stock } = data;

  return (
    <div className={`col ${style.card_hover} `}>
      <div className="card h-100 border-0 shadow">
        <div className={`${style.img_box} text-center p-2`}>
          <img
            lazyload="ttrue"
            src={`data:image/*;base64,${img}`}
            className="rounded"
            alt=""
          />
        </div>
        <div className="card-body px-3 py-0 m-0 mt-1">
          <h2 className={`${style.title} text-main`}>{title}</h2>
        </div>
        <div className="card-footer border-0 bg-transparent px-3 d-flex justify-content-between py-1">
          <p className="text-main m-0 p-0 fw-normal">
            Price: <span className="fs-6">৳ {price}</span>
          </p>
          <p className="text-main m-0 p-0 fw-normal">
            For: {animal.toUpperCase()}
          </p>
          <p className="text-main m-0 p-0 fw-normal">Stock: {stock}</p>
        </div>
        <div className="card-footer border-0 bg-transparent px-3 mb-1 mt-0 pt-1">
          {from == "PetFood" ? (
            <NavLink
              to={`/services/pet-food/purchase/${_id}`}
              className="btn-defult btn w-100 fw-light"
            >
              Buy Now <i className="fas fa-cart-plus"></i>
            </NavLink>
          ) : (
            from == "PetAcc" && (
              <NavLink
                to={`/services/pet-toy-accessories/purchase/${_id}`}
                className="btn-defult btn w-100 fw-light"
              >
                Buy Now <i className="fas fa-cart-plus"></i>
              </NavLink>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
