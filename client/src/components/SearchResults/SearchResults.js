import React from "react";
import "./SearchResults.css";


const SearchResults = props => (
    
    <div>
        <ul className="list-group search-results">
            {/* <h2> Results</h2> */}
            {console.log("props is:",props)}
            {props.results.map(result => (
                
                <li key={result.id} className="list-group-item">
             
                    <h4>firstName: {result.firstName}</h4>
                    <p> Wall: {result.wallName}</p>
                    <p> email: {result.email}</p>
                    <p> zipcode: {result.zipCode}</p>
                    <button className="btn btn-primary">Request</button>
                    {/* <button className="btn btn-primary" onClick={() => props.handleRequestButton(props._id)}>Request</button> */}
                </li>
              ))}
        </ul>
    </div>


);

export default SearchResults;