import React from "react";
import "../Dashboard/Dashboard.css";
import "./Dispatch.css";
import Searchbox from "../../components/Searchbox/Searchbox";
import Table from "../../components/Table/Table";

const Dispatch = () => {
  return (
    <div className="dispatchpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Dipatch Your Items</p>
        <p id="dashboard__subheader">DISPATCH/SEARCH</p>
      </div>
      <Searchbox />
      <Table
        tableHead="Dispatch Item from Stock"
        inputHit="dispatchprod/"
        inputText="Enter Barcode Number to Dispatch"
        hit="viewdispatchprods/"
      />
    </div>
  );
};

export default Dispatch;
