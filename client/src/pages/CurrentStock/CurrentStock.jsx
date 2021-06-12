import React, { useCallback } from "react";
import "./CurrentStock.css";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../../components/Table/Table";
import Error from "../ErrorPage/Error";
import Footer from "../../components/Footer/Footer";

const CurrentStock = () => {
  const myCallBack = useCallback((ss) => {}, []);

  return (
    <div className="current_stock_page">
      {"token" in localStorage ? (
        <div>
          <div className="dashboard__head">
            <p id="dashboard__header">Current Stock</p>
            <p id="dashboard__subheader">LIST/SEARCH</p>
          </div>
          <Table
            tableHead="Items in Inventory"
            hit="viewallprods/"
            callbackVal={myCallBack}
          />
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default CurrentStock;
