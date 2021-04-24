import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";

const Calender = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

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
          dateFormat="dd/MM/yyyy"
          selected={fromDate}
          onChange={(date) => setFromDate(date)}
          autoComplete="off"
        />
        <DatePicker
          id="to_date"
          placeholderText="To Here"
          isClearable
          showYearDropdown
          dateFormat="dd/MM/yyyy"
          scrollableMonthYearDropdown
          selected={toDate}
          onChange={(date) => setToDate(date)}
          autoComplete="off"
        />
      </div>
      <button>Apply</button>
    </div>
  );
};

export default Calender;
