import React, { useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import Navigation from "../../Shared/Navigation/Navigation";
import Products from "../../Shared/Products/Products";
import resultNotFound from "../../../Images/cant-find-search-result.gif";
import SearchField from "../../Shared/SearchField/SearchField";

const PetFood = () => {
  document.title = "Pet Food";
  const [searchedText, setsearchedText] = useState("");
  const { data, isLoading, setisLoading } = useFetch("/Data/petFood.json");
  const [displayData, setDisplaydata] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(
      (singledata) =>
        singledata.animal.toLowerCase().includes(searchedText.toLowerCase()) ||
        singledata.title.toLowerCase().includes(searchedText.toLowerCase())
    );
    setDisplaydata(filteredData), setisLoading(false);
  }, [searchedText, data]);

  return (
    <>
      <Navigation></Navigation>
      <SearchField setsearchedText={setsearchedText}></SearchField>
      {isLoading ? (
        <div className="w-100 d-flex justify-content-center  align-items-center">
          <div className="spinner-border text-main" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : displayData == 0 ? (
        <div className="col-12 w-100 text-center">
          <img
            src={resultNotFound}
            alt="cant find your result"
            className="img-fluid"
          />
        </div>
      ) : (
        <section>
          <div className="container">
            <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 mt-0 py-2">
              {displayData.map((data) => (
                <Products key={data.id} data={data}></Products>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PetFood;

{
  /* <section >
<div className="container">
  <div className="messeage-box mt-1">
    <h2 className="text-main mt-2 position-relative">
      We Got The Best Things For You
    </h2>
    <div className="input-group search-box-div mt-4 border-primary rounded-pill px-3">
      <input
        type="text"
        className="form-control border-0 search-box-hover"
        placeholder="Just One Search Away"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        id="searched-text"
        // value={searchedText}
        onChange={(e) => setsearchedText(e.target.value)}
      />

      <button
        className="input-group-text bg-transparent border-0"
        id="search-button"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
  <div
    className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 mt-0 py-4"
    id="show-data"
  >
    {displayData.map((data) => (
      <Products key={data.id} data={data}></Products>
    ))}
  </div>
</div>
</section>  */
}
