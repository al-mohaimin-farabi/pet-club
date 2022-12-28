import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const SecureOrderSuccessRoute = ({ children }) => {
  // console.log("from SecureOrderSuccessRoute");

  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading)
    return (
      <>
        <Navigation></Navigation>
        <div className="w-100 text-center mt-5">
          <div
            className="spinner-grow text-secondary text-center"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  if (user.email && location?.state?.from == "Order-Success") return children;
  return <Navigate to="/" state={{ from: location }} />;
};

export default SecureOrderSuccessRoute;
