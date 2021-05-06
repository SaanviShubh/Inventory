import React, { useState, useEffect } from "react";
import "./AddItem.css";
import axios from "axios";
import "../Dashboard/Dashboard.css";
import Table from "../../components/Table/Table";
import Searchbox from "../../components/Searchbox/Searchbox";
import Toast from "../../components/Toast/Toast";

const AddItem = () => {
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/stockmanagement/viewallprods/")
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, []);

  return (
    <div className="addpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Add Your Items</p>
        <p id="dashboard__subheader">ADD/LIST</p>
      </div>
      <Searchbox />
      <Table />
    </div>
  );
};

export default AddItem;
