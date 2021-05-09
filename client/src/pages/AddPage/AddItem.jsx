import React, { useState, useCallback } from "react";
import "./AddItem.css";
import "../Dashboard/Dashboard.css";
import Table from "../../components/Table/Table";
import Searchbox from "../../components/Searchbox/Searchbox";
import Toast from "../../components/Toast/Toast";

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
      <Searchbox searchHit="searchprod_in_stock/" />
      <Table
        tableHead="Add Items to the Stock"
        hit="viewallprods/"
        inputText="Enter Barcode Number to Add"
        inputHit="addprod/"
        callbackVal={myCallBack}
      />
    </div>
  );
};

export default AddItem;
