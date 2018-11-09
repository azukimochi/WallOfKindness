import React from "react";
import "./SearchWall.css";
import Autocomplete from "react-autocomplete";


const SearchWall = props => (

    

    <div className="searchBox">
        <div className="container">
            <h2 className="searchTitle">Search</h2>
            <p className="errorMessage">{props.errorMessage}</p>





            <div className="row inputRows">
              

                <div className="col-sm-3" >
                    <label htmlFor="item">Item</label><br />
                    <Autocomplete
                        key={props.id}
                        value={props.giftType}
                        inputProps={{ id: 'states-autocomplete', placeholder: 'Type of Gift' }}
                        wrapperStyle={{ position: 'relative', display: 'flex' }}
                        items={props.values}
                        getItemValue={item => item.name}
                        
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

         

        </div>
    </div>

)




export default SearchWall;
