import React from "react";
import { useForm } from "react-hook-form";
import Style from "./Home/Home.module.css";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import useAuth from "../../Hooks/useAuth";

const NewsLatter = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    if (!data.email) {
      toast.error("Please enter your email address.", { icon: "❗" });
      return;
    }

    const subscribing = toast.loading("Subscribing...");

    const templateParams = {
      email: data.email, // User email
      name: user?.displayName || "there", // User name or default to "there"
    };

    // Get the environment variables from .env file
    // const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID; //service_gsglqgj
    // const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; //template_djwx1z5
    // const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; //TNJ1xl_72WLvQdqRJ

    const serviceID = "service_gsglqgj";
    const templateID = "template_djwx1z5";
    const publicKey = "TNJ1xl_72WLvQdqRJ";

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("Success:", response);
        toast.dismiss(subscribing);
        toast.success("Subscribed successfully!");
        reset();
      },
      (error) => {
        console.error("Error:", error);
        toast.dismiss(subscribing);
        toast.error(
          error?.message || "Something went wrong, please try again."
        );
      }
    );
  };

  // const onSubmit = async (data) => {
  //   if (!data.email) {
  //     toast.error("Please enter your email address.", { icon: "❗" });
  //     // toast.dismiss();
  //     return;
  //   }
  //   const subscribing = toast.loading("Subscribing...");

  //   try {
  //     const response = await fetch("/api/subscribe", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: data.email,
  //         name: user?.displayName || "there",
  //       }),
  //     });

  //     if (response.ok) {
  //       toast.dismiss(subscribing);
  //       toast.success("Subscribed successfully!");
  //       reset();
  //     } else {
  //       throw new Error("Subscription failed");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.dismiss(subscribing);
  //     toast.error("Something went wrong, please try again.");
  //   }
  // };

  return (
    <div className={`${Style.NewsLatter} mt-0 mb-5 bg-main`}>
      <div className="container ">
        <div className="NewsLatter_content text-center py-2">
          <h2 className="text-white m-0 fs-2">NewsLatter.</h2>
          <p className="text-secondary mb-1 fw-light">
            Stay up to date with our latest news and products
          </p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12  col-md-5 col-lg-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-0 bg-light border-secondary"
                  placeholder="Email"
                  aria-label="Recipient's Email"
                  aria-describedby="button-addon2"
                  {...register("email")} // Register the email input
                />
                <button
                  className="btn light rounded-0 border-secondary text-white fw-light"
                  type="submit"
                  id="button-addon2">
                  Send <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 text-center  py-2">
            <span className="text-white fw-lighter ">
              *your email is safe with us, we don't spam
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
