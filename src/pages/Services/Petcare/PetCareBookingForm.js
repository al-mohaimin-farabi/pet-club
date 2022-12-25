import { data } from "autoprefixer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PetCareBookingForm = ({ user }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [selectError, setSelectError] = useState(false);

  const onSubmit = async (data) => {
    if (data.selected_service === "Select Service") {
      setSelectError(true);
      return;
    } else {
      setSelectError(false);
    }

    const confirmation = window.confirm(
      `Are Sure You Wanna Book ${data?.selected_service} Service `
    );

    if (confirmation) {
      const param = {
        method: "Post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const request = await fetch("http://localhost:5000/orders", param);
      console.log(request);

      if (request.status === 200) {
        navigate("/orderingSuccess", { state: { from: "Order-Success" } });
        reset();
      }
    } else {
      alert(
        `You Have Cancelled Booking ${data?.selected_service}. Redirecting to home page`
      );
      navigate("/");
    }
  };

  return (
    <form className="px-2 mt-3 " onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 d-flex justify-content-evenly align-items-center">
        <div className="w-100 me-1 ">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            defaultValue={user.displayName}
            readOnly
            {...register("customer_name", { required: true })}
            type="text"
            className="form-control w-100"
            id="exampleInputName"
          />
        </div>
        <div className="w-100">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            defaultValue={user.email}
            readOnly
            {...register("email", { required: true })}
            type="email"
            className="form-control w-100 "
            id="exampleInputEmail1"
          />
        </div>
      </div>
      <div className="mb-3 d-flex">
        <div className="w-50 me-1">
          <label htmlFor="exampleInputCity" className="form-label">
            Select Service
          </label>
          <select
            {...register("selected_service", {
              required: "Please Select A Service",
            })}
            className={selectError ? "form-select is-invalid" : "form-select"}
            aria-label="Default select example"
          >
            <option defaultValue={"Select Service"} value="Select Service">
              Select Service
            </option>
            <option value="Puppy Sitting">Puppy Sitting</option>
            <option value="Medical Administration">
              Medical Administration
            </option>
            <option value="Dog Walking">Dog Walking</option>
          </select>
          {selectError && (
            <p className="py-2 text-danger ">
              <i className="fas fa-exclamation-triangle ms-1"></i> Please Select
              A service
            </p>
          )}
        </div>
        <div className="w-25 me-1">
          <label htmlFor="exampleInputName" className="form-label">
            Service Category
          </label>
          <input
            defaultValue={"Pet Care"}
            readOnly
            {...register("Service_Category", { required: true })}
            type="text"
            className="form-control w-100"
            id="exampleInputName"
          />
        </div>
        <div className="w-25">
          <label htmlFor="exampleInputName" className="form-label">
            Price
          </label>
          <input
            defaultValue={"500"}
            readOnly
            {...register("price", { required: true })}
            type="text"
            className="form-control w-100"
            id="exampleInputName"
          />
        </div>
      </div>

      <div className="form-controle mb-3">
        <label htmlFor="exampleBkashTrxID" className="form-label">
          BKash Transaction ID
        </label>
        <input
          {...register("bkash_TRxID", {
            required: "Bkash TRxID Must Be Inputed",
          })}
          type="text"
          className={
            errors?.bkash_TRxID ? "form-control is-invalid" : "form-control"
          }
          id="exampleBkashTrxID"
        />

        {errors.bkash_TRxID && (
          <p className="py-2 text-danger ">
            {" "}
            <i className="fas  fa-exclamation-triangle ms-1"></i>{" "}
            {errors.bkash_TRxID?.message}{" "}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-defult fs-6 px-5 me-2">
        ORDER
      </button>
      <NavLink
        to="/payment-guide"
        className="btn btn-defult-opposite text-warning fs-6 px-5 "
        title="How To Pay?"
      >
        How To Pay <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
      </NavLink>
    </form>
  );
};

export default PetCareBookingForm;
