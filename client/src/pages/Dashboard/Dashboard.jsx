import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__head">
        <p id="dashboard__header">Welcome to Dashboard</p>
        <p id="dashboard__subheader">DASHBOARD/SEARCH</p>
      </div>
      <div className="dashboard__searchbox">
        <p id="searchbox">Searchbox</p>
        <div className="search__bar">
          <i className="fas fa-search"></i>
          <input
            id="search__bar"
            type="text"
            placeholder="Enter SKU Number to search"
          />
        </div>
      </div>

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
    </div>
  );
};

export default Dashboard;
