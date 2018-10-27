import React from "react";
import "./SearchWall.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchWall = props => (
    <div className="searchBox">
        <div className="container">
            <h2 className="searchTitle">Search</h2>
            <p></p>
            <div className="row">
                <div className="col-sm-3">
                    <label htmlFor="item">Item</label><br />
                    <input
                        onChange={props.handleItemChange}
                        name="item"
                        type="text"
                        className="searchItem"
                        placeholder="e.g.Rice, Pasta, T-shirt"
                        id="inputItem"
                    />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="area">Area</label><br />
                    <input
                        onChange={props.handleAreaChange}
                        name="area"
                        type="text"
                        className="searchArea"
                        placeholder="Enter address or zip code"
                        id="inputAddress"
                    />

                </div>
                <div className="col-sm-3">
                    <label htmlFor="item">Select Your Range</label><br />
                    <input
                        onChange={props.handleRangeChange}
                        name="range"
                        type="text"
                        className="searchRange"
                        placeholder="eg. 5 km"
                        id="inputRange"
                    />

                </div>
                <div className="col-sm-3">
                    <span></span><br />
                    <button
                        type="submit"
                        onClick={props.handleSearchBtnSubmit}
                        className="btn btn-success"
                    >
                        Search
                     </button>

                </div>
            </div>

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
                            {props.displaySearchResults()}
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>

);

export default SearchWall;
