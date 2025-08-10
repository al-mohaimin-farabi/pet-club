import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import toast from "react-hot-toast";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const adminRequest = { requester: user.email, email: email };
    const idToken = localStorage.getItem("idToken"); // Get the ID Token from localStorage

    if (!idToken) {
      toast.error("User not authenticated");
      return;
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/admin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`, // Attach the token here
      },
      body: JSON.stringify(adminRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          setEmail("");
          e.target.email.value = "";
        } else {
          setSuccess(false);
          setEmail("");
        }
      })
      .catch((error) => {
        setSuccess(false);
        toast.error("An error occurred. Please try again.");
        console.error("Error:", error);
      });

    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="containet text-center mt-5 ">
        <h3 className="text-main">Make An Admin</h3>
        <div className="d-flex justify-content-center">
          {success && (
            <Alert centered sx={{ my: 3, width: "45%" }} severity="success">
              Made Admin Successfuly
            </Alert>
          )}
        </div>
        <form className="w-50 mt-2 mx-auto" onSubmit={handleAdminSubmit}>
          <input
            placeholder="Enter  email"
            name="email"
            type="email"
            label="Email"
            onBlur={handleOnBlur}
            className="form-control"
          />
          <br />
          <Button
            className="btn-defult"
            sx={{ mt: 0 }}
            type="submit"
            variant="contained">
            Make Admin
          </Button>
        </form>
      </div>
    </>
  );
};

export default MakeAdmin;
