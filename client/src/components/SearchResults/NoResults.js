import React from "react";
import "./SearchResults.css";
import "../../pages/Search/Search.css";
import { Col } from "react-grid-system";


const NoResults = () =>
  <Col sm={12}>
    <div>
      <div className="noneResults">
        <hr style={{ height: '1px', backgroundColor: '#e81e17', textAlign: 'center', margin: '0 auto' }} />
        <h3 className="resultTitle">Results</h3>
        <p className="noResults">There are no results for your search. Please try another search request.</p>
      </div>
    </div>
  </Col>

export default NoResults;
