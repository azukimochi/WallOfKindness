import React from "react";
import "./SearchWall.css";
import Autocomplete from "react-autocomplete";
// import { giftTypeStock, matchGiftType } from "../../pages/Search/dataGiftType";
// import { giftNameStock, matchGiftName } from "../../pages/Search/dataGiftName";



// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchWall = props => (
    <div className="searchBox">
        <div className="container">
            <h2 className="searchTitle">Search</h2>
            <p className="errorMessage">{props.errorMessage}</p>
            <div className="row inputRows">
                {/* <div className="col-sm-3">
                    <label htmlFor="item">Item</label><br />
                    <input
                        onChange={props.handleGiftsChange}
                        name="gifts"
                        type="text"
                        className="searchItem"
                        placeholder="e.g.Rice, Pasta, T-shirt"
                        id="inputItem"
                    />
                </div> */}

                <div className="col-sm-3" >
                    <label htmlFor="item">Item</label><br />
                    <Autocomplete
                        key={props.id}
                        value={props.giftType}
                        inputProps={{ id: 'states-autocomplete', placeholder: 'Type of Gift' }}
                        wrapperStyle={{ position: 'relative', display: 'flex' }}
                        items={props.values}
                        getItemValue={item => item.name}
                        // shouldItemRender={matchGiftType}
                        onChange={props.handleGiftsInputChange}
                        // onSelect={props.handleGiftsType}
                        renderMenu={children => (
                            <div className="menu">
                                {children}
                            </div>
                        )}
                        renderItem={(item, isHighlighted) => (
                            <div
                                className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                                key={item.abbr} >
                                {item.name}
                            </div>
                        )}
                    />
                </div>





                <div className="col-sm-3">
                    <label htmlFor="area">Area</label><br />
                    <input
                        onChange={props.handleAreaChange}
                        name="address"
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

                </div><br/>
                <div className="col-sm-3">
                    <span></span><br />
                    <button id="effect"
                        type="submit"
                        onClick={props.handleSearchBtnSubmit}
                        className="registerBtn ld-over-full-inverse searchWallBtn ">
                        <div className="ld ld-ball ld-flip"></div>Search
                     </button>

                </div>
            </div>

            {/* {/* <div className="row" id="resultsSection">
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


            </div> */}

        </div>
    </div>

);

export default SearchWall;
