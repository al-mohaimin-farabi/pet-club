import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import TitleBox from "../Shared/Title-box/TitleBox";

const Manageallproduct = () => {
  const { user } = useAuth();
  const [foodProduct, setFoodProduct] = useState();
  const [toyAndAccProduct, SetToyAndAccProduct] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/petfood`)
      .then((res) => res.json())
      .then((data) => setFoodProduct(data));
    fetch(`http://localhost:5000/petAccAndToy`)
      .then((res) => res.json())
      .then((data) => SetToyAndAccProduct(data));
  }, [user.email]);
  return (
    <>
      <Navigation />
      <div className="container mt-3">
        <div className="row mt-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <TitleBox title={"Pet Food Product"}></TitleBox>
            <small className=" mt-1 mb-0 px-2 text-success fw-bold">
              Total Product {foodProduct?.length}
            </small>
            <ul className="list-group mt-3 mb-3">
              {foodProduct?.map((data) => (
                <Product
                  key={data._id}
                  data={data}
                  product={foodProduct}
                  setProductData={setFoodProduct}
                  uri={"petfood"}
                ></Product>
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <TitleBox title={"Pet Toy & Accessories Product"}>
              <small className=" mt-1 mb-0 text-success fw-bold">
                Totla Product {toyAndAccProduct?.length}
              </small>
              <ul className="list-group mt-3 mb-3">
                {toyAndAccProduct?.map((data) => (
                  <Product
                    key={data._id}
                    data={data}
                    product={toyAndAccProduct}
                    setProductData={SetToyAndAccProduct}
                    uri={"petAccAndToy"}
                  ></Product>
                ))}
              </ul>
            </TitleBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manageallproduct;

function Product({ data, product, setProductData, uri }) {
  const handleDelete = (id) => {
    const confirmation = window.confirm(
      `Are Sure You Wanna Delete ${data.title}`
    );
    if (confirmation) {
      const url = `http://localhost:5000/${uri}/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = product.filter((order) => order._id !== id);
            setProductData(remaining);
          }
        });
    } else {
      alert(`Deleting ${data.title} Aborted`);
    }
  };
  return (
    <>
      <li className="list-group-item ">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="img-fluid"
                src={`data:image/*;base64,${data?.img}`}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 style={{ fontSize: "22px" }} className="card-title mb-2 ">
                  {data?.title}
                </h5>

                <p className="card-text mb-1">
                  For: {data?.animal.toUpperCase()}
                </p>
                <p className="card-text mb-1">
                  Price: ৳{data?.product_price || data?.price}
                </p>
                <p className="card-text mb-1">Stock: {data?.stock}</p>
                {data?.brand && (
                  <p className="card-text mb-1">Brand: {data?.brand}</p>
                )}
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
              <button
                title="Remove Product"
                onClick={() =>
                  handleDelete(
                    data._id,
                    data?.selected_service || data?.product_name
                  )
                }
                className="btn btn-outline-danger"
              >
                <i className="fas fa-trash"></i>
              </button>
              {/* <button
                title="Remove Product"
                onClick={() => handleDelete(data?._id)}
                className="btn btn-outline-success mx-2"
              >
                <i className="fas fa-edit"></i>
              </button> */}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}