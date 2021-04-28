import React from "react";
import "./Return.css";
import "../Dashboard/Dashboard.css";
import Searchbox from "../../components/Searchbox/Searchbox";
import Table from "../../components/Table/Table";

const Return = () => {
  return (
    <div className="returnpage">
      <div className="dashboard__head">
        <p id="dashboard__header">Dipatch Your Items</p>
        <p id="dashboard__subheader">DISPATCH/SEARCH</p>
      </div>
      <Searchbox />
      <Table />
    </div>
  );
};

export default Return;
