import React, { useEffect, useLayoutEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import TitleBox from "../Shared/Title-box/TitleBox";
import toast from "react-hot-toast";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Allorder = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    async function getData() {
      await fetch(`${BACKEND_URL}/orders`)
        .then((res) => res.json())
        .then((data) => setAllOrders(data));
    }
    getData();
  }, []);

  return (
    <>
      {/* <Navigation></Navigation> */}
      <div className="container mt-3">
        <TitleBox
          title={
            allOrders?.length
              ? "You Have " + allOrders?.length + " Order's"
              : "You Didn't Ordered Anything Yet!"
          }></TitleBox>
        <div className="row mt-4">
          <div className="col-12">
            <ul className="list-group mb-3">
              {allOrders?.map((data) => (
                <Order
                  key={data._id}
                  data={data}
                  orders={allOrders}
                  setOrderData={setAllOrders}></Order>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allorder;

function Order({ data, orders, setOrderData }) {
  const handleDelete = (id, title) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete ${title}?`
    );
    if (confirmation) {
      const url = `${BACKEND_URL}/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders?.filter((order) => order._id !== id);
            setOrderData(remaining);
            toast.success(`Order has been deleted successfully!`);
          } else {
            toast.error("Failed to delete the order. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error deleting order:", error);
          toast.error(
            error?.message || "An error occurred while deleting the order."
          );
        });
    } else {
      toast.info(`Deleting ${title} was aborted.`);
      toast(`Deleting ${title} was aborted.`, {
        icon: "❌",
      });
    }
  };

  return (
    <>
      <li className="list-group-item">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mb-2">
                  {data?.selected_service || data?.product_name}
                </h5>

                <p className="card-text mb-1">
                  Customer Name: {data?.customer_name}
                </p>
                <p className="card-text mb-1">Customer Email: {data?.email}</p>
                <p className="card-text mb-1">
                  Category: {data?.Service_Category || data?.category}
                </p>
                <p className="card-text mb-1">
                  Price: ৳{data?.product_price || data?.price}
                </p>
                {data?.delivery_city && (
                  <p className="card-text mb-1">
                    Delivery City: {data?.delivery_city}
                  </p>
                )}
                {data?.delivery_details && (
                  <p className="card-text mb-1">
                    Delivery Details: {data?.delivery_details}
                  </p>
                )}
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <button
                title="Cancel Order"
                onClick={() =>
                  handleDelete(
                    data._id,
                    data?.selected_service || data?.product_name
                  )
                }
                className="btn btn-outline-danger mx-2">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
