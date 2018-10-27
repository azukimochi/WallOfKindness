import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
// import { Col, Row, Container } from "../../components/Grid";
import SearchWall from "../../components/SearchWalls";
import SearchResults from "../../components/SearchResults";
import API from "../../utils/API";

// import SearchResults from "../../components/MakeRequest";



class Search extends Component {

    // insert state changes and methods here
    state = {
        gifts: "",
        address: "",
        range: "",
        results: [],
        sectionTitle: ""

    };

    // componentDidMount(){
    //     this.loadWalls();
    // };
    // loadWalls = () => {
    //     API.
    // }
    displaySearchResults = () => {
        return this.state.results.map(result => {
            <SearchResults
                id={result._id}
                key={result._id}
                gifts={result.gifts}
                wallName={result.wallName}
                donor={result.firstName}
                address={result.streetAddress1}
                handleRequestButton={this.handleRequestButton}



            />
        })
    }
    handleGiftsChange = event => {
        this.setState({ gifts: event.target.value });
    }


    handleAreaChange = event => {
        this.setState({ address: event.target.value });
    };


    handleRangeChange = event => {
        this.setState({ range: event.target.value });
    };

    handleSearchBtnSubmit = event => {

        event.preventDefault();
        console.log(this.state.gifts);
        // if (this.state.item && this.state.area && this.state.range){
        if (this.state.gifts){
            API.lookForGifts({
                gifts: this.state.gifts,
                address: this.state.address,
                range: this.state.range
            })
            .then(res => this.displaySearchResults())
            .catch(err => console.log(err))
        }

    };






    render() {
        return (
            <div>
                <Wrapper>
                    <SearchWall
                        handleGiftsChange={this.handleGiftsChange}
                        handleAreaChange={this.handleAreaChange}
                        handleRangeChange={this.handleRangeChange}
                        handleSearchBtnSubmit={this.handleSearchBtnSubmit}
                        displaySearchResults={this.displaySearchResults}

                    />
                    <SearchResults

                        results={this.state.results}
                    />
                    {/* <MakeRequest /> */}
                </Wrapper>

            </div>

        );
    }

}

export default Search;