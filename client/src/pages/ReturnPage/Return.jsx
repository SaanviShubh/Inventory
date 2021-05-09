import React, { useState, useCallback } from "react";
import "./Return.css";
import "../Dashboard/Dashboard.css";
import Searchbox from "../../components/Searchbox/Searchbox";
import Table from "../../components/Table/Table";

const Return = () => {
  const [val, setVal] = useState([]);

  const myCallBack = useCallback((ss) => {
    setVal(ss);
  }, []);

  return (
    <div className="returnpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Your Returned Items</p>
        <p id="dashboard__subheader">RECORD/SEARCH</p>
      </div>
      <Searchbox searchData={val} />
      <Table
        tableHead="Record Returned Item"
        inputHit="addreturn/"
        hit="viewretprod/"
        inputText="Enter Barcode Number to Dispatch"
        callbackVal={myCallBack}
      />
    </div>
  );
};

export default Return;
