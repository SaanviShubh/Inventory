import React from "react";
import ReactDom from "react-dom";

const SidebarModal = () => {
  return ReactDom.createPortal(
    <div>
      <h1>hi</h1>
    </div>,
    document.getElementById("SidebarModal")
  );
};

export default SidebarModal;
