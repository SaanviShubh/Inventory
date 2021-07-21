import React, { useEffect, useState, useCallback } from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./Dashboard.css";
import axios from "axios";
import { HashLoader } from "react-spinners";
import Calender from "../../components/Calender/Calender";
import DoughnutChart from "../../components/Charts/DoughnutChart";
import { Bar } from "react-chartjs-2";
import BarChart from "../../components/Charts/BarChart";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import Error from "../ErrorPage/Error";
import { toast } from "react-toastify";
import ReactExport from "react-data-export";
import { back_end_url } from "../../config/configuration.json";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

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
  //Monthly Updates
  const [totalStock, setTotalStock] = useState(0);
  const [monthlyAdded, setMonthlyAdded] = useState(0);
  const [monthlyDispatched, setMonthlyDispatched] = useState(0);
  const [monthlyReturned, setMonthlyReturned] = useState(0);
  const [loader, setLoader] = useState(true);
  const [clearBtn, setClearBtn] = useState(false);

  const authtoken = localStorage.getItem("token");

  //Callback Function for Calender to recieve Filtered Data
  const myCallback = useCallback((ss, qq) => {
    // console.log(ss);
    // console.log("hi");
    setAdded(ss.addno);
    setDispatched(ss.dispatchno);
    setReturned(ss.returnno);

    var ts = ((ss.dispatchno - ss.returnno) / ss.addno) * 100;
    setTotalSalesPerc(ts.toFixed(2));

    setSoldWorth(ss.dispatched_sellprice);
    setReturnedWorth(ss.returned_sellprice);

    setProfitWorth(ss.dispatched_sellprice - ss.returned_sellprice);
    // console.log(added);
    setClearBtn(true);
  });

  const clearFilteredGraphs = () => {
    setAdded(null);
    setDispatched(null);
    setReturned(null);
    setTotalSalesPerc(null);
    setSoldWorth(0);
    setReturnedWorth(0);
    setProfitWorth(0);
    setClearBtn(false);
  };

  const myCallbackTwo = useCallback((ss) => {
    // setGraphData(ss.data);
  });

  //For SearchBox, Table, Calender
  useEffect(() => {
    axios
      .get(back_end_url + "/viewtransactions/", {
        headers: {
          authtoken: authtoken,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setItemsArray(res.data);

        var add_count = 0;
        var dis_count = 0;
        var ret_count = 0;

        for (let i = 0; i < res.data.length; i++) {
          // console.log("DATA" + res);
          // console.log("Date from DATA = " + res.data[i].Date);
          var emonth = res.data[i].Date.split("/")[1];
          var eyear = res.data[i].Date.split("/")[2];
          // console.log("Month from DATA = " + eyear);

          var currDate = new Date();
          var currYear = currDate.getFullYear();
          // console.log(currYear);

          var currMonth =
            currDate.getMonth() + 1 < 10
              ? "0" + (currDate.getMonth() + 1)
              : currDate.getMonth() + 1;
          // console.log("Current Month = " + currMonth);

          if (
            emonth === currMonth &&
            eyear == currYear &&
            res.data[i].action === "Product added to stock"
          ) {
            add_count = ++add_count;
            // console.log(res.data[i]);
          } else if (
            emonth === currMonth &&
            eyear == currYear &&
            res.data[i].action === "Product Dispatched"
          ) {
            dis_count = dis_count + 1;
          } else if (
            emonth === currMonth &&
            eyear == currYear &&
            res.data[i].action === "Product returned"
          ) {
            ret_count = ret_count + 1;
          }
        }
        setMonthlyAdded(add_count);
        setMonthlyDispatched(dis_count);
        setMonthlyReturned(ret_count);
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  }, []);

  //Setting Alert List and Total Stock Available
  useEffect(() => {
    axios
      .get(back_end_url + "/viewallprods/", {
        headers: {
          authtoken: authtoken,
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.Error === "Cannot open directly") {
          // setAlertList("");
          toast.info("You are Logged Out!");
        } else {
          setLoader(false);
          localStorage.setItem("allProducts", JSON.stringify(res.data));
          const alertListData = localStorage.getItem("allProducts");
          setAlertList(JSON.parse(alertListData));
          var count = 0;
          for (let i = 0; i < res.data.length; i++) {
            count = ++count;
          }
          localStorage.setItem("currentstock", JSON.stringify(count));
          setTotalStock(localStorage.getItem("currentstock"));
          // console.log(totalStock);
        }
      })
      .catch((error) => {
        toast.error("Something went Wrong!");
        // console.log(error);
      });
  }, []);

  return (
    <div className="dashboard">
      {"token" in localStorage ? (
        <div>
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
                <p className="number_of_item">{totalStock}</p>
                <p className="detail_heading">Total Models</p>
              </div>
            </div>

            <div className="detail">
              <div className="added_icon">
                <i id="added" className="far fa-plus-square fa-2x"></i>
              </div>
              <div className="item_detail">
                <p className="number_of_item">{monthlyAdded}</p>
                <p className="detail_heading">Items Added</p>
              </div>
            </div>

            <div className="detail">
              <div className="dispatched_icon">
                <i id="dispatched" className="far fa-minus-square fa-2x"></i>
              </div>
              <div className="item_detail">
                <p className="number_of_item">{monthlyDispatched}</p>
                <p className="detail_heading">Items Dispatched</p>
              </div>
            </div>

            <div className="detail">
              <div className="returned_icon">
                <i id="returned" className="fas fa-exchange-alt fa-2x"></i>
              </div>
              <div className="item_detail">
                <p className="number_of_item">{monthlyReturned}</p>
                <p className="detail_heading">Items Returned</p>
              </div>
            </div>
            <div className="quant_alert_list">
              <div className="quant_alert_list_head">
                {alertList.length !== 0 ? (
                  <ExcelFile
                    filename="Alert List"
                    element={<p>Export Alert Items</p>}
                  >
                    <ExcelSheet
                      dataSet={alertList}
                      name="Low Quantity Items"
                    ></ExcelSheet>
                  </ExcelFile>
                ) : null}
                {loader ? <HashLoader size={20} color="c45551" /> : null}
              </div>
              <div className="alert_list">
                {
                  // console.log(alertList)
                  [...alertList].map((qq) => (
                    <div>
                      {qq.qty <= 5 ? (
                        <p id="alert_list">{qq.modelname + " = " + qq.qty} </p>
                      ) : null}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="filter_pagebtn">
            <Calender filterData={itemsArray} filterCallback={myCallback} />
            {clearBtn ? (
              <i class="fas fa-times fa-lg" onClick={clearFilteredGraphs}></i>
            ) : null}
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
            <p>Monthly Sales Chart</p>
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
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Dashboard;
