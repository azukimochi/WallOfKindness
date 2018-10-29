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
        sectionTitle: "",
        limit: null

    };

    // componentDidMount(){
    //     this.loadWalls();
    // };
    // loadWalls = () => {
    //     API.
    // }
    displaySearchResults = () => {
        return this.state.results.map(result => {
            if(result){
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
            }
           


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
            
            .then(res => {
                let resultsArray = [];
                // let finalArray =[];
                console.log("results:" , res);
                res.data.forEach(function(element){
                    console.log(element);
                    resultsArray.push(element);
                    
                });
                console.log("result array:" , resultsArray);
                this.setState({results:resultsArray})
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