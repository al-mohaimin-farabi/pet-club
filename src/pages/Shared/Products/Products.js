import React from "react";

const Products = (props) => {
  const { img, title, price, animal, discounted, stock, brand } = props.data;

  return (
    <div className="col border-0">
      <div className="card h-100 shadow bg-light border-primary">
        <img src={img} className="card-img-top img-box" alt="..." />
        <div className="card-body py-1">
          <p className="m-0">
            FOR <span className="text-warning">{animal.toUpperCase()}</span>
          </p>
          <h5 className="card-title text-main fw-bold fs-6 m-0 mt-1">
            {title}
          </h5>
        </div>
        <div className="card-footer border-0 bg-transparent py-0 d-flex justify-content-between">
          <p>
            PRICE: <span className="fw-bold text-success">${price}</span>
          </p>
          <p>
            BRAND:
            <span className="fw-bold text-success"> {brand.toUpperCase()}</span>
          </p>
          <p>
            STOCK:{" "}
            {stock < 7 ? (
              <span className="fw-bold text-danger ">
                {stock}
                &#8595;
              </span>
            ) : (
              <span className="fw-bold text-success">{stock}</span>
            )}
          </p>
        </div>
        <div className="card-footer border-0 bg-transparent pt-0 pb-3 d-flex w-100  ">
          <button className="btn w-100 button-defult-hover rounded  px-4 py-1">
            Buy Now&nbsp; <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
