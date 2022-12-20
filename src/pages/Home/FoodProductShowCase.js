import React from "react";
import AliceCarousel from "react-alice-carousel";
import useFetch from "../../Hooks/useFetch";
import TitleBox from "../Shared/Title-box/TitleBox";
import style from "./Home/Home.module.css";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5 },
};

const FoodProductShowCase = () => {
  const { data } = useFetch("/Data/petFood.json");

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
          {data.slice(2, 12).map((singelData) => (
            <div
              key={singelData.id}
              className={`${style.popular_products} card mt-3 mx-2`}
            >
              <img src={singelData?.img} className="mx-auto mt-1" alt="..." />
              <div className="card-body">
                <h5 className="card-title m-0 p-0 text-main">
                  For{" "}
                  <span className="text-secondary">
                    {singelData?.animal.toUpperCase()}
                  </span>
                </h5>
                <p className="card-text m-0 p-0 fs-6">{singelData?.title}</p>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default FoodProductShowCase;
