import React, { useState, useCallback } from "react";
import "../Dashboard/Dashboard.css";
import "./Dispatch.css";
import Searchbox from "../../components/Searchbox/Searchbox";
import Table from "../../components/Table/Table";

const Dispatch = () => {
  const [val, setVal] = useState([]);

  const myCallBack = useCallback((ss) => {
    setVal(ss);
  }, []);

  return (
    <div className="dispatchpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Dipatch Your Items</p>
        <p id="dashboard__subheader">DISPATCH/SEARCH</p>
      </div>
      <Searchbox searchData={val} />
      <Table
        tableHead="Dispatch Item from Stock"
        inputHit="dispatchprod/"
        inputText="Enter Barcode Number to Dispatch"
        hit="viewdispatchprods/"
        callbackVal={myCallBack}
      />
      {/* {[...val].map((q) => (
        <div>{q.Barcode}</div>
      ))} */}
    </div>
  );
};

export default Dispatch;
