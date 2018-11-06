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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import SearchResults from "../../components/MakeRequest";

const emailConfirmation = () => toast.success("Your e-mail has been successfully sent", { position: toast.POSITION.TOP_CENTER});

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
        this.clearEmailForm();
        
        // this.emailButtonEffect()
        this.emailSentMessage();
    };
    emailButtonEffect(){
        let effect = document.getElementById('emailSendButton');
        effect.classList.add('running');
        setTimeout(function(){effect.classList.remove('running')}, 2000);
      };

      clearEmailForm(){
        document.getElementById('emailFrom').value = '';
        document.getElementById('emailSubject').value = '';
        document.getElementById('emailBody').value = '';
    
    };



    emailSentMessage(){
        let toast = document.getElementById('toast');
        toast.classList.remove('invisible');
        setTimeout(function(){toast.classList.add('invisible')}, 2000);
        document.getElementById('emailForm').classList.add("invisible");
        emailConfirmation(); 
        
      
    };

    handleRangeChange = event => {
        this.setState({ range: event.target.value });
    };

    searchButtonEffect(){
        let effect = document.getElementById('effect');
        effect.classList.add('running');
        setTimeout(function(){effect.classList.remove('running')}, 2000);
      }

    handleSearchBtnSubmit = event => {

        event.preventDefault();
        this.searchButtonEffect();
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
                    <ToastContainer />
                </Wrapper>

            </div>

        );
    }

}

export default Search;