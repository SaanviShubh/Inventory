import React, { useCallback, useState } from "react";
import "./FilterBox.css";
import Calender from "../../components/Calender/Calender";
import { toast } from "react-toastify";

const FilterBox = ({ filterType }) => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [clearBtn, setClearBtn] = useState(false);

  const myCallback = useCallback((ss, qq) => {
    if (qq === null) {
      toast.info("Not Found");
    } else {
      setFilteredArray(qq);
    }
    setClearBtn(true);
  });

  //Hanldes Clearing of filtered Array(Cross Button)
  const clearFilteredArray = () => {
    setFilteredArray([]);
    setClearBtn(false);
  };

  return (
    <div className="filter_box">
      <div className="filter_cal">
        <Calender filterCallback={myCallback} />
        {clearBtn ? (
          <i class="fas fa-times fa-lg" onClick={clearFilteredArray}></i>
        ) : null}
      </div>
      {/* Css recieving from SearchBox css */}
      <div className="search_result_table">
        <div class="search_result_table_head">Barcode</div>
        <div class="search_result_table_head">Date</div>
        <div class="search_result_table_head">Cost Price</div>
        <div class="search_result_table_head">Selling Price</div>
      </div>
      {[...filteredArray].map((filter) => (
        <div>
          <div className="search_result_table">
            {filter.action === filterType ? (
              <div>
                <div class="search_result_table_cell">{filter.Barcode}</div>
                <div class="search_result_table_cell">{filter.Date}</div>
                <div class="search_result_table_cell">{filter.cost_price}</div>
                <div class="search_result_table_cell">{filter.sell_price}</div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterBox;
