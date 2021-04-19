import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, Name }) => {
  return (
    <div className="sidebarOption">
      <div className="sidebarOption__icon">
        <i class={Icon}></i>
      </div>
      <div className="sidebarOption__name">{Name}</div>
    </div>
  );
};

export default SidebarOption;
