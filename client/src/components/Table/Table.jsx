import React, { useState, useEffect } from "react";
import "./Table.css";
import axios from "axios";
import Calender from "../Calender/Calender";
import { FadeLoader } from "react-spinners";
import Input from "../Input/Input";

const Table = ({ hit, inputText, inputHit, tableHead }) => {
  const [tableItems, setTableItems] = useState("");
  const [isLoading, setloading] = useState(true);

  // JUST FOR TRY
  const [action, setAction] = useState("return");

  // toast.configure();
  // const Toast = () => {
  //   toast("Test Notification", { position: toast.POSITION.TOP_RIGHT });
  // };

  useEffect(() => {
    console.log("started");
    axios.get(`http://127.0.0.1:8000/stockmanagement/${hit}`).then((res) => {
      console.log(res.data);
      setTableItems(res.data);
      setloading(false);
    });
  }, []);

  // useEffect((e) => {
  //   axios.get("https://empup.herokuapp.com/api/feedback/BVznoh").then((res) => {
  //     // console.log(addedItems);
  //     console.log(res.data.data);
  //     setAddedItems(res.data.data);
  //     setloading(false);
  //   });
  // }, []);

  // if (isLoading)
  //   return (
  //     <div className="loading">
  //       <FadeLoader height={10} width={5} margin={3} color="blue" />
  //     </div>
  //   );

  const tableUrl = window.location.href;

  if (tableUrl === "http://localhost:3000/add")
    return (
      <div className="table">
        <p className="table__name">{tableHead}</p>

        <Input text={inputText} inputHit={inputHit} />

        {isLoading ? (
          <div className="loading">
            <FadeLoader height={10} width={5} margin={3} color="#1877F2" />
          </div>
        ) : (
          <table id="customers">
            <tr>
              <th>SKU Number</th>
              <th>Article Number</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Cost Price</th>
              <th>Selling Price</th>
              <th>Status</th>
            </tr>

            {/* Dummy Data */}
            {/* 
                        {/*<tr>
              <td>1207-BLU-40</td>
              <td>1207</td>
              <td>BLU</td>
              <td>40</td>
              <td>2</td>
              <td>{calc()}</td>
            </tr>
            <tr>
              <td>1207-BLU-40</td>
              <td>1207</td>
              <td>BLU</td>
              <td>40</td>
              <td>7</td>
              <td>{calc()}</td>
            </tr>
            <tr>
              <td>1207-BLU-40</td>
              <td>1207</td>
              <td>BLU</td>
              <td>40</td>
              <td>12</td>
              <td>{calc()}</td>
            </tr> */}

            {[...tableItems].map((ss) => (
              <tr>
                <td>{ss.articleno}</td>
                <td>{ss.modelname}</td>
                <td>{ss.color}</td>
                <td>{ss.size}</td>
                <td>{ss.qty}</td>
                <td>200</td>
                <td>800</td>
                <td>
                  {ss.qty < 3 ? (
                    <span className="status_alert">ALERT</span>
                  ) : (
                    <p>In Stock</p>
                  )}
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    );
  else
    return (
      <div>
        <div className="table">
          <p className="table__name">{tableHead}</p>
          <Input text={inputText} inputHit={inputHit} />

          {isLoading ? (
            <div className="loading">
              <FadeLoader height={10} width={5} margin={3} color="#1877F2" />
            </div>
          ) : (
            <table id="customers">
              <tr>
                <th>Barcode</th>
                <th>SKU Number</th>
                <th>Date</th>
                {/* <th>Size</th> */}
                {/* <th>Quantity</th> */}
                <th>Action</th>
              </tr>

              {[...tableItems].map((ss) => (
                <tr>
                  <td>{ss.Barcode}</td>
                  {/* <td>1620</td> */}
                  <td>{ss.modelname}</td>
                  <td>40</td>
                  {/* <td>20</td> */}
                  <td>
                    <span
                      className={
                        action === "sold"
                          ? "action_sold"
                          : action === "dispatch"
                          ? "action_dispatch"
                          : "action_return"
                      }
                    >
                      Sold
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    );
};

export default Table;
