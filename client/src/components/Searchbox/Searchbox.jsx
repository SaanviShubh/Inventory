import React from "react";
import "./Searchbox.css";

const Searchbox = () => {
  return (
    <div className="searchbox">
      <p id="searchbox">Searchbox</p>
      <div className="search__bar">
        <i className="fas fa-search"></i>
        <input
          id="search__bar"
          type="text"
          placeholder="Enter SKU Number to search"
        />
      </div>
    </div>
  );
};

export default Searchbox;
