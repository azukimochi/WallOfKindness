import React from "react";
import "./SearchResults.css";
import {Col } from 'react-grid-system';


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
    
    <Col sm={4}>
    <div className="card-deck">
            <div className="card text-center">
                <div className="card-header" id="resultsHeader">
                
                </div>
                <div className="card-body" id="resultsDiv">
                
                    {/* <ul className="list-group search-results"> */}
                        {/* <h2> Results</h2> */}
                        {console.log("props is:", props)}
                        {/* {props.results.map(result => ( */}

                            {/* <li key={props.id} className="list-group-item resultDiv"> */}

                                <p className="card-text">Full Name: {props.name}</p>
                                <p className="card-text"> Wall Name: {props.wallName.toUpperCase()}</p>
                                <p className="card-text"> Gift Name: {props.gifts}</p>
                                <p className="card-text"> Email Address: {props.email}</p>
                                <p className="card-text"> City: {props.city.toUpperCase()}</p>
                                <p className="card-text"> Address: {props.zipCode}</p>
                                {/* <p> latitude: {result.latitude}</p> */}
                                {/* <p> longitude: {result.longitude}</p> */}
                                <p className="card-text">Distance: {props.distanceCalc(props.userLat,props.userLong,props.guestLat,props.guestLong).toFixed(0)}km</p>
                                <button className="registerBtn " onClick={props.openModal}>Request</button>
                                {/* btn btn-primary requestBtn  */}
                                <h4 className="invisible" id="toast">Email Sent Successfully!</h4>
                                    {/* <form id='emailForm' className="invisible">
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
                                    </form> */}
                           
                             

                               
                            {/* </li> */}
                        {/* ))} */}
                    {/* </ul> */}
                </div>
            </div>
    </div>
    

</Col>
)

export default SearchResults;