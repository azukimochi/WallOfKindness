import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
    <ul className="list-group search-results">
        {/* <h2> Results</h2> */}
        {props.results.map(result => (
            <li key={result} className="list-group-item">
                <h4>Item: {props.item}</h4>
                <p> Wall: {props.wall}</p>
                <p> Doner: {props.doner}</p>
                <p> Address: {props.address}</p>
                <button className="btn btn-primary" onClick={() => props.handleRequestButton(props.id)}>Request</button>
            </li>
        ))}
    </ul>

  
);

export default SearchResults;