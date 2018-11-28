import React from "react";
import "./SearchResults.css";
import { Col } from "react-grid-system";

const SearchResults = props =>
  props.results.length === 0 ? (
    <div>
      <div className="row noResults" id="noResults" />
      <div className="noneResults">
        <p className="noResults">There are no results for your search, please try again</p>
      </div>
    </div>
  ) : (
    <Col sm={4}>
      <div className="card-deck">
        <div className="card text-center">
          <div className="card-header" id="resultsHeader" />
          <div className="card-body" id="resultsDiv">
            {console.log("props is:", props)}

            <p className="card-text">Full Name: {props.name}</p>
            <p className="card-text">Wall Name: {props.wallName.toUpperCase()}</p>
            <p className="card-text"> Gift Name: {props.giftType}</p>
            {/* <p className="card-text"> Email Address: {props.email}</p> */}
            {/* <p className="card-text"> City: {props.city.toUpperCase()}</p> */}
            {/* <p className="card-text"> Address: {props.address}</p> */}
            <p className="card-text"> Distance: {props.distance.toFixed(0)} m</p>

            <button
              className="registerBtn "
              name={props.email}
              onClick={props.openModal}
            >
              Request
            </button>

            <h4 className="invisible" id="toast">
              Email Sent Successfully!
            </h4>
          </div>
        </div>
      </div>
    </Col>
  );

export default SearchResults;
