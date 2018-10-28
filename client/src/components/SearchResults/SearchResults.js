import React from "react";
import "./SearchResults.css";


const SearchResults = props => (
    <div>
        <ul className="list-group search-results">
            {/* <h2> Results</h2> */}
            {props.results.map(result => (
                <li key={props.id} className="list-group-item">
                    <h4>firstName: {props.firstName}</h4>
                    {/* <p> Wall: {this.props.wallName}</p> */}
                    {/* <p> email: {this.props.email}</p> */}
                    {/* <p> zipcode: {this.props.zipCode}</p> */}
                    <button className="btn btn-primary">Request</button>
                    {/* <button className="btn btn-primary" onClick={() => props.handleRequestButton(props._id)}>Request</button> */}
                </li>
              ))}
        </ul>
    </div>


);

export default SearchResults;