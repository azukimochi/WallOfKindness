import React from "react";
import "./SearchWall.css";
import Autocomplete from "react-autocomplete";
import "./autocomplete.css"



const SearchWall = props => (
  <div className="searchBox">
    <div className="container">
      <h2 className="searchTitle">Search</h2>
      <p className="errorMessage">{props.errorMessage}</p>

      <div className="row inputRows">
        <div className="col-sm-4">
          <label htmlFor="item">Item</label>
          <br />
          <Autocomplete
            key={props.id}
            value={props.giftType}
            inputProps={{
              id: "states-autocomplete",
              placeholder: "Type of Gift"
            }}
            wrapperStyle={{ position: "relative", display: "flex" }}
            items={props.values}
            getItemValue={item => item.name}
            onChange={props.handleGiftsInputChange}
            onSelect={props.handleGiftsInputSelect}
            renderMenu={children => <div className="menu" style={{marginTop: "37px", zIndex:"999999"}}>{children}</div>}
            renderItem={(item, isHighlighted) => (
              <div
                className={`item ${isHighlighted ? "item-highlighted" : ""}`}
                key={item.abbr}
              >
                {item.name}
              </div>
            )}
          />
        </div>


        <div className="col-sm-6">
          <label htmlFor="area">Current Location</label>
          <br />
          <input
            onFocus={props.onFocusArea}
            // onBlur={props.onBlurArea}
            onChange={props.handleAreaChange}
            name="address"
            type="text"
            className="searchArea"
            placeholder="Enter address or zip code"
            id="inputAddress"
            defaultValue={props.guestAddress}
            
          />
        </div>


        <div className="col-sm-6">
          <label htmlFor="area">Category</label>
          <br />

          <select name="category" value={props.category} onChange={props.handleCategoryChange}>
            <option value="None">Category</option>
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>



        {/* <div className="col-sm-3">
          <label htmlFor="item">Select Your Range</label>
          <br />
          <select
            onChange={props.handleRangeChange}
            name="distance"
            className="searchRange"
            id="inputRange"
            
            >
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="15" className="fifteen">15 km</option>
          </select>
        </div> */}
        <br />
        <div className="col-sm-3">
          <span />
          <br />
          <button
            id="effect"
            type="submit"
            onClick={props.handleSearchBtnSubmit}
            className="registerBtn ld-over-full-inverse searchWallBtn "
          >
            <div className="ld ld-ball ld-flip" />Search
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default SearchWall;
