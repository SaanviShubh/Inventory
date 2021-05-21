import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    // history.push("/login");
    history.go(0);
  };

  return (
    <div className="navbar">
      <div className="navbar_data">
        <p>Logout</p>
        <i class="fas fa-sign-out-alt" onClick={handleLogout}></i>
      </div>
    </div>
  );
};

export default Navbar;
