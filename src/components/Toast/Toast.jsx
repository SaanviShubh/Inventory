import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const Toast = () => {
  toast("Test Notification", { position: toast.POSITION.TOP_RIGHT });
};

export default Toast;
