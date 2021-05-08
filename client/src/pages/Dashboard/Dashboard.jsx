import React, { useEffect, useState } from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./Dashboard.css";
import axios from "axios";
import Calender from "../../components/Calender/Calender";
import DoughnutChart from "../../components/Charts/DoughnutChart";
import { Bar } from "react-chartjs-2";
import BarChart from "../../components/Charts/BarChart";
import { Link } from "react-router-dom";
require("dotenv").config();

const Dashboard = () => {
  const [itemsArray, setItemsArray] = useState([]);
  const [added, setAdded] = useState(null);
  const [dispatched, setDispatched] = useState(null);
  const [returned, setReturned] = useState("");
  const [alertList, setAlertList] = useState("");

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/viewtransactions/").then((res) => {
      console.log(res.data);
      setItemsArray(res.data);
      console.log(itemsArray);

      var count = 0;
      {
        res.data.map((qq) => {
          if (qq.action === "Product added to stock") {
            console.log("alsdnakjn");
            setAdded(1);
          } else if (qq.action === "Product Dispatched") {
            console.log("alsdnakjn");
            setDispatched(1);
          }
        });
      }
      console.log(added);
      console.log(dispatched);
      console.log(count);
    });
  }, []);

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

      {/* CHECK ALTERNATIVE */}

      <div className="items_detail">
        <div className="detail">
          <div className="articles_icon">
            <i id="articles" className="fab fa-shopify fa-2x"></i>
          </div>
          <div className="item_detail">
            <p className="number_of_item">2000</p>
            <p className="detail_heading">Current Stock</p>
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
            <p>Alert Notifiaction</p>
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
      <div className="stock_analytics">
        <div className="stock_chart">
          <DoughnutChart />
          {/* <Bar /> */}
        </div>
        <div className="stock_numbers">
          <div className="sn_head_filter">
            <p>Stock Analytics</p>
            <Calender />
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
                <p>Returned Items :- 5</p>
              </div>
              <div className="profit_stock">
                <p>Total Sales :- 30%</p>
              </div>
            </div>
            <div className="stock_mgt_pages">
              <button id="current_stock_btn">CURRENT STOCK</button>
              <Link id="recent_transaction_btn" to="/recent_transaction">
                TRANSACTIONS
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="profit_bar_chart">
        <div className="profit_details">
          <div className="revenue_details">
            <p>Revenue Analytics</p>
            <Calender />
            <div className="sale_money">
              <p>Sold Worth :- 32 </p>
            </div>
            <div className="return_money">
              <p>Returned Worth :- 32 </p>
            </div>
            <div className="profit_money">
              <p>Profit Gained :- 32 </p>
            </div>
          </div>
          <div className="graph_change">
            <button>SALES</button>
            <button>REVENUE</button>
          </div>
        </div>
        <div className="profit_chart">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
