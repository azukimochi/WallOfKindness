import React from "react";
import "./SearchResults.css";
import { Col } from "react-grid-system";

const SearchResults = props => (
  <Col sm={4}>
    <div className="card-deck">
      <div className="card text-center">
        <div className="card-header" id="resultsHeader" />
        <div className="card-body" id="resultsDiv">
          <p className="card-text">Wall Name: {props.wallName.toUpperCase()}</p>
          <p className="card-text"> Gift Name: {props.item}</p>
          <p className="card-text"> Distance:</p>
          <p className="card-text">{props.distanceM} m</p>
          <p className="card-text">{props.distanceKM} km</p>
          <button
            className="registerBtn "
            name={props.email}
            onClick={props.openModal}
          >
            Request
          </button>
        </div>
      </div>
    </div>
  </Col>
);

export default SearchResults;
