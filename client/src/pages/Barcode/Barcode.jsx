import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Searchbox from "../../components/Searchbox/Searchbox";
import "./Barcode.css";

const Barcode = () => {
  const [barModelNo, setModelNo] = useState("");
  const [barSize, setSize] = useState("");
  const [barColor, setColor] = useState("");
  const [barQty, seyQty] = useState("");
  const [barCp, setCp] = useState("");
  const [barSp, setSp] = useState("");
  const [recentBarcodes, setRecentBarcodes] = useState([]);

  const GenerateBarcode = () => {
    if (
      barModelNo === "" ||
      barSize === "" ||
      barColor === "" ||
      barQty === "" ||
      barCp === "" ||
      barSp === ""
    ) {
      toast.error("Details Incomplete");
    } else {
      var articleno = barModelNo;
      var color = barColor;
      var size = barSize;
      var cost_price = barCp;
      var sell_price = barSp;
      var qty = barQty;

      axios
        .post(process.env.REACT_APP_URL + "/generatebarcode/", {
          articleno,
          color,
          size,
          cost_price,
          sell_price,
          qty,
        })
        .then((res) => {
          console.log(res.data);
          setRecentBarcodes(res.data);
          {
            res.data.Error
              ? toast.error(res.data.Error)
              : toast.success("Process Completed");
            setColor("");
            setModelNo("");
            setSize("");
            setCp("");
            setSp("");
            seyQty("");
          }
        });
    }
  };

  const ClearRecents = () => {
    setRecentBarcodes([]);
  };

  return (
    <div className="barcode_page">
      <div className="dashboard__head">
        <p id="dashboard__header">Barcode Generator</p>
        <p id="dashboard__subheader">Generate/Search/Record</p>
      </div>
      <div className="barcode_inputs">
        <div className="barcode_inputs_head">
          <p>Entries for Barcode</p>
          <button onClick={GenerateBarcode}>Generate</button>
        </div>
        <div className="barcode_fields_row">
          <div className="barcode_input_field">
            <label htmlFor="model_name">Article Number</label>
            <input
              type="text"
              name="model_name"
              id="barcode_model"
              placeholder="Enter Article Number"
              autocomplete="off"
              value={barModelNo}
              onChange={(e) => {
                setModelNo(e.target.value);
              }}
            />
          </div>
          <div className="barcode_input_field">
            <label htmlFor="size">Item Size</label>
            <input
              type="number"
              name="size"
              placeholder="Enter Model Name"
              min="1"
              autocomplete="off"
              value={barSize}
              onChange={(e) => {
                setSize(e.target.value);
              }}
            />
          </div>
          <div className="barcode_input_field">
            <label htmlFor="color">Item Color</label>
            <input
              type="text"
              name="color"
              placeholder="Enter Color"
              autocomplete="off"
              value={barColor}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="barcode_fields_row">
          <div className="barcode_input_field">
            <label htmlFor="quantity">Number of Barcodes</label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter Here"
              min="1"
              autocomplete="off"
              value={barQty}
              onChange={(e) => {
                seyQty(e.target.value);
              }}
            />
          </div>
          <div className="barcode_input_field">
            <label htmlFor="cp">₹ Cost Price</label>
            <input
              type="number"
              name="size"
              placeholder="Enter Cost Price (₹)"
              min="1"
              autocomplete="off"
              value={barCp}
              onChange={(e) => {
                setCp(e.target.value);
              }}
            />
          </div>
          <div className="barcode_input_field">
            <label htmlFor="color">₹ Selling Price</label>
            <input
              type="text"
              name="color"
              placeholder="Enter Selling Price (₹)"
              min="1"
              autocomplete="off"
              value={barSp}
              onChange={(e) => {
                setSp(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="recently_added_barcodes">
          <div className="recently_added_barcodes_header">
            <p>Recently Added Barcodes</p>
            <button onClick={ClearRecents}>Clear</button>
          </div>
          <div className="recent_barcodes">
            {/* <div className="recent_barcodes_row">
              <div className="barcode_num">2109-brown-36-249A549S00031</div>
              <div className="barcode_date">12/03/2001</div>
            </div>
           
            <div className="recent_barcodes_row">
              <div className="barcode_num">2109-brown-36-249A549S00031</div>
              <div className="barcode_date">12/03/2001</div>
            </div> */}

            <div className="recent_barcodes_row">
              <div className="barcode_num">Barcode Number</div>
              <div className="barcode_date">(Date)</div>
            </div>
            {[...recentBarcodes].map((ss) => (
              <div className="recent_barcodes_row">
                <div className="barcode_num">{ss.Barcode}</div>
                <div className="barcode_date">{ss.Date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barcode;
