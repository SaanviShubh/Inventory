import React, { useState, useEffect } from "react";
import "./Table.css";
import axios from "axios";
import Calender from "../Calender/Calender";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({}) => {
  const [addedItems, setAddedItems] = useState("");
  const [isLoading, setloading] = useState(true);

  // JUST FOR TRY
  const [num, setNumber] = useState(true);
  const [action, setAction] = useState("return");

  const calc = () => {
    if (num) {
      return <span className="status_alert">ALERT</span>;
    }
  };

  // toast.configure();
  // const Toast = () => {
  //   toast("Test Notification", { position: toast.POSITION.TOP_RIGHT });
  // };

  const Try = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        toast.success("Item Added Successfully");
      })
      .catch((err) => {
        // alert("There is some Unexpected Error!!!");
        toast.error("Error");
      });
  };

  useEffect((e) => {
    axios.get("https://empup.herokuapp.com/api/feedback/BVznoh").then((res) => {
      // console.log(addedItems);
      console.log(res.data.data);
      setAddedItems(res.data.data);
      setloading(false);
    });
  }, []);

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
        <p className="table__name">Add Items to the Stock</p>
        <div className="table_search_filter">
          <div className="input_bar">
            <i className="fas fa-search"></i>
            <input
              id="input_bar"
              type="text"
              placeholder="Enter SKU Number"
              autocomplete="off"
            />
            <i class="fas fa-plus-square fa-2x" onClick={Try}></i>
          </div>

          {/* <Calender /> */}
        </div>

        {isLoading ? (
          <div className="loading">
            <FadeLoader height={10} width={5} margin={3} color="green" />
          </div>
        ) : (
          <table id="customers">
            <tr>
              <th>SKU Number</th>
              <th>Article Number</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>

            {[...addedItems].map((newFeedback) => (
              <tr>
                <td>{newFeedback.fTitle}</td>
                <td>1620</td>
                <td>{newFeedback.fDept}</td>
                <td>40</td>
                <td>20</td>
                <td>{calc()}</td>
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
          <p className="table__name">Add Items to the Stock</p>
          <div className="table_search_filter">
            <div className="input_bar">
              <i className="fas fa-search"></i>
              <input
                id="input_bar"
                type="text"
                autocomplete="off"
                placeholder="Enter Barcode Number"
              />
              <i class="fas fa-plus-square fa-2x" onClick={Try}></i>
            </div>

            <Calender />
          </div>

          {isLoading ? (
            <div className="loading">
              <FadeLoader height={10} width={5} margin={3} color="green" />
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

              {[...addedItems].map((newFeedback) => (
                <tr>
                  <td>{newFeedback.fTitle}</td>
                  {/* <td>1620</td> */}
                  <td>{newFeedback.fDept}</td>
                  <td>40</td>
                  {/* <td>20</td> */}
                  <td>
                    <span
                      className={
                        action === "sold"
                          ? "action"
                          : action === "dispatch"
                          ? "dispatch"
                          : "return"
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
