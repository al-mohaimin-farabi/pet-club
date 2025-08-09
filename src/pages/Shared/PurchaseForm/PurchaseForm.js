import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PurchaseForm = ({ user, data, category }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectError, setSelectError] = useState(false);

  const onSubmit = async (orderData) => {
    if (orderData.delivery_city === "Select Delivery City") {
      setSelectError(true);
      return;
    } else {
      setSelectError(false);
    }
    console.log(orderData);

    const confirmation = window.confirm(
      `Are Sure You Wanna Buy ${orderData?.product_name}`
    );
    orderData.product_price = data.price;
    if (confirmation) {
      const param = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderData),
      };
      console.log(orderData);

      const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`, param);
      console.log(request);

      if (request.status === 200) {
        navigate("/orderingSuccess", { state: { from: "Order-Success" } });
        reset();
      }
    } else {
      alert(
        `You Have Cancelled Ordering ${orderData?.product_name}. Redirecting to home page`
      );
      navigate("/");
    }
  };

  return (
    <div className="col py-1">
      <div className="title-box mt-0 mb-4">
        <h2 className="text-main position-relative">
          Please Fill Up This Form
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="w-100 me-1">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              defaultValue={data?.title}
              readOnly
              {...register("product_name", { required: true })}
              type="text"
              name="product_name"
              className="form-control w-100"
              id="productName"
            />
          </div>
          <div className="w-100">
            <label htmlFor="exampleInputProductCatagoty" className="form-label">
              Category
            </label>
            <input
              defaultValue={category}
              readOnly
              {...register("category", { required: true })}
              type="text"
              className="form-control"
              id="exampleInputProductCatagoty"
            />
          </div>
        </div>
        <div className="mb-3 d-flex">
          <div className="w-25 me-1">
            <label htmlFor="exampleInputPrice" className="form-label">
              Price
            </label>
            <input
              defaultValue={data?.price}
              readOnly
              {...register("product_price")}
              type="text"
              className="form-control"
              id="exampleInputPrice"
            />
          </div>
          <div className="w-25 me-1">
            <label htmlFor="exampleInputCity" className="form-label">
              Select City
            </label>
            <select
              {...register("delivery_city", { required: true })}
              className="form-select"
              aria-label="Default select example"
            >
              <option
                defaultValue={"Select Delivery City"}
                value="Select Delivery City"
              >
                Select Delivery City
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Barisal">Barisal</option>
              <option value="Jashore">Jashore</option>
            </select>
            {selectError && (
              <p className="py-2 text-danger ">
                <i className="fas fa-exclamation-triangle ms-1"></i> Please
                Select Delivery City
              </p>
            )}
          </div>
          <div className="w-50">
            <label htmlFor="exampleInputPhoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              {...register("customer_phone_num", {
                required: "Please Input A Valid BD Number",
                pattern: /^\+?[0-9]\d{1,20}$/,
              })}
              type="text"
              className={
                errors?.customer_phone_num ||
                errors?.customer_phone_num?.type === "pattern"
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="exampleInputPhoneNumber"
            />
            {errors?.customer_phone_num?.type === "pattern" ||
              (errors?.customer_phone_num?.message && (
                <p className="py-2 text-danger ">
                  <i className="fas  fa-exclamation-triangle ms-1"></i> Please
                  Input A Valid BD Number
                </p>
              ))}
          </div>
        </div>
        <div className="form-floating mb-3">
          <textarea
            {...register("delivery_details", {
              required: "Please Input Address",
              minLength: 8,
            })}
            className={
              errors?.delivery_details
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Delivery Details"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">Delivery Details</label>
          {errors.delivery_details && (
            <p className="py-2 text-danger ">
              <i className="fas  fa-exclamation-triangle ms-1"></i>{" "}
              {errors.delivery_details?.message}
            </p>
          )}
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
    </div>
  );
};

export default PurchaseForm;
