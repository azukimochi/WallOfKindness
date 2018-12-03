import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/LogOut";
import SignUp from "./pages/SignUp";

import Main from "./pages/Main";
import Search from "./pages/Search";

import DashboardPage from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";

// ________________START OF KAREN'S CODE_____________________
const App = () => (
  <Router>
    <div className="appContainer">
      <NavBar />
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/logout" component={LogOut} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/" component={Main} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
// ______________END OF KAREN'S CODE___________________________
