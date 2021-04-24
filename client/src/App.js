import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddItem from "./pages/AddPage/AddItem";
import Dispatch from "./pages/DispatchPage/Dispatch";
import Return from "./pages/ReturnPage/Return";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import ReportBug from "./components/ReportBug";
import AboutApp from "./components/AboutApp";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Sidebar /> */}
        <div className="app__body">
          <Navbar />
          <Switch>
            <Route path="/add" exact={true} component={AddItem} />
            <Route path="/dispatch" exact={true} component={Dispatch} />
            <Route path="/return" exact={true} component={Return} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/report" component={AboutApp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
