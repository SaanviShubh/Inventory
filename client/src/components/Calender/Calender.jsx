import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";
require("dotenv").config();

const Calender = ({ filterCallback }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [added, setAdded] = useState(null);
  const [dispatched, setDispatched] = useState(null);
  const [returned, setReturned] = useState(null);

  const filterHandler = () => {
    //Converting FROM Date
    var sdate = new Date(fromDate.toString().replace("IST", ""));
    let day = sdate.getDate();
    let month = sdate.getMonth() + 1;
    let year = sdate.getFullYear();
    var start_date = day + "/" + month + "/" + year;
    // console.log(day + "/" + month + "/" + year);

    //Converting TO Date
    var edate = new Date(toDate.toString().replace("IST", ""));
    day = edate.getDate();
    console.log(start_date);
    month = edate.getMonth() + 1;
    year = edate.getFullYear();
    var end_date = day + "/" + month + "/" + year;
    // console.log(day + "/" + month + "/" + year);

    axios
      .post(process.env.REACT_APP_URL + "/filtering_using_dates/", {
        start_date,
        end_date,
      })
      .then((res) => {
        console.log(res.data);
        var string1 = "Product added to stock";
        var string2 = "Product Dispatched";
        var string3 = "Product returned";

        var acount = 0;
        var dcount = 0;
        var rcount = 0;

        var acp = 0;
        var asp = 0;

        var dcp = 0;
        var dsp = 0;

        var rcp = 0;
        var rsp = 0;

        for (let i = 0; i < res.data.length; i++) {
          // console.log("hi");

          if (res.data[i].action === string1) {
            ++acount;
            acp += res.data[i].cost_price;
            asp += res.data[i].sell_price;
            // console.log("added + 1");
          } else if (res.data[i].action === string2) {
            ++dcount;
            dcp += res.data[i].cost_price;
            dsp += res.data[i].sell_price;
            // console.log("dispatch + 1");
          } else if (res.data[i].action === string3) {
            ++rcount;
            rcp += res.data[i].cost_price;
            rsp += res.data[i].sell_price;
            // console.log("ret + 1");
          }
        }
        // console.log(added);
        // console.log(dispatched);
        // console.log(returned);

        var toDash = {
          addno: acount,
          dispatchno: dcount,
          returnno: rcount,
          added_costprice: acp,
          added_sellprice: asp,
          dispatched_costprice: dcp,
          dispatched_sellprice: dsp,
          returned_costprice: rcp,
          returned_sellprice: rsp,
        };

        filterCallback(toDash);
      });
  };

  return (
    <div className="calender_filter">
      <p>Filter: </p>
      <div className="calender">
        <DatePicker
          id="date_input"
          placeholderText="From Here"
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
          dateFormat="dd/MM/yyy"
          selected={fromDate}
          onChange={(date) => setFromDate(date)}
          autoComplete="off"
        />
        <DatePicker
          id="date_input"
          placeholderText="To Here"
          isClearable
          showYearDropdown
          dateFormat="dd/MM/yyy"
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
