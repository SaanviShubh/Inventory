import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.go(0);
  };

  const handleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
    // document.getElementById("sidebar").style.width = "200px";
  };

  return (
    <div className="navbar">
      <div onClick={handleSidebar}>
        <i id="burger_menu" class="fas fa-bars burger-menu"></i>
      </div>
      <div className="logout_data">
        <p>Logout</p>
        <i class="fas fa-sign-out-alt" onClick={handleLogout}></i>
      </div>
    </div>
  );
};

export default Navbar;
