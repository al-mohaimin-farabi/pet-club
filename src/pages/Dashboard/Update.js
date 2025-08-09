import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  border: "1px solid #f0f0f0",
  borderRadius: 1,
  p: 4,
};

const Update = ({ uri, id, product, setProductData }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user, admin, tempAdmin } = useAuth();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);

  // Fetch the data for the form on modal open
  const upDateData = async () => {
    setIsLoading(true);
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/${uri}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        reset(data); // Reset form values with fetched data
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (open) {
      upDateData(); // Fetch data only when modal is opened
    }
  }, [open]);

  const onInvalid = (errors) => {
    console.log(errors); // Log the errors object to see its structure
    let errorMessage = "Please fix the following errors:\n";
    Object.keys(errors).forEach((field) => {
      errorMessage += `${field}: ${errors[field]?.message}\n`; // Append error message for each field
    });
    toast.error(errorMessage); // Show the error message with Toast
  };

  const onSubmit = (updateData) => {
    console.log(updateData);

    if (!admin || tempAdmin) {
      toast.error("As a Temp Admin, we are restricting you from doing this");
      return;
    }

    // Check if there is a new image selected by the user
    let img = updateData.img ? updateData.img[0] : data?.img;

    // Function to convert image to base64
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(",")[1]); // Get base64 string
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    // If image is selected, convert to base64
    if (img && img instanceof File) {
      convertToBase64(img)
        .then((base64Img) => {
          img = base64Img; // Set the img to base64 image
          updateProductData(updateData, img); // Proceed with the updated image
        })
        .catch((error) => {
          toast.error("Error converting image to base64");
          console.error(error);
        });
    } else if (!img && data?.img) {
      // If no new image is selected, use existing image (from data)
      img = data.img;
      updateProductData(updateData, img); // Proceed with the existing image
    } else {
      toast.error("Please select a valid image to upload");
    }
  };

  // Function to update product data
  const updateProductData = (updateData, img) => {
    const formData = new FormData(); // Initialize formData here

    // Append other form fields to formData
    formData.append("animal", updateData.animal);
    formData.append("stock", updateData.stock);
    if (uri === "petfood") formData.append("brand", updateData.brand); // Specific to petfood
    formData.append("price", updateData.price);
    formData.append("title", updateData.title);
    formData.append("img", img); // Append the base64 image (either new or existing)

    const email = user?.email; // Get the logged-in user's email
    const url = `${
      process.env.REACT_APP_BACKEND_URL
    }/${uri}/${id}?email=${encodeURIComponent(email)}`;

    const loadingToast = toast.loading("Updating...");

    // Send the PUT request with formData
    fetch(url, { method: "PUT", body: formData })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount || data?.acknowledged) {
          setProductData(
            product.map((item) =>
              // Update product array directly with base64 image
              item._id === id ? { ...item, ...updateData, img } : item
            )
          );
          toast.dismiss(loadingToast);
          toast.success("Product Updated Successfully");
          setOpen(false); // Close the modal
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        toast.error(
          error?.message || "An error occurred while updating the product"
        );
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="btn btn-success mx-1" onClick={handleOpen}>
        <i className="fas fa-edit"></i>
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form
            className={`${isLoading ? "disabled-form" : ""}`}
            onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <input
              defaultValue={data?.animal}
              className="form-control px-2 my-2"
              placeholder="For Ex: cat"
              type="text"
              {...register("animal", { required: "Animal is required" })}
            />
            <input
              defaultValue={data?.title}
              className="form-control px-2 my-2"
              placeholder="Title"
              type="text"
              {...register("title", { required: "Title is required" })}
            />
            <input
              className="form-control px-2 my-2"
              placeholder="Title"
              type="file"
              {...register("img")}
            />
            {uri === "petfood" && (
              <input
                defaultValue={data?.brand}
                className="form-control px-2 my-2"
                placeholder="Brand"
                type="text"
                {...register("brand")}
              />
            )}
            <input
              defaultValue={data?.price}
              className="form-control px-2 my-2"
              placeholder="Price"
              type="text"
              {...register("price", { required: "Price is required" })}
            />
            <input
              defaultValue={data?.stock}
              className="form-control px-2 my-2"
              placeholder="Stock"
              type="text"
              {...register("stock", { required: "Stock is required" })}
            />

            <button
              className="form-control px-2 my-2 mt-3 btn btn-defult"
              type="submit">
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Update;
