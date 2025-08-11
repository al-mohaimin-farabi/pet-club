import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import TitleBox from "../Shared/Title-box/TitleBox";
import Update from "./Update";
import toast from "react-hot-toast";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Manageallproduct = () => {
  const [foodProduct, setFoodProduct] = useState([]);
  const [toyAndAccProduct, SetToyAndAccProduct] = useState([]);

  const [isPetFoodLoading, setIsPetFoodLoading] = useState(false);
  const [isPetAccAndToyLoading, setIsPetAccAndToyLoading] = useState(false);

  const fetchData = async (endpoint, setData, setLoading) => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/${endpoint}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(`Error fetching data from ${endpoint}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("petfood", setFoodProduct, setIsPetFoodLoading);
    fetchData("petAccAndToy", SetToyAndAccProduct, setIsPetAccAndToyLoading);
  }, []);

  // const handleUpdate = (id, updatedData) => {};

  return (
    <>
      {/* <Navigation /> */}
      <div className="container mt-3">
        <div className="row mt-4">
          {isPetFoodLoading && isPetAccAndToyLoading ? (
            <div className="w-100 text-center mt-5">
              <div
                className="spinner-grow text-secondary text-center"
                role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <TitleBox title={"Pet Food Product"}></TitleBox>
                <small className=" mt-1 mb-0 px-2 text-success fw-bold">
                  Total Product {foodProduct?.length}
                </small>
                {isPetFoodLoading ? (
                  <div className="w-100 text-center mt-5">
                    <div
                      className="spinner-grow text-secondary text-center"
                      role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <ul className="list-group mt-3 mb-3">
                    {foodProduct?.map((data) => (
                      <Product
                        product={foodProduct}
                        setProductData={setFoodProduct}
                        key={data._id}
                        data={data}
                        uri={"petfood"}></Product>
                    ))}
                  </ul>
                )}
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <TitleBox title={"Pet Toy & Accessories Product"}>
                  <small className=" mt-1 mb-0 text-success fw-bold">
                    Total Product {toyAndAccProduct?.length}
                  </small>
                  {isPetAccAndToyLoading ? (
                    <div className="w-100 text-center mt-5">
                      <div
                        className="spinner-grow text-secondary text-center"
                        role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <ul className="list-group mt-3 mb-3">
                      {toyAndAccProduct?.map((data) => (
                        <Product
                          product={toyAndAccProduct}
                          setProductData={SetToyAndAccProduct}
                          key={data._id}
                          data={data}
                          uri={"petAccAndToy"}></Product>
                      ))}
                    </ul>
                  )}
                </TitleBox>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Manageallproduct;

function Product({ product, setProductData, data, uri }) {
  const { user, admin, tempAdmin } = useAuth();

  const handleDelete = (id) => {
    if (!admin || tempAdmin) {
      toast.error("As a Temp Admin You Are Not Authorized To Delete Product");
      return;
    }
    const confirmation = window.confirm(
      `Are Sure You Wanna Delete ${data.title}`
    );
    if (confirmation) {
      const url = `${backendUrl}/${uri}/${id}?email=${encodeURIComponent(
        user?.email
      )}`; // Send email as query param

      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 403) {
            return res.json().then((data) => {
              toast.error(data.message);
            });
          }
          return res.json();
        })
        .then((data) => {
          if (data?.deletedCount) {
            const remaining = product.filter((order) => order._id !== id);
            setProductData(remaining);
            toast.success("Product Deleted Successfully");
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          toast.error(
            error?.message || "An error occurred while deleting the product."
          );
        });
    } else {
      alert(`Deleting ${data.title} Aborted`);
    }
  };

  return (
    <div>
      <li className="list-group-item ">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4 ">
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
                className="btn btn-outline-danger">
                <i className="fas fa-trash"></i>
              </button>

              <Update
                product={product}
                setProductData={setProductData}
                uri={uri}
                id={data._id}></Update>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
