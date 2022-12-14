import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "#fff",
  border: "1px solid #f0f0f0",
  borderRadius: 1,
  //   boxShadow: 24,
  p: 4,
};
const Update = ({ uri, id, setRerender, rerender }) => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [erroMessage, setErroMessage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function upDateData() {
      await fetch(`http://localhost:5000/${uri}/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    upDateData();
  }, [rerender]);

  const onSubmit = (updateData) => {
    // console.log(updateData.img);

    let img;
    if (updateData.img[0]) {
      img = updateData.img[0];
    } else {
      img = data.img;
    }
    console.log(img);

    // console.log(img);
    // return;
    const formData = new FormData();
    formData.append("animal", updateData.animal);
    formData.append("stock", updateData.stock);
    {
      uri == "petfood" && formData.append("brand", updateData.brand);
    }
    formData.append("price", updateData.price);
    formData.append("title", updateData.title);
    formData.append("img", img);

    // return;

    fetch(`http://localhost:5000/${uri}/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, data.modifiedCount);
        if (data.modifiedCount || data.acknowledged) {
          setRerender(!rerender);
          setSuccess(true);

          setError(false);
          setErroMessage("");
          reset();
        }
      })
      .catch((error) => {
        setSuccess(false);
        setErroMessage(error.message);
        setError(true);
        console.error("Error:", error);
      });
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true), setSuccess(false);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <button className="btn btn-success mx-1" onClick={handleOpen}>
        <i className="fas fa-edit"></i>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="d-flex justify-content-center">
            {success && (
              <Alert sx={{ my: 3, width: "100%" }} severity="success">
                Product Updating Successful
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
              defaultValue={data?.animal}
              className="form-control px-2 my-2"
              placeholder="For Ex: cat"
              {...register("animal", { required: true })}
            />
            <input
              defaultValue={data?.title}
              className="form-control px-2 my-2"
              placeholder="Title"
              type="text"
              {...register("title", { required: true })}
            />
            <input
              className="form-control px-2 my-2"
              placeholder="Title"
              type="file"
              {...register("img", { required: true })}
            />
            {uri == "petfood" && (
              <input
                defaultValue={data?.brand}
                className="form-control px-2 my-2"
                placeholder="Brand"
                {...register("brand", { required: true })}
              />
            )}
            <input
              defaultValue={data?.price}
              className="form-control px-2 my-2"
              placeholder="Price"
              type="text"
              {...register("price", { required: true })}
            />
            <input
              defaultValue={data?.stock}
              className="form-control px-2 my-2"
              placeholder="Stock"
              type="text"
              {...register("stock", { required: true })}
            />

            <button
              className="form-control px-2 my-2 mt-3  btn btn-defult"
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
