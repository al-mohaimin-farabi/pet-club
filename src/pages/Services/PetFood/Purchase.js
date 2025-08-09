import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Navigation from "../../Shared/Navigation/Navigation";
import useAuth from "../../../Hooks/useAuth";
import PurchaseForm from "../../Shared/PurchaseForm/PurchaseForm";

const Purchase = () => {
  // const navigate = useNavigate();
  const { user } = useAuth();
  const { foodID } = useParams();
  const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/petfood/${foodID}`);

  // useEffect(() => {
  //   document.title = "Purchase";
  // }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-4">
        <div className="row row-col-1 row-cols-md-2 row-cols-lg-2">
          <div className="col">
            <div className="card  mb-3 w-75 w-sm-100 mx-auto">
              <div className=" text-center rounded-top bg-secondary m-0 ">
                <img
                  src={`data:image/*;base64, ${data?.img}`}
                  className="card-img-top img_box w-50  py-2 rounded-5 m-0"
                  alt="..."
                />
              </div>
              <div className="card-body rounded-bottom bg-theme-gradient">
                <h5 className="card-title text-secondary mb-1 mt-0 p-0 ">
                  {data?.title}
                </h5>
                <p className="m-0 fs-5 text-white">
                  For:{" "}
                  <span className="text-white fs-6">
                    {data?.animal?.toUpperCase()}
                  </span>
                </p>
                <p className="m-0 fs-5 text-white ">
                  {" "}
                  Catagory:{" "}
                  <span className="text-white fs-6">
                    Pet Toy And Accessories
                  </span>
                </p>
                <p className="card-text text-white fs-5 m-0">
                  Price:{" "}
                  <span className="text-white fs-6"> ৳ {data?.price}</span>
                </p>
              </div>
            </div>
          </div>
          <PurchaseForm
            user={user}
            data={data}
            category={"Pet Toy & Accessories"}></PurchaseForm>
        </div>
      </div>
    </>
  );
};

export default Purchase;
