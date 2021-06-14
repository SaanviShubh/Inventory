import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import login_image from "../../assets/login_image.svg";
import { HashLoader } from "react-spinners";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import { back_end_url } from "../../config/configuration.json";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const history = useHistory();
  const authtoken = localStorage.getItem("token");

  // useEffect(() => {
  //   history.go(0);
  // }, []);

  const submitHandler = async (e) => {
    setLoader(true);
    e.preventDefault();
    setLoader(true);
    if (username === "" || password === "") {
      toast.error("Enter Details");
      setLoader(false);
    } else {
      axios
        .post(
          back_end_url + "/loginpage/",
          { username, password },
          {
            headers: {
              authtoken: authtoken,
            },
          }
        )
        .then((res) => {
          if (res.data.Error === "") {
            localStorage.setItem("token", res.data.token);
            setLoader(false);
            history.push("/");
          } else {
            toast.error(res.data.Error);
            setLoader(false);
          }
        })
        .catch((error) => {
          toast.error("Something Went Wrong");
          setLoader(false);
        });
    }
  };

  return (
    <div className="login">
      <div className="login_nav"></div>
      <div className="login_image_wrapper">
        <img src={login_image} alt="image" />
      </div>
      <div className="login_inputs_wrapper">
        <div className="login_inputs">
          <p>Welcome to SaanviShubh!</p>
          <form>
            <input
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

            <button onClick={submitHandler} type="submit">
              {loader ? (
                <div className="login_loader">
                  <HashLoader size={18} color="fff" />
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
        <button className="know_more_btn">Know More</button>
      </div>
    </div>
  );
}
