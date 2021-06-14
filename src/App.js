import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddItem from "./pages/AddPage/AddItem";
import Dispatch from "./pages/DispatchPage/Dispatch";
import Return from "./pages/ReturnPage/Return";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Transaction from "./pages/Transaction/Transaction";
import Login from "./pages/LoginPage/Login";
import Barcode from "./pages/Barcode/Barcode";
import CurrentStock from "./pages/CurrentStock/CurrentStock";
import { HashLoader } from "react-spinners";
import SidebarModal from "./components/SidebarModal";
import "./components/SidebarModal.css";

const Main = () => {
  const history = useHistory();

  React.useEffect(() => {
    var myToken = localStorage.getItem("token");
    if (!myToken) history.push("/login");
    else history.push("/");
  }, []);
  return (
    <>
      <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Route
          path="/recent_transaction"
          exact={true}
          component={Transaction}
        />

        <div className="App">
          <Sidebar />
          <div className="app__body">
            <Navbar />
            <Route path="/add" exact={true} component={AddItem} />
            <Route path="/dispatch" exact={true} component={Dispatch} />
            <Route path="/return" exact={true} component={Return} />
            <Route path="/barcode-generator" exact={true} component={Barcode} />
            <Route path="/currentstock" exact={true} component={CurrentStock} />
            <Route path="/" exact={true} component={Dashboard}></Route>
            {/* <Redirect to="/" /> */}
            <Footer />
          </div>
        </div>
        <div id="SidebarModal"></div>
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;
