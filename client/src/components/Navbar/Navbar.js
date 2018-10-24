import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

class NavBar extends Component {

  
  render(){

    return(
      <div>
<nav className="navbar navbar-inverse">

  <div className="container-fluid">
    <div className="navbar-header customNav">
      <a className="navbar-brand " href="#">Wall of Kindness</a>
    </div>
    
    <ul className="nav navbar-nav">

    <li className={
    window.location.pathname === "/" || window.location.pathname === "/home"
      ? "active"
      : ""
  }>
    <NavLink to="/" >Home</NavLink>
    </li>

    <li className={
    window.location.pathname === "/search"
      ? "active"
      : ""
  }>
    <NavLink to="/search" >Search</NavLink>
    </li>

<li className={
    window.location.pathname === "/dashboard"
      ? "active"
      : ""
  }>
    <NavLink to="/dashboard" >Dashboard</NavLink>
    </li>

    </ul>
    <ul className="nav navbar-nav navbar-right">
    <li className={
    window.location.pathname === "/signUp" 
      ? "active"
      : ""
  }>
    <NavLink to="/signUp" ><span class="glyphicon glyphicon-user"></span> Sign Up</NavLink>
    </li>

    <li className={
    window.location.pathname === "/signIn" 
      ? "active"
      : ""
  }>
    <NavLink to="/signIn" ><span class="glyphicon glyphicon-log-in"></span> Sign In</NavLink>
    </li>
      
    </ul>
  </div>
</nav>

      
      
      </div>
  )} 
} 


export default NavBar;
