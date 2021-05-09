import React from "react";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./Barcode.css";

const Barcode = () => {
  return (
    <div className="barcode_page">
      <div className="dashboard__head">
        <p id="dashboard__header">Barcode Generator</p>
        <p id="dashboard__subheader">Generate/SEARCH/Record</p>
      </div>
      <Searchbox />
    </div>
  );
};

export default Barcode;
