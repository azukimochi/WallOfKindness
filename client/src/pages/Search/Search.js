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
        errorMessage: "",
        results: [],
        sectionTitle: "",
        limit: null,
        hasSearched:false
    };


    displaySearchResults = () => {
        return this.state.results.map(result => {
            <SearchResults
                id={result._id}
                key={result._id}
                // gifts={result.gifts}
                wallName={result.wallName}
                firstName={result.firstName}
                email = {result.email}
                zipCode = {result.zipCode}
                // address={result.streetAddress1}
                // handleRequestButton={this.handleRequestButton}



            />
        })
    }

    handleErrorMessage = () => {
        this.setState({errorMessage: "Please fill in all fields before searching."})
        console.log(this.state.errorMessage);
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
        // console.log(this.state.gifts);
        // if (this.state.item && this.state.area && this.state.range){
        if (this.state.gifts){
            API.lookForGifts({
                gifts: this.state.gifts,
                address: this.state.address,
                range: this.state.range
            })
            
            .then(res => {
                let resultsArray = [];
                console.log("results:" , res);
                res.data.forEach(function(element){
                    console.log(element);
                    resultsArray.push(element);
                    
                });
                console.log("result array:" , resultsArray);
                this.setState({results:resultsArray})
                // if (resultsArray.length === 0){
                //     let resultState = this.state.results.push("Sorry. This item is not available.");
                //     this.setState({results:resultState})
                //     
                //     console.log(this.state.results);
                    
                // }
                // else {
                // }


                // resultsArray.map(({firstName, email, zipCode}) => {
                // finalArray.push({firstName:firstName, email:email, zipCode:zipCode});
                // console.log("final array:" , finalArray);
                // })
                // res.data.map(({firstName, email, zipCode}) => {
            //         resultsArray.push({firstName: firstName, email:email, zipCode:zipCode})
            //     // });
            // this.setState(prevState => ({
            //     results: [...prevState].concat(resultsArray).splice(0, this.state.limit)
            // }), console.log("golabiiii",this.state.limit))
         
            // console.log("state is " + JSON.stringify(this.state));
            })
            .catch(err => console.log(err))
        }
        if (this.state.gifts === "" || this.state.address === "" || this.state.range === ""){
            this. handleErrorMessage();
            console.log("working");
            
        }  
        
        this.setState({
            hasSearched: true
        })

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
                        errorMessage={this.state.errorMessage}


                    />

                { this.state.hasSearched ? 
                (
                    <SearchResults

                        results={this.state.results}
                    
                    />
                )
                :
                
                    <h1>welcome!</h1>
                
                }
                    {/* <MakeRequest /> */}
                </Wrapper>

            </div>

        );
    }

}

export default Search;