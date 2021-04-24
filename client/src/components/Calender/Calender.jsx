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
          selected={fromDate}
          onChange={(date) => setFromDate(date)}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
        <DatePicker
          id="to_date"
          placeholderText="To Here"
          selected={toDate}
          onChange={(date) => setToDate(date)}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
      </div>
      <button>Save</button>
    </div>
  );
};

export default Calender;
