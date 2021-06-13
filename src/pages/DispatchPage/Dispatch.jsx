import React, { useState, useCallback, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import "./Dispatch.css";
import Searchbox from "../../components/Searchbox/Searchbox";
import Table from "../../components/Table/Table";
import FilterBox from "../../components/FilterBox/FilterBox";
import Error from "../ErrorPage/Error";
import { toast } from "react-toastify";

const Dispatch = () => {
  const [val, setVal] = useState([]);

  useEffect(() => {});

  const myCallBack = useCallback((ss) => {
    setVal(ss);
  }, []);

  return (
    <div className="dispatchpage">
      {"token" in localStorage ? (
        <div>
          <div className="dashboard__head">
            <p id="dashboard__header">Dipatch Your Items</p>
            <p id="dashboard__subheader">DISPATCH/SEARCH</p>
          </div>
          <Searchbox searchData={val} />

          <FilterBox filterType="Product Dispatched" />

          <Table
            tableHead="Dispatch Item from Stock"
            inputHit="dispatchprod/"
            inputText="Enter Barcode Number to Dispatch"
            hit="viewdispatchprods/"
            callbackVal={myCallBack}
          />
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Dispatch;
