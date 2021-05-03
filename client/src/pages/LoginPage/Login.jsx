import React from "react";
import "./Login.css";
import login_image from "../../assets/login_image.svg";

const Login = () => {
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
            />
            <input
              // className="login_email"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <button>Login</button>
        </div>
        <button className="know_more_btn">Know More</button>
      </div>
    </div>
  );
};

export default Login;
