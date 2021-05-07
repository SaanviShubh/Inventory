import React, { useState } from "react";
import "./Searchbox.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();

const Searchbox = ({ searchHit }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const SearchItem = () => {
    if (searchInput === "") {
      toast.error("Empty Searchbox");
    } else {
      const input = searchInput;

      axios
        .post(process.env.REACT_APP_URL + `/${searchHit}`, { input })
        .then((res) => {
          console.log(res.data);
          console.log(res.data.color);
          // setItemColor(res.data.color);
          {
            res.data.Error
              ? toast.error(res.data.Error)
              : setSearchResult(res.data);
          }
        });
    }
  };

  const EraseSearch = () => {
    setSearchInput("");
    setSearchResult([]);
  };

  return (
    <div className="searchbox">
      <p id="searchbox">Searchbox</p>
      <div className="search__bar">
        <input
          id="search__bar"
          type="text"
          placeholder="Enter Barcode Number to search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <i className="fas fa-search" onClick={SearchItem}></i>
        <i class="fas fa-times" onClick={EraseSearch}></i>
      </div>
      <div className="search_result">
        {[...searchResult].map((qq) => (
          <div class="search_result_table">
            <div class="search_result_table_cell">{qq.model_name}</div>
            <div class="search_result_table_cell">{qq.Article_no}</div>
            <div class="search_result_table_cell">{qq.color}</div>
            <div class="search_result_table_cell">{qq.size}</div>
            <div class="search_result_table_cell">{qq.cost_price}</div>
            <div class="search_result_table_cell">{qq.selling_price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchbox;
