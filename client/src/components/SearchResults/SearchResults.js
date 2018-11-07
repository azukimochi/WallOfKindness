import React from "react";
import "./SearchResults.css";


const SearchResults = props => 


// console.log("props:" , props.results.length)
props.results.length === 0 ?
    (
        <div>
        <div className="row noResults" id="noResults">
        </div>
        <div className="noneResults">
        <p className="noResults"> There are no results for your search, please try again </p>
        </div>
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
                                <p> Gift Name: {result.gifts}</p>
                                <p> Email Address: {result.email}</p>
                                <p> City: {result.city.toUpperCase()}</p>
                                <p> Zip Code: {result.zipCode}</p>
                                {/* <p> latitude: {result.latitude}</p> */}
                                {/* <p> longitude: {result.longitude}</p> */}
                                <p>Distance in KM:{props.distanceCalc(props.userLat,props.userLong,props.guestLat,props.guestLong)}</p>
                                <button className="registerBtn " onClick={props.handleRequestButton}>Request</button>
                                {/* btn btn-primary requestBtn  */}
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
                                        className="btn btn-success ld-over-full-inverse registerBtn">
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