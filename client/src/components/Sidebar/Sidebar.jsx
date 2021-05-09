import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { SidebarData, SideBarPathIndex } from "./SidebarData";
import "./SidebarOption.css";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    SideBarPathIndex[window.location.pathname]
  );

  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <div className="profile_icon">
          <i class="fas fa-user-circle fa-2x"></i>
        </div>
        <p>Sandeep Singharia </p>
      </div>

      {SidebarData.map((item, index) => {
        return (
          <Link
            className="opt_link"
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
