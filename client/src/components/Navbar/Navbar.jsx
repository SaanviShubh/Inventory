import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_data">
        <p>Logged in as, User</p>
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};

export default Navbar;
