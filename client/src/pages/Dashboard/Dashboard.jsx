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
        <h3>Searchbox</h3>
        <div className="search__bar">
          <i class="fas fa-search"></i>
          <input
            id="search__bar"
            type="text"
            placeholder="Enter SKU Number to search"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
