import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>Inventory for SaanviShubh</p>
        <a href="https://saanvishubh.com/" target="blank">
          Click to Visit Us
        </a>
      </div>

      <div className="footer_right">
        {/* <p>Created and Maintained by Us!</p> */}
        <a href="https://trello.com/b/G9p13vOt/inventory" target="blank">
          Created and Maintained by Us!
        </a>
      </div>
    </div>
  );
};

export default Footer;
