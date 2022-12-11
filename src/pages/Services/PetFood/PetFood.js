import React, { useLayoutEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import Navigation from "../../Shared/Navigation/Navigation";
import Products from "../../Shared/Products/Products";
import resultNotFound from "../../../Images/cant-find-search-result.gif";
import SearchField from "../../Shared/SearchField/SearchField";

const PetFood = () => {
  const [isLoading, setisLoading] = useState(true);
  const [searchedText, setsearchedText] = useState("");
  const { data } = useFetch("/Data/petFood.json");
  const [displayData, setDisplaydata] = useState([]);

  useLayoutEffect(() => {
    document.title = "Pet Food";
    const filteredData = data.filter(
      (singledata) =>
        singledata.animal.toLowerCase().includes(searchedText.toLowerCase()) ||
        singledata.title.toLowerCase().includes(searchedText.toLowerCase())
    );
    setDisplaydata(filteredData);
    setisLoading(false);
  }, [searchedText, data]);

  return (
    <>
      <Navigation></Navigation>
      <SearchField setsearchedText={setsearchedText}></SearchField>
      {isLoading ? (
        <div className="w-100 d-flex flex-column justify-content-center  align-items-center mt-5">
          <div className="spinner-border text-main" role="status">
            <span className="visually-hidden"></span>
          </div>
          <span className="mt-2 fs-4 text-main">Loading...</span>
        </div>
      ) : (
        <section>
          <div className="container">
            <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 mt-0 py-2">
              {displayData.length >= 1 ? (
                displayData.map((data) => (
                  <Products key={data.id} data={data}></Products>
                ))
              ) : (
                <div className="col-12 w-100 text-center">
                  <img
                    src={resultNotFound}
                    alt="cant find your result"
                    className="img-fluid"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PetFood;
