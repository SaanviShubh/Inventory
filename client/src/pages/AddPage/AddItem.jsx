import React, { useState, useCallback } from "react";
import "./AddItem.css";
import "../Dashboard/Dashboard.css";
import Table from "../../components/Table/Table";
import Searchbox from "../../components/Searchbox/Searchbox";
import Toast from "../../components/Toast/Toast";
import FilterBox from "../../components/FilterBox/FilterBox";

const AddItem = () => {
  const [val, setVal] = useState([]);

  const myCallBack = useCallback((ss) => {
    setVal(ss);
  }, []);

  return (
    <div className="addpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Add Your Items</p>
        <p id="dashboard__subheader">ADD/LIST</p>
      </div>
      <Searchbox searchData={val} />

      <FilterBox filterType="Product added to stock" />

      <Table
        tableHead="Add Items to the Stock"
        hit="viewtransactions/"
        inputText="Enter Barcode Number to Add"
        inputHit="addprod/"
        callbackVal={myCallBack}
      />
    </div>
  );
};

export default AddItem;
