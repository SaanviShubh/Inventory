import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";

const Calender = ({ filterData }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [array, setArray] = useState([]);

  var data = [
    { date: "Sat May 08 2021 00:00:00 GMT+0530" },
    { date: "Sun May 09 2021 00:00:00 GMT+0530" },
  ];

  const filterHandler = () => {
    console.log(filterData);
    var startDate = new Date(fromDate);
    var endDate = new Date(toDate);
    // var date = new Date(filterData);
    console.log(startDate);

    {
      var filteredData = data.filter((ss) => {
        console.log(ss.date);
        return ss.date >= startDate && ss.date <= endDate;
      });
      console.log(filteredData);
    }
  };

  return (
    <div className="calender_filter">
      <p>Filter: </p>
      <div className="calender">
        <DatePicker
          id="from_date"
          placeholderText="From Here"
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
          dateFormat="MM/dd/yyy"
          selected={fromDate}
          onChange={(date) => setFromDate(date)}
          autoComplete="off"
        />
        <DatePicker
          id="to_date"
          placeholderText="To Here"
          isClearable
          showYearDropdown
          dateFormat="MM/dd/yyy"
          scrollableMonthYearDropdown
          selected={toDate}
          onChange={(date) => setToDate(date)}
          autoComplete="off"
        />
      </div>
      <button onClick={filterHandler}>Apply</button>
    </div>
  );
};

export default Calender;
