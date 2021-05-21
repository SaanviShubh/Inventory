import React, { useState, useEffect, useCallback } from "react";
import "./Table.css";
import axios from "axios";
import { FadeLoader } from "react-spinners";
import Input from "../../components/Input/Input";
import { toast } from "react-toastify";
require("dotenv").config();

const Table = ({ hit, inputText, inputHit, tableHead, callbackVal }) => {
  const [tableItems, setTableItems] = useState("");
  const [isLoading, setloading] = useState(true);
  const [reload, setReload] = useState(false);

  const authtoken = localStorage.getItem("token");

  //To Reload Table on new Entry (Add, Dispatch, Return) Returned from Input
  const tableReload = useCallback((ss) => {
    if (ss) {
      setReload(true);
    }
  }, []);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + `/${hit}`, {
        headers: {
          authtoken: authtoken,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTableItems(res.data);
        setloading(false);
        callbackVal(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong");
      });
  }, [reload]);

  const tableUrl = window.location.href;

  //For Current Stock Table
  if (tableUrl === "http://localhost:3000/currentstock")
    return (
      <div className="table">
        <p className="table__name">{tableHead}</p>
        {/* 
        <Input
          text={inputText}
          inputHit={inputHit}
          tableCallback={tableReload}
        /> */}

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

            {[...tableItems].reverse().map((ss) => (
              <tr>
                <td>{ss.articleno}</td>
                <td>{ss.modelname}</td>
                <td>{ss.color}</td>
                <td>{ss.size}</td>
                <td>{ss.qty}</td>
                <td>200</td>
                <td>800</td>
                <td>
                  {ss.qty < 6 ? (
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
  //Transactions Table  ----> Try ReactBootstrap for this
  else if (tableUrl === "http://localhost:3000/")
    return (
      <div>
        <div className="table">
          <p className="table__name">{tableHead}</p>

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

              {[...tableItems]
                .reverse()
                .slice(0, 500)
                .map((ss) => (
                  <tr>
                    <td>{ss.Barcode}</td>
                    <td>{ss.modelname}</td>
                    <td>{ss.Date}</td>
                    <td>
                      <span
                        className={
                          ss.action === "Product added to stock"
                            ? "action_sold"
                            : ss.action === "Product Dispatched"
                            ? "action_dispatch"
                            : "action_return"
                        }
                      >
                        {ss.action === "Product added to stock"
                          ? "Added"
                          : ss.action === "Product Dispatched"
                          ? "Dispatched"
                          : "Returned"}
                      </span>
                    </td>
                  </tr>
                ))}
            </table>
          )}
        </div>
      </div>
    );
  //Add Page
  else if (tableUrl === "http://localhost:3000/add") {
    return (
      <div>
        <div className="table">
          <p className="table__name">{tableHead}</p>

          <Input
            text={inputText}
            inputHit={inputHit}
            tableCallback={tableReload}
          />

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
              </tr>

              {[...tableItems].reverse().map((ss) =>
                ss.action === "Product added to stock" ? (
                  <tr>
                    <td>{ss.Barcode}</td>
                    <td>{ss.modelname}</td>
                    <td>{ss.Date}</td>
                  </tr>
                ) : null
              )}
            </table>
          )}
        </div>
      </div>
    );
  }
  // Dispatch Return Pages
  else
    return (
      <div>
        <div className="table">
          <p className="table__name">{tableHead}</p>

          <Input
            text={inputText}
            inputHit={inputHit}
            tableCallback={tableReload}
          />

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
              </tr>

              {[...tableItems].reverse().map((ss) => (
                <tr>
                  <td>{ss.Barcode}</td>
                  <td>{ss.modelname}</td>
                  <td>{ss.Date}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    );
};

export default Table;
