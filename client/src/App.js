import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddItem from "./pages/AddPage/AddItem";
import Dispatch from "./pages/DispatchPage/Dispatch";
import Return from "./pages/ReturnPage/Return";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemList from "./pages/AddPage/ItemList";
import Transaction from "./pages/Transaction/Transaction";
import Login from "./pages/LoginPage/Login";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Sidebar /> */}
        <div className="app__body">
          {/* <Navbar /> */}
          <Switch>
            <Route path="/add" exact={true} component={AddItem} />
            <Route path="/itemList" exact={true} component={ItemList} />
            <Route path="/dispatch" exact={true} component={Dispatch} />
            <Route path="/return" exact={true} component={Return} />
            <Route
              path="/recent_transaction"
              exact={true}
              component={Transaction}
            />
            <Route path="/login" exact={true} component={Login} />
            <Route path="/" component={Dashboard} />s
          </Switch>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
