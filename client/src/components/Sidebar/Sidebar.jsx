import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h2>Logo</h2>
      </div>
      <div className="sidebar__options">
        <SidebarOption Icon={"fas fa-columns"} Name={"Dashboard"} />
        <SidebarOption Icon={"fas fa-plus-square"} Name={"Add Item"} />
        <SidebarOption Icon={"fas fa-minus-square"} Name={"Dispatch Item"} />
        <SidebarOption Icon={"fas fa-undo-alt"} Name={"Return Item"} />
      </div>
    </div>
  );
};

export default Sidebar;
