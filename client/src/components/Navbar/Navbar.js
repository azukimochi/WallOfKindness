import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class NavBar extends Component {
  componentDidMount = () => {
    console.log("Nav bar mounted");
  };
  render() {
    const isAuthenticated = localStorage.getItem("auth");

    const authPages = (
      <div>
        <ul className="nav navbar-nav">
          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/home"
                ? "active"
                : ""
            }
          >
            <NavLink className="activeTwo" to="/">Home</NavLink>
          </li>

          <li
            className={window.location.pathname === "/search" ? "active" : ""}
          >
            <NavLink to="/search">Search</NavLink>
          </li>

          <li
            className={
              window.location.pathname === "/dashboard" ? "active" : ""
            }
          >
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/logout" className="nav-link">
              <img
                src=""
                alt=""
                className="rounded-circle"
                style={{ width: "25px", marginRight: "5px" }}
              />
              <span className="glyphicon glyphicon-log-out" /> Logout
            </a>
          </li>
        </ul>
      </div>
    );

    const guestPages = (
      <div>
        <ul className="nav navbar-nav">
          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/home"
                ? "active"
                : ""
            }
          >
            <NavLink className="activeTwo" to="/">Home</NavLink>
          </li>

          <li
            className={window.location.pathname === "/search" ? "active" : ""}
          >
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li
            className={window.location.pathname === "/signUp" ? "active" : ""}
          >
            <NavLink to="/signup">
              <span className="glyphicon glyphicon-user" /> Sign Up
            </NavLink>
          </li>

          <li className={window.location.pathname === "/login" ? "active" : ""}>
            <NavLink to="/login">
              <span className="glyphicon glyphicon-log-in" /> Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    );

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header customNav">
              <a className="navbar-brand " href="/">
                Wall of Kindness
              </a>
            </div>

            {isAuthenticated === "true" ? authPages : guestPages}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
