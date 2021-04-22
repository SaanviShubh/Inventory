import React, { useState, useEffect } from "react";
import "./Table.css";
import axios from "axios";

const Table = ({}) => {
  const [addedItems, setAddedItems] = useState("");

  useEffect((e) => {
    axios.get("https://empup.herokuapp.com/api/feedback/BVznoh").then((res) => {
      // console.log(addedItems);
      console.log(res.data.data);
      setAddedItems(res.data.data);
    });
  }, []);

  return (
    <div className="table">
      <p className="table__name">Items Added to the Stock</p>

      <table id="customers">
        <tr>
          <th>SKU Number</th>
          <th>Article Number</th>
          <th>Color</th>
          <th>Size</th>
          <th>Quantity</th>
        </tr>
        {[...addedItems].map((newFeedback) => (
          <tr>
            <td>{newFeedback.fTitle}</td>
            <td>1620</td>
            <td>{newFeedback.fDept}</td>
            <td>40</td>
            <td>20</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
