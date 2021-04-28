import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { SidebarData, SideBarPathIndex } from "./SidebarData";
import SidebarOption from "./SidebarOption";
import "./SidebarOption.css";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    SideBarPathIndex[window.location.pathname]
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h2>Logo</h2>
      </div>
      {/* <div className="sidebar__options">
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
      </div> */}
      {SidebarData.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            onClick={() => {
              setSelectedOption(index);
            }}
          >
            <div
              className={
                selectedOption === index ? item.cName + " active" : item.cName
              }
            >
              <i className={item.icon} id="option_icon"></i>
              <p className="option_name">{item.option_name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
