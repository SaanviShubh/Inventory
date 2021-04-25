import React, { useEffect, useState } from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./Dashboard.css";
import { Doughnut } from "react-chartjs-2";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["Added", "Dispatched", "Returned"],
      datasets: [
        {
          data: [32, 43, 12],
          backgroundColor: [
            "rgb(10%, 68%, 47%)",
            "rgb(57%, 35%, 81%)",
            "rgb(91%, 16%, 16%)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <p id="dashboard__header">Welcome to Dashboard</p>
        <p id="dashboard__subheader">DASHBOARD/SEARCH</p>
      </div>

      <Searchbox />

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
      </div>
      <div className="stock_analytics">
        <div className="stock_chart">
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
            }}
          />
        </div>
        <div className="stock_numbers">
          <p>Stock Analytics</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
