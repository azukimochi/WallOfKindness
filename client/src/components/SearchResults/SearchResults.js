import React from "react";
import "./SearchResults.css";


const SearchResults = props => 
// console.log("props:" , props.results.length)
props.results.length === 0 ?
    (
        <div className="row" id="noResults">
        <p> No results </p>
        </div>
    )
    :
    (
    <div className="row" id="resultsSection">
        <div className="col-lg-12">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title results">
                        <strong>
                            Results
                                </strong>
                    </h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group search-results">
                        {/* <h2> Results</h2> */}
                        {console.log("props is:", props)}
                        {props.results.map(result => (

                            <li key={result.id} className="list-group-item">
                                <h4>firstName: {result.firstName}</h4>
                                <p> Wall: {result.wallName}</p>
                                <p> email: {result.email}</p>
                                <p> zipcode: {result.zipCode}</p>
                                <button 
                                className="btn btn-primary"
                                onClick={() => props.handleRequestButton(props._id)}
                                >Request</button>
                                {/* <button className="btn btn-primary" onClick={() => props.handleRequestButton(props._id)}>Request</button> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>


)

export default SearchResults;