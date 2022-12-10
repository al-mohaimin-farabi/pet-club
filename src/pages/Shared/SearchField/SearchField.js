import React from "react";

const SearchField = ({ setsearchedText }) => {
  return (
    <div className="messeage-box mt-1 container mb-0">
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
  );
};

export default SearchField;
