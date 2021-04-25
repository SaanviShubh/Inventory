import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h2>Logo</h2>
      </div>
      <div className="sidebar__options">
        <Link to="/">
          <SidebarOption Icon={"fas fa-columns"} Name={"Dashboard"} />
        </Link>
        <Link to="/add">
          <SidebarOption Icon={"fas fa-plus-square"} Name={"Add Item"} />
        </Link>
        <Link to="/dispatch">
          <SidebarOption Icon={"fas fa-minus-square"} Name={"Dispatch Item"} />
        </Link>
        <Link to="/return">
          <SidebarOption Icon={"fas fa-undo-alt"} Name={"Return Item"} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
