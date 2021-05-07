import React, { useState } from "react";
import "./Input.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();

const Input = ({ text, inputHit }) => {
  const [input, setInput] = useState("");

  const SubmitHandler = () => {
    axios
      .post(process.env.REACT_APP_URL + `/${inputHit}`, { input })
      .then((res) => {
        console.log(res);
        setInput("");
        {
          res.data.Error
            ? toast.error(res.data.Error)
            : toast.success("Process Completed");
        }
      });
  };

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
      <i class="fas fa-plus-square fa-2x" onClick={SubmitHandler}></i>
    </div>
  );
};

export default Input;
