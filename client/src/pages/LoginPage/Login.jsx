import React, { useState } from "react";
import "./Login.css";
import login_image from "../../assets/login_image.svg";
import PropTypes from "prop-types";
import axios from "axios";

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_URL + "/loginpage/", {}).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="login">
      <div className="login_image_wrapper">
        <img src={login_image} alt="image" />
      </div>
      <div className="login_inputs_wrapper">
        <div className="login_inputs">
          <p>Welcome to SaanviShubh!</p>
          <div>
            <input
              // className="login_email"
              type="email"
              placeholder="Enter Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              // className="login_email"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button>Login</button>
        </div>
        <button className="know_more_btn" onClick={submitHandler}>
          Know More
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
