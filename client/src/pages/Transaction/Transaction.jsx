import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBox from "../../components/Searchbox/Searchbox";
import Table from "../../components/Table/Table";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div>
      <Navbar />
      <div className="transaction">
        <div className="dashboard__head">
          <p id="dashboard__header">Your Transactions</p>
          <p id="dashboard__subheader">LIST/SEARCH</p>
        </div>
        <SearchBox />
        <Table hit="viewtransactions/" tableHead="Recent Transactions List" />
      </div>
    </div>
  );
};

export default Transaction;
