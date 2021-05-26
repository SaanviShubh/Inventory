import React, { useState } from "react";
import "./Searchbox.css";
import axios from "axios";
import "../Table/Table.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();

const Searchbox = ({ searchData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const SearchItem = () => {
    if (searchInput === "") {
      toast.error("Empty Searchbox");
    } else {
      setSearchResult(searchData);
      console.log(searchResult);
    }
  };

  const EraseSearch = () => {
    setSearchInput("");
    setSearchResult([]);
  };

  const tableUrl = window.location.href;

  return (
    <div className="searchbox">
      <p id="searchbox">Searchbox</p>
      <div className="search__bar">
        <input
          id="search__bar"
          type="text"
          placeholder="Enter Barcode Number to search"
          value={searchInput}
          autoComplete="off"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <i className="fas fa-search" onClick={SearchItem}></i>
        <i class="fas fa-times" onClick={EraseSearch}></i>
      </div>
      <div className="search_result">
        {[...searchResult]

          .filter((ss) => ss.Barcode === searchInput)
          .map((filtered) => (
            <div className="search_body">
              <div className="search_result_table">
                <div class="search_result_table_head">Barcode</div>
                <div class="search_result_table_head">Date</div>
                <div class="search_result_table_head">Action</div>
              </div>
              <div className="search_result_table">
                <div class="search_result_table_cell">{filtered.Barcode}</div>
                <div class="search_result_table_cell">{filtered.Date}</div>
                <div class="search_result_table_cell">
                  {tableUrl === "http://localhost:3000/" ? (
                    <span
                      className={
                        filtered.action === "Product added to stock"
                          ? "action_sold"
                          : filtered.action === "Product Dispatched"
                          ? "action_dispatch"
                          : "action_return"
                      }
                    >
                      {filtered.action === "Product added to stock"
                        ? "Added"
                        : filtered.action === "Product Dispatched"
                        ? "Dispatched"
                        : "Returned"}
                    </span>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searchbox;
