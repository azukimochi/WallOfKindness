import React from "react";
import "./SearchResults.css";


const NoResults = () =>
    <div>
      <div className="row noResults" id="noResults" />
      <div className="noneResults">
        <p className="noResults">There are no results for your search, please try again</p>
      </div>
    </div>

export default NoResults;
