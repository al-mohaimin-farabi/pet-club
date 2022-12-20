import React from "react";
import TitleBox from "../Title-box/TitleBox";

const SearchField = ({ setsearchedText }) => {
  return (
    <div className="mt-3 container mb-0">
      <TitleBox title={"We Got The Best Things For You"}></TitleBox>
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
  );
};

export default SearchField;
