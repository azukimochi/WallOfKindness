import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchResults from "../../../../../Desktop/full-stack/reactwk31/pupster/src/components/SearchResults";
// import SearchForm from "../components/SearchWalls";
// import SearchResults from "../components/SearchResults";
// import SearchResults from "../components/MakeRequest";



class Search extends Component {

// insert state changes and methods here

    render() {
        return (
            <div>
                <Container>
                    <SearchWalls />
                    <SearchResults />
                    <MakeRequest />
                </Container>

            </div>

        );
    }

}

export default Search;