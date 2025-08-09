import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import TitleBox from "../Shared/Title-box/TitleBox";

const Myorder = () => {
  const { user } = useAuth();
  const [userOrder, setUserData] = useState();
  useEffect(() => {
    async function getData() {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setUserData(data));
    }
    getData();
  }, [user.email]);

  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-3">
        <TitleBox
          title={
            userOrder?.length
              ? "You Have " + userOrder?.length + " Order's"
              : "You Didn't Ordered Anything Yet!"
          }></TitleBox>
        <div className="row mt-4">
          <div className="col-12">
            <ul className="list-group mb-3">
              {userOrder?.map((data) => (
                <Order
                  key={data._id}
                  data={data}
                  orders={userOrder}
                  setOrderData={setUserData}></Order>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorder;

function Order({ data, userOrder, setUserData }) {
  const handleDelete = (id, title) => {
    const confirmation = window.confirm(`Are Sure You Wanna Delete ${title}`);
    if (confirmation) {
      const url = `${process.env.REACT_APP_BACKEND_URL}/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = userOrder.filter((order) => order._id !== id);
            setUserData(remaining);
          }
        });
    } else {
      alert(`Deleting ${title} Aborted`);
    }
  };
  return (
    <>
      <li className="list-group-item ">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mb-2">
                  {data?.selected_service || data?.product_name}
                </h5>

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
                title="Cancle Order"
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
