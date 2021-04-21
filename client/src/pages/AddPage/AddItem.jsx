import React from "react";
import "./AddItem.css";
import "../Dashboard/Dashboard.css";
import Table from "../../components/Table/Table";

const AddItem = () => {
  // useEffect(() => {}, []);

  return (
    <div className="addpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Add Your Items</p>
        <p id="dashboard__subheader">ADD/LIST</p>
      </div>
      <Table />
    </div>
  );
};

export default AddItem;
