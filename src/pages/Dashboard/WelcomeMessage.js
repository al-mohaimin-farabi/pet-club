import React from "react";
import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";
import Navigation from "../Shared/Navigation/Navigation";
import TitleBox from "../Shared/Title-box/TitleBox";

const WelcomeMessage = () => {
  const { user, admin } = useAuth();
  const foodProducts = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/petfood`
  ).data;
  const toyAndAccProducts = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/petaccAndToy`
  ).data;
  const orders = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/orders`
  ).data;

  if (user.email && !admin)
    return (
      <>
        <Navigation></Navigation>
        <div className="container mt-3">
          <TitleBox title={`Dashboard For ${user.displayName}`}></TitleBox>

          <div className="row px-2">
            <p className="card-text mt-4">
              Pet Club provide you amazing dashboard where you can manage your
              order.
              <br /> The process of using it is very easy. Select option from
              side bar and get started.
            </p>
          </div>
        </div>
      </>
    );
  else if (user.email && admin)
    return (
      <>
        <Navigation></Navigation>
        <div className="container mt-3">
          <TitleBox title={`Welcome ${user.displayName}`}></TitleBox>
          <div className="row px-2">
            {" "}
            <p className="card-text mt-2">
              Your <strong>Admin</strong> DashBoard is Ready. Select option from
              the side-bar and go ahead.
            </p>
          </div>
          <div className="row px-2">
            <div className="col-12 col-md-6 my-3 ">
              {" "}
              <div className="card text-white bg-theme-gradient mb-3 shadow">
                <div className="card-header">Pet Food Products Online</div>
                <div className="card-body">
                  <p className="card-title">
                    You Have{" "}
                    <span className="fs-4  text-success">
                      {foodProducts.length}
                    </span>{" "}
                    Pet Food Products Online
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 my-3 ">
              <div className="card text-white bg-success bg-gradient mb-3 shadow">
                <div className="card-header">
                  Pet Toy And Accessories Products Online
                </div>
                <div className="card-body">
                  <p className="card-title">
                    You Have{" "}
                    <span className="fs-4  text-dark">
                      {toyAndAccProducts.length}
                    </span>{" "}
                    Pet Toy And Accessories Product Online
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 offset-3">
              <div className="card text-white bg-dark bg-gradient mb-3 shadow">
                <div className="card-header">Orders</div>
                <div className="card-body">
                  <p className="card-title">
                    You Have{" "}
                    <span className="fs-4  text-secondary">
                      {orders.length}{" "}
                    </span>
                    Orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default WelcomeMessage;
