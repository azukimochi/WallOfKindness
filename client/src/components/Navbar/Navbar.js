import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      appName
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/main"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/about" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
       
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
        </li>

         <li className="nav-item">
          <Link
            to="/signIn"
            className={
              window.location.pathname === "/signIn"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sign-In
          </Link>
        </li>

         <li className="nav-item">
          <Link
            to="/signOut"
            className={
              window.location.pathname === "/signOut"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sign-Out
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;