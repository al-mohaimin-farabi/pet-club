import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navigation from "../Shared/Navigation/Navigation";
import style from "./Dashboard.module.css";

const AddToyAccProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [erroMessage, setErroMessage] = useState("");
  const onSubmit = (data) => {
    // setSuccess(false);
    const img = data.img[0];
    if (!img) {
      setSuccess(false);
      setErroMessage("Input Image");
      setError(true);
      return;
    }
    // console.log(img);
    // return;
    const formData = new FormData();
    formData.append("animal", data.animal);
    formData.append("brand", data.brand);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("title", data.title);
    formData.append("img", img);

    // return;

    fetch("http://localhost:5000/petaccAndToy", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, data.insertedId);
        if (data.insertedId) {
          reset();
          setSuccess(true);
          setError(false);
          setErroMessage("");
        }
      })
      .catch((error) => {
        setSuccess(false);
        setErroMessage(error.message);
        setError(true);
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Navigation></Navigation>
      <div className={`${style.add_product} container`}>
        <h2 className="text-main mt-3 text-center mb-3">
          Add Toy & Accessories Product
        </h2>
        <div className=" d-flex justify-content-center">
          {success && (
            <Alert sx={{ my: 3, width: "45%" }} severity="success">
              Product Adding Successful
            </Alert>
          )}
          {error && (
            <Alert sx={{ my: 3, width: "45%" }} severity="error">
              {erroMessage}
            </Alert>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit, { required: true })}>
          <input
            className="form-control px-2"
            placeholder="For Ex: cat"
            {...register("animal", { required: true })}
          />
          <input
            className="form-control px-2"
            placeholder="Title"
            type="text"
            {...register("title", { required: true })}
          />
          <input
            className="form-control px-2"
            placeholder="Title"
            type="file"
            {...register("img", { required: true })}
          />
          <input
            className="form-control px-2"
            placeholder="Price"
            type="text"
            {...register("price", { required: true })}
          />
          <input
            className="form-control px-2"
            placeholder="Stock"
            type="text"
            {...register("stock", { required: true })}
          />

          <button
            className="form-control px-2 mt-3  btn btn-defult"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddToyAccProduct;
