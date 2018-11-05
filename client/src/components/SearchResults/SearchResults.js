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
        <div className="col-lg-12 resultsBox">
            <div className="panel panel-primary">
                <div className="panel-heading" id="resultsHeader">
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

                            <li key={result.id} className="list-group-item resultDiv">
                                <h4>Full Name: {result.name}</h4>
                                <p> Wall Name: {result.wallName.toUpperCase()}</p>
                                <p> Email Address: {result.email}</p>
                                <p> City: {result.city.toUpperCase()}</p>
                                <p> Zip Code: {result.zipCode}</p>
                                <button className="btn btn-primary requestBtn" onClick={props.handleRequestButton}>Request</button>
                                
                                <h4 className="invisible" id="toast">Email Sent Successfully!</h4>
                                    <form id='emailForm' className="invisible">
                                        <h4>To: {result.email}</h4>
                                        <h4>From: <input type="text" id="emailFrom" placeholder="Your Email"/></h4>
                                        <h4><input type="text" id="emailSubject" placeholder="Subject Line" /></h4>
                                        <br />
                                        <textarea id="emailBody"> </textarea>
                                        <br />
                                        <button onClick={props.sendEmail} 
                                        type="submit" 
                                        id="emailSendButton" 
                                        className="btn btn-success ld-over-full-inverse">
                                        <div className="ld ld-ball ld-flip"></div>Send
                                        
                                        </button>
                                    </form>
                           
                             

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