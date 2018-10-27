import React from "react";
import "./SearchResults.css";


const SearchResults = props => (
    <ul className="list-group search-results">
        {/* <h2> Results</h2> */}
        {props.results.map(result => (
            <li key={result} className="list-group-item">
                <h4>Gifts: {props.gifts}</h4>
                <p> Wall: {props.wallName}</p>
                <p> Doner: {props.donor}</p>
                <p> Address: {props.streetAddress1}</p>
                <button className="btn btn-primary">Request</button>
                {/* <button className="btn btn-primary" onClick={() => props.handleRequestButton(props._id)}>Request</button> */}
            </li>
        ))}
    </ul>

  
);

export default SearchResults;