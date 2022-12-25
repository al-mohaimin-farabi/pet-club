import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading)
    return (
      <>
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
  if (user.email && admin) return children;
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
