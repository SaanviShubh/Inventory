import React, { useState, useEffect } from "react";
import "./AddItem.css";
import axios from "axios";
import "../Dashboard/Dashboard.css";
import Table from "../../components/Table/Table";
import Searchbox from "../../components/Searchbox/Searchbox";
import Toast from "../../components/Toast/Toast";

const AddItem = () => {
  const [addItem, setItem] = useState(null);

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
