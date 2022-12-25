import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import Navigation from "../../Shared/Navigation/Navigation";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import PurchaseForm from "../../Shared/PurchaseForm/PurchaseForm";

const Purchase = () => {
  // const navigate = useNavigate();
  const { user } = useAuth();
  const { foodID } = useParams();
  const { data } = useFetch(`http://localhost:5000/petfood/${foodID}`);

  useEffect(() => {
    document.title = "Purchase";
  }, [foodID, data]);

  return (
    <>
      <Navigation></Navigation>
      <div className="container mt-4">
        <div className="row row-col-1 row-cols-md-2 row-cols-lg-2">
          <div className="col">
            <div className="card  mb-3 w-75 w-sm-100 mx-auto">
              <div className=" text-center rounded-top bg-secondary m-0">
                <img
                  src={`data:image/*;base64, ${data?.img}`}
                  className="card-img-top w-50 img_box  py-2 rounded-5 m-0"
                  alt="..."
                />
              </div>
              <div className="card-body rounded-bottom bg-main-linear-gradient">
                <h5 className="card-title text-main mb-1 mt-0 p-0 ">
                  {data?.title}
                </h5>
                <p className="m-0 fs-5 text-white">
                  For:{" "}
                  <span className="text-secondary">
                    {data?.animal?.toUpperCase()}
                  </span>
                </p>
                <p className="m-0 fs-5 text-white">
                  {" "}
                  Catagory: <span className="text-secondary">Pet Food</span>
                </p>
                <p className="card-text text-white fs-5 m-0">
                  Price:{" "}
                  <span className="text-secondary"> ৳ {data?.price}</span>
                </p>
              </div>
            </div>
          </div>
          <PurchaseForm
            user={user}
            data={data}
            category={"Pet Food"}
          ></PurchaseForm>
        </div>
      </div>
    </>
  );
};

export default Purchase;
