import React from "react";
import "./Jumbotron.css"

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
    {children}
    </div>
    <div className="opaque"></div>
  </div>
);

export default Jumbotron;
