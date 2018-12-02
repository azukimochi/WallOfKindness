import React from "react";
import "./SearchResults.css";


const NoResults = () =>
    <div>
      <div className="noneResults">
      <hr style={{ height: '1px', backgroundColor: '#e81e17', width: '80%', textAlign: 'center', margin: '0 auto' }} />
      <h3 className="resultTitle">Results</h3>
      <p className="noResults">There are no results for your search. Please try another search request.</p>
      </div>
    </div>

export default NoResults;
