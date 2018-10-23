import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
    <div className="searchBox">
        <div className="container">
            <h1 className="searchTitle">Search For a Wall</h1>
            <div className="row">
                <div className="col-sm-3">
                    <label htmlFor="item">Item</label>
                    <input
                        onChange={props.handleInputChange}
                        name="item"
                        type="text"
                        className="searchItem"
                        placeholder="e.g.Rice, Pasta, T-shirt"
                        id="inputItem"
                    />
                </div>
                <div className="col-sm-3">
                    <label htmlFor="area">Area</label>
                    <input
                        onChange={props.handleInputChange}
                        name="area"
                        type="text"
                        className="searchArea"
                        placeholder="Enter address or zip code"
                        id="inputAddress"
                    />

                </div>
                <div className="col-sm-3">
                    <label htmlFor="item">Select Your Range</label>
                    <input
                        onChange={props.handleInputChange}
                        name="range"
                        type="text"
                        className="searchRange"
                        placeholder="eg. 5 km"
                        id="inputRange"
                    />

                </div>
                <div className="col-sm-3">
                    <button
                        type="submit"
                        onClick={props.handleFormSubmit}
                        className="btn btn-success"
                    >
                        Search
                     </button>

                </div>
            </div>
        </div>
    </div>

);

export default SearchForm;
