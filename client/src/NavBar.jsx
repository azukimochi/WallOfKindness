// import React, { Component } from 'react';
// import { NavLink, Link } from "react-router-dom";
// import "./Navbar.css";

// const NavBar = (props) => {
// 	return (
// 		<div>
// 			<nav className="navbar navbar-inverse">
// 				<div className="container-fluid wrapperNav">
// 					<div className="navbar-header customNav">
// 						<a className="navbar-brand " href="#">Wall of Kindness</a>
// 					</div>
// 					{/* <div className='NavBar'> */}

// 					{/* <ul className="nav navbar-nav"> */}

// 						{/* <li className={
//     			window.location.pathname === "/" || window.location.pathname === "/home"
//      			 ? "active"
//      			 : ""
//   			}>
//     			<NavLink to="/" >Home</NavLink>
//     		</li> */}
// 						{props.currentUser
// 							? (
// 								<div>
// 									<ul className="nav navbar-nav">
// 										<li className={
// 											window.location.pathname === "/" || window.location.pathname === "/home"
// 												? "active"
// 												: ""
// 										}>
// 											<NavLink to="/" >Home</NavLink>
// 										</li>
// 										<li className={
// 											window.location.pathname === "/search"
// 												? "active"
// 												: ""
// 										}>
// 											<NavLink to="/search" >Search</NavLink>
// 										</li>

// 										<li className={
// 											window.location.pathname === "/dashboard"
// 												? "active"
// 												: ""
// 										}>
// 											<NavLink to="/dashboard" >Dashboard</NavLink>
// 										</li>
// 										{/* <NavLink to="/vip">VIP</NavLink> */}
// 										{/* <NavLink to="/logout">Log Out</NavLink> */}


// 									</ul>
// 									<ul className="nav navbar-nav navbar-right">

// 										<li>
// 											<a href="/logout" className="nav-link" >
// 												<img src=""
// 													className="rounded-circle"
// 													style={{ width: '25px', marginRight: '5px' }} />
// 												<span className="glyphicon glyphicon-log-out"></span> Logout
// 				   </a>
// 										</li>
// 									</ul>



// 								</div>

// 							)
// 							: (
// 								<div>
// 									<ul className="nav navbar-nav">
// 									<li className={
//     			window.location.pathname === "/" || window.location.pathname === "/home"
//      			 ? "active"
//      			 : ""
//   			}>
//     			<NavLink to="/" >Home</NavLink>
//     		</li>


// 										<li className={
// 											window.location.pathname === "/search"
// 												? "active"
// 												: ""
// 										}>
// 											<NavLink to="/search" >Search</NavLink>
// 										</li>
// 									</ul>

// 									<ul className="nav navbar-nav navbar-right">
// 										<li className={
// 											window.location.pathname === "/signup"
// 												? "active"
// 												: ""
// 										}>
// 											<NavLink to="/signup" ><span className="glyphicon glyphicon-user"></span> Sign Up</NavLink>
// 										</li>

// 										<li className={
// 											window.location.pathname === "/login"
// 												? "active"
// 												: ""
// 										}>
// 											<NavLink to="/login" ><span className="glyphicon glyphicon-log-in"></span> Sign In</NavLink>
// 										</li>
// 									</ul>
// 								</div>

// 							)
// 						}

// 					{/* </ul> */}
// 				</div>
// 			</nav>
// 		</div>
// 	)
// }

// export default NavBar
