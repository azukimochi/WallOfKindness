import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
// import { Col, Row, Container } from "../../components/Grid";
import SearchWall from "../../components/SearchWalls";
import SearchResults from "../../components/SearchResults";
import API from "../../utils/API";
import Autocomplete from "react-autocomplete";
import { giftTypeStock, matchGiftType } from "./dataGiftType";
import { giftNameStock, matchGiftName } from "./dataGiftName";
import axios from 'axios'; 
import "./Search.css";

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
        hasSearched: false,
        showEmailForm: false,
        giftType: "",
        giftName: ""

    };


    displaySearchResults = () => {
        return this.state.results.map(result => {
            if (result) {
                <SearchResults

                    id={result._id}
                    key={result._id}
                    gifts={result.gifts}
                    wallName={result.wallName}
                    name={result.name}
                    email={result.email}
                    zipCode={result.zipCode}
                    city={result.city}
                // showEmailForm={result.showEmailForm}
                // address={result.streetAddress1}
                // handleRequestButton={this.handleRequestButton}



                />
            }



        })
    }

    handleErrorMessage = () => {
        this.setState({ errorMessage: "Please fill in all fields before searching." })
        console.log(this.state.errorMessage);
    }
    handleGiftsChange = event => {
        this.setState({ gifts: event.target.value.toLowerCase() });
    }

    handleGiftsInputChange = (event, giftType) => {
        this.setState({ giftType: event.target.value.toLowerCase() })
    }

    handleGiftsType = giftType => {
        this.setState({ giftType })
    }

    handleAreaChange = event => {
        this.setState({ address: event.target.value });
    };

    handleRequestButton = event => {
        event.preventDefault();
        document.getElementById('emailForm').classList.remove("invisible");
        // this.setState({ showEmailForm: true });
        console.log("hello")

    };

    clearEmailForm(){
        document.getElementById('emailFrom').value = '';
        document.getElementById('emailSubject').value = '';
        document.getElementById('emailBody').value = '';
    
    };

    sendEmail=(e)=>{
        e.preventDefault();



        // set route to send through the email
        axios({
          method: 'post',
          url: '/api/send/mail',
          params: {
            emailTo: this.state.results[0].email,
            emailFrom: document.getElementById('emailFrom').value,
            emailSubject: document.getElementById('emailSubject').value,
            emailBody: document.getElementById('emailBody').value
          }
        }).then((response) => {
          console.log(response);
          console.log(this.state.results[0].email);

        })
        // this.clearEmailForm();
        // this.emailSentMessage();
      
    };

    emailSentMessage(){
        let toast = document.getElementById('toast');
        toast.classList.remove('invisible');
        setTimeout(function(){toast.classList.add('invisible')}, 2000);
      
    };

    handleRangeChange = event => {
        this.setState({ range: event.target.value });
    };

    handleSearchBtnSubmit = event => {

        event.preventDefault();
        // console.log(this.state.gifts);
        // if (this.state.item && this.state.area && this.state.range){
        if (this.state.giftType) {
            API.lookForGifts({
                gifts: this.state.giftType,
                address: this.state.address,
                range: this.state.range
            })

                .then(res => {
                    let resultsArray = [];
                    console.log("results:", res);
                    res.data.forEach(function (element) {
                        console.log(element);
                        resultsArray.push(element);

                    });
                    console.log("result array:", resultsArray);
                    this.setState({ results: resultsArray })
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
        if (this.state.giftType === "" || this.state.address === "" || this.state.range === "") {
            this.handleErrorMessage();
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
                        handleGiftsType={this.handleGiftsType}
                        handleGiftsInputChange={this.handleGiftsInputChange}
                        handleAreaChange={this.handleAreaChange}
                        handleRangeChange={this.handleRangeChange}
                        handleSearchBtnSubmit={this.handleSearchBtnSubmit}
                        displaySearchResults={this.displaySearchResults}
                        errorMessage={this.state.errorMessage}
                        giftTypeStock={this.giftTypeStock}
                        giftType={this.state.giftType}

                    />
                    

                    {this.state.hasSearched ?
                        (
                            <SearchResults

                        results={this.state.results}
                        handleRequestButton={this.handleRequestButton}
                        sendEmail={this.sendEmail}
                    
                    />
                )
                :
                
                    <h1 class="searchWelcome">Fill in the fields above to search for a gift.</h1>
                
                }
                    {/* <MakeRequest /> */}
                </Wrapper>

            </div>

        );
    }

}

export default Search;