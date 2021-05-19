import React, { useState } from "react";
import "./Input.css";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();

const Input = ({ text, inputHit, tableCallback }) => {
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);

  // const [barcode, setBarcode] = useState("");
  const [party_name, setPartyName] = useState("");
  const [billno, setBillNumber] = useState("");

  const authtoken = localStorage.getItem("token");
  // console.log(auth);

  const SubmitHandler = () => {
    setLoader(true);
    if (input === "") {
      toast.error("Please Enter Details");
      setLoader(false);
    } else {
      axios
        .post(
          process.env.REACT_APP_URL + `/${inputHit}`,
          { input }
          // { headers: { authToken } }
        )
        .then((res) => {
          if (res.data.Error === "") {
            toast.success("Process Completed");
            tableCallback(res.data);
            setLoader(false);
            setInput("");
          } else {
            setLoader(false);
            toast.error(res.data.Error);
          }
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
          toast.error("Something Went Wrong");
        });
    }
  };

  const headers = {
    "authtoken": authtoken,
  };

  const AddSubmitHandler = () => {
    setLoader(true);
    if (input === "") {
      toast.error("Please Enter Details");
      setLoader(false);
    } else {
      axios
        .post(
          process.env.REACT_APP_URL + `/${inputHit}`,
          { input, billno, party_name },
          { headers: headers }
        )
        .then((res) => {
          if (res.data.Error === "") {
            toast.success("Process Completed");
            tableCallback(res.data);
            setLoader(false);
            setInput("");
          } else {
            setLoader(false);
            toast.error(res.data.Error);
            console.error(res.data.Error);
          }
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
          toast.error("Something Went Wrong");
        });
    }
  };

  const inputUrl = window.location.href;

  if (inputUrl === "http://localhost:3000/add") {
    return (
      <div className="add_input_bar">
        <input
          id="add_input"
          type="text"
          placeholder="Enter Barcode Number"
          autocomplete="off"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input
          id="add_input"
          type="text"
          placeholder="Enter Party Name"
          value={party_name}
          onChange={(e) => {
            setPartyName(e.target.value);
          }}
        />
        <input
          id="add_input"
          type="text"
          placeholder="Enter Bill Number"
          value={billno}
          onChange={(e) => {
            setBillNumber(e.target.value);
          }}
        />
        <i class="fas fa-plus-square fa-2x" onClick={AddSubmitHandler}></i>
      </div>
    );
  } else {
    return (
      <div className="input_bar">
        <input
          id="input_bar"
          type="text"
          placeholder={text}
          autocomplete="off"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        {loader ? (
          <MoonLoader size={20} color="#1877F2" />
        ) : (
          <i class="fas fa-plus-square fa-2x" onClick={SubmitHandler}></i>
        )}
      </div>
    );
  }
};

export default Input;
