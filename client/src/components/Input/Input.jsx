import React, { useState } from "react";
import "./Input.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = ({ text, inputHit }) => {
  const [input, setInput] = useState("");

  const SubmitHandler = () => {
    axios
      .post(`http://127.0.0.1:8000/stockmanagement/${inputHit}`, { input })
      .then((res) => {
        console.log(res);
        setInput("");
        {
          res.data.error !== ""
            ? toast.success("Process Completed")
            : toast.error(res.data.error);
        }
      })
      .catch((err) => {
        toast.error("Something Went Wrong!");
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
