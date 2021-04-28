import React from "react";
import SearchBox from "../../components/Searchbox/Searchbox";
import Table from "../../components/Table/Table";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div className="transaction">
      <div className="dashboard__head">
        <p id="dashboard__header">Your Transactions</p>
        <p id="dashboard__subheader">LIST/SEARCH</p>
      </div>
      <SearchBox />
      <Table />
    </div>
  );
};

export default Transaction;
