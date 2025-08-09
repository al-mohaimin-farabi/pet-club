import React, { useEffect, useLayoutEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import Navigation from "../../Shared/Navigation/Navigation";
import Products from "../../Shared/Products/Products";
import resultNotFound from "../../../Images/cant-find-search-result.gif";
import SearchField from "../../Shared/SearchField/SearchField";
import Footer from "../../Shared/Footer/Footer";
import Skeleton from "../../Shared/Skeleton/Skeleton";

const PetAccessories = () => {
  const [searchedText, setsearchedText] = useState("");
  const { data, isLoading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/petAccAndToy`);
  const [displayData, setDisplaydata] = useState([]);

  useEffect(() => {
    // document.title = "Pet Toy And Accessories";
    const filteredData = data.filter(
      (singledata) =>
        singledata.animal.toLowerCase().includes(searchedText.toLowerCase()) ||
        singledata.title.toLowerCase().includes(searchedText.toLowerCase())
    );
    setDisplaydata(filteredData);
  }, [searchedText, data]);
  return (
    <>
      <Navigation></Navigation>
      <SearchField
        searchedText={searchedText}
        setsearchedText={setsearchedText}
      ></SearchField>

      {isLoading ? (
        <div className="container mb-3">
          <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 mt-0 py-2">
            {[...Array(12)].map((elementInArray, index) => (
              <div key={index} className="col">
                <Skeleton></Skeleton>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <section>
          <div className="container mb-3">
            <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 mt-0 py-2">
              {displayData.length >= 1 ? (
                displayData.map((data) => (
                  <Products key={data._id} data={data} from="PetAcc"></Products>
                ))
              ) : (
                <div className="col-12 w-100 text-center">
                  {searchedText.length >= 1 && displayData.length == 0 && (
                    <img
                      src={resultNotFound}
                      alt="cant find your result"
                      className="img-fluid"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
          <Footer></Footer>
        </section>
      )}
    </>
  );
};

export default PetAccessories;
