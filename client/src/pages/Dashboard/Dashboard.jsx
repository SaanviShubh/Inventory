import React, { useEffect, useState, useCallback } from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./Dashboard.css";
import axios from "axios";
import Calender from "../../components/Calender/Calender";
import DoughnutChart from "../../components/Charts/DoughnutChart";
import { Bar } from "react-chartjs-2";
import BarChart from "../../components/Charts/BarChart";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
require("dotenv").config();

const Dashboard = () => {
  // Stock Analytics
  const [itemsArray, setItemsArray] = useState([]);
  const [added, setAdded] = useState(null);
  const [dispatched, setDispatched] = useState(null);
  const [returned, setReturned] = useState(null);
  const [totalSalesperc, setTotalSalesPerc] = useState(null);
  //Revenue Anayalytics
  const [soldWorth, setSoldWorth] = useState(0);
  const [returnedWorth, setReturnedWorth] = useState(0);
  const [profitWorth, setProfitWorth] = useState(0);
  //Quantity Alert
  const [alertList, setAlertList] = useState("");

  //Callback Function for Calender to recieve Filtered Data
  const myCallback = useCallback((ss) => {
    // setGraphData(ss.data);
    console.log(ss);
    setAdded(ss.addno);
    setDispatched(ss.dispatchno);
    setReturned(ss.returnno);

    var ts = ((ss.dispatchno - ss.returnno) / ss.addno) * 100;
    setTotalSalesPerc(ts);

    setSoldWorth(ss.dispatched_sellprice);
    setReturnedWorth(ss.returned_sellprice);

    setProfitWorth(ss.dispatched_sellprice - ss.returned_sellprice);
  });

  const myCallbackTwo = useCallback((ss) => {
    // setGraphData(ss.data);
  });

  //For SearchBox, Table, Calender
  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/viewtransactions/").then((res) => {
      console.log(res.data);
      setItemsArray(res.data);
    });
  }, []);

  //Setting Alert List
  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/viewallprods/").then((res) => {
      // console.log(res.data);
      setAlertList(res.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <p id="dashboard__header">Welcome to Dashboard</p>
        <p id="dashboard__subheader">DASHBOARD/SEARCH</p>
      </div>

      <Searchbox searchData={itemsArray} />

      {/* CHECK ALTERNATIVE (CSS)*/}

      <div className="items_detail">
        <div className="detail">
          <div className="articles_icon">
            <i id="articles" className="fab fa-shopify fa-2x"></i>
          </div>
          <div className="item_detail">
            <p className="number_of_item">2000</p>
            <p className="detail_heading"></p>
          </div>
        </div>

        <div className="detail">
          <div className="added_icon">
            <i id="added" className="far fa-plus-square fa-2x"></i>
          </div>
          <div className="item_detail">
            <p className="number_of_item">412</p>
            <p className="detail_heading">Items Added</p>
          </div>
        </div>

        <div className="detail">
          <div className="dispatched_icon">
            <i id="dispatched" className="far fa-minus-square fa-2x"></i>
          </div>
          <div className="item_detail">
            <p className="number_of_item">230</p>
            <p className="detail_heading">Items Dispatched</p>
          </div>
        </div>

        <div className="detail">
          <div className="returned_icon">
            <i id="returned" className="fas fa-exchange-alt fa-2x"></i>
          </div>
          <div className="item_detail">
            <p className="number_of_item">200</p>
            <p className="detail_heading">Items Returned</p>
          </div>
        </div>
        <div className="quant_alert_list">
          <div className="quant_alert_list_head">
            <p>Alert Notification</p>
          </div>
          <div className="alert_list">
            {[...alertList].map((qq) => (
              <div>
                {qq.qty < 3 ? (
                  <p id="alert_list">{qq.modelname + " = " + qq.qty} </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="filter_pagebtn">
        <Calender filterData={itemsArray} filterCallback={myCallback} />
        <div className="page_btns">
          <p>CURRENT STOCK</p>
          <p>TRANSACTIONS</p>
        </div>
      </div>

      <div className="stock_analytics">
        <div className="stock_chart">
          <DoughnutChart
            added={added}
            dispatched={dispatched}
            returned={returned}
          />
        </div>

        <div className="stock_numbers">
          <div className="sn_head_filter">
            <p>Stock Analytics</p>
          </div>
          <div className="stock_numbers_details">
            <div className="analytics">
              <div className="added_stock">
                <p>Added Items :- {added} </p>
              </div>
              <div className="dispatched_stock">
                <p>Dispatched Items :- {dispatched} </p>
              </div>
              <div className="returned_stock">
                <p>Returned Items :- {returned}</p>
              </div>
              <div className="profit_stock">
                <p>Total Sales :- {totalSalesperc}%</p>
              </div>
            </div>
            <div className="revenue_side">
              <div className="revenue_details">
                <div className="sale_money">
                  <p>Sold Worth :- ₹ {soldWorth} </p>
                </div>
                <div className="return_money">
                  <p>Returned Worth :- ₹ {returnedWorth} </p>
                </div>
                <div className="profit_money">
                  <p>Profit Gained :- ₹ {profitWorth}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="barchart_wrapper">
        <div className="barchart">
          <BarChart graphData={itemsArray} />
        </div>
      </div>
      <Table
        hit="viewtransactions/"
        tableHead="Recent Transactions List"
        callbackVal={myCallbackTwo}
      />
    </div>
  );
};

export default Dashboard;
