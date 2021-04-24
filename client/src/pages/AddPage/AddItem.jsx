import React, { useState, useEffect } from "react";
import "./AddItem.css";
import "../Dashboard/Dashboard.css";
import Table from "../../components/Table/Table";
import Searchbox from "../../components/Searchbox/Searchbox";

const AddItem = () => {
  return (
    <div className="addpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Add Your Items</p>
        <p id="dashboard__subheader">ADD/LIST</p>
      </div>

      <Searchbox />

      <Table />
      <Table />
      <Table />
      <Table />
      <Table />
    </div>
  );
};

export default AddItem;
