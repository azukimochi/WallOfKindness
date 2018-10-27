import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
// import { Col, Row, Container } from "../../components/Grid";
import SearchWall from "../../components/SearchWalls";
import SearchResults from "../../components/SearchResults";
// import SearchResults from "../../components/MakeRequest";



class Search extends Component {

    // insert state changes and methods here
    state = {
        item: "",
        area: "",
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
            id = {result.id}
            key = {result.id}
            item = {result.item}
            wallName = {result.wallName}
            doner = {result.firstName}
            address = {result.streetAddress1}
            handleRequestButton = {this.handleRequestButton}


            
            />
        })
    }
    handleItemChange = event => {
        this.setState({ item: event.target.value });
    }


    handleAreaChange = event => {
        this.setState({ area: event.target.value });
    };


    handleRangeChange = event => {
        this.setState({ range: event.target.value });
    };

    handleSearchBtnSubmit = event => {
        event.preventDefault();
        // if (this.state.item && this.state.area && this.state.range){
        //     API.searchWalls({
        //         item: this.state.item,
        //         area: this.state.area,
        //         range: this.state.range
        //     })
        //     .then(res => this.loadWalls())
        //     .catch(err => console.log(err))
        // }

    };






    render() {
        return (
            <div>
                <Wrapper>
                    <SearchWall
                        handleItemChange={this.handleItemChange}
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