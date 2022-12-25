import React from "react";
import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import TitleBox from "../Shared/Title-box/TitleBox";
import style from "./Home/Home.module.css";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5 },
};

const FoodProductShowCase = () => {
  const { data } = useFetch("http://localhost:5000/petfood");

  return (
    <div className="container mt-4 mb-0">
      <TitleBox title={"Our Most Populer Pet Food"}></TitleBox>
      <div className="row px-2">
        <AliceCarousel
          responsive={responsive}
          autoPlay={true}
          disableButtonsControls={true}
          infinite={true}
          autoPlayInterval={6000}
        >
          {data.slice(2, 13).map((singelData) => (
            <div
              key={singelData._id}
              className={`${style.popular_products} card mt-3 mx-auto`}
            >
              <img
                src={`data:image/*;base64,${singelData?.img}`}
                className="mx-auto mt-1"
                alt="..."
              />
              <div className="card-body m-0 py-0 px-2">
                <h5 className="card-title m-0 mt-1 p-0 text-main">
                  For{" "}
                  <span className="text-secondary">
                    {singelData?.animal.toUpperCase()}
                  </span>
                </h5>
                <p className="card-text m-0 p-0 fs-6">{singelData?.title}</p>
              </div>
              <div className="card-footer bg-transparent border-0 m-0 mb-1 py-0 px-2">
                <span className="fs-6 text-main">৳ {singelData?.price}</span>
              </div>
              <div className="card-footer bg-transparent border-0 m-0 py-0 pb-2 px-2">
                <NavLink
                  to={`/services/pet-food/purchase/${singelData._id}`}
                  className="btn btn-sm btn-defult-opposite"
                >
                  Grab It Now
                </NavLink>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default FoodProductShowCase;
