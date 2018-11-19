import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Geocode from "react-geocode";
import { withRouter } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import SearchWall from "../../components/SearchWalls";
import SearchResults from "../../components/SearchResults";
import API from "../../utils/API";
import axios from "axios";
import "./Search.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const emailConfirmation = () =>
  toast.success("Your e-mail has been successfully sent", {
    position: toast.POSITION.TOP_CENTER
  });

class Search extends Component {
  // insert state changes and methods here
  state = {
    autoCompleteState: [],
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
    giftName: "",
    distance: "",
    guestLat: "",
    guestLong: "",
    guestAddress: "",
    userLat: "",
    userLong: ""
  };

  componentDidMount = () => {
    // API.auth()
    //     .then(res => {
    //         console.log(res.data.status)
    //         if (res.data.status !== "404") {
    //             console.log("Auth successful!")
    this.handleGiftAutocomplete();
    this.getLocation();
    this.latLong();
    // this.GetAddress();

    //     } else {
    //         console.log("Auth failed!")
    //         this.props.history.push('/login')
    //     }
    // })
    // .catch(err => console.log(err))
  };

  // getCurrentPosition
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
          latitude={result.latitude}
          longtude={result.longtude}
          distance={result.distance}
        />;
      }
    });
  };

  handleErrorMessage = () => {
    this.setState({
      errorMessage: "Please fill in all fields before searching."
    });
    console.log(this.state.errorMessage);
  };
  handleGiftsChange = event => {
    this.setState({ gifts: event.target.value.toLowerCase() });
  };

  handleGiftsInputChange = (event, giftType) => {
    this.setState({ giftType: event.target.value.toLowerCase() });
  };

  handleAreaChange = event => {


    this.setState({ address: event.target.value });
  };

  handleRequestButton = event => {
    event.preventDefault();
    document.getElementById("emailForm").classList.remove("invisible");

    console.log("hello");
  };

  clearEmailForm() {
    document.getElementById("emailFrom").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";
  }

  sendEmail = e => {
    e.preventDefault();

    axios({
      method: "post",
      url: "/api/send/mail",
      params: {
        emailTo: this.state.results[0].email,
        emailFrom: document.getElementById("emailFrom").value,
        emailSubject: document.getElementById("emailSubject").value,
        emailBody: document.getElementById("emailBody").value
      }
    }).then(response => {
      console.log(response);
      console.log(this.state.results[0].email);
    });

    this.clearEmailForm();

    this.emailSentMessage();
  };
  emailButtonEffect() {
    let effect = document.getElementById("emailSendButton");
    effect.classList.add("running");
    setTimeout(function() {
      effect.classList.remove("running");
    }, 2000);
  }

  clearEmailForm() {
    document.getElementById("emailFrom").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";
  }

  emailSentMessage() {
    let toast = document.getElementById("toast");
    toast.classList.remove("invisible");

    setTimeout(function() {
      toast.classList.add("invisible");
    }, 2000);
    document.getElementById("emailForm").classList.add("invisible");
    emailConfirmation();
  }

  handleRangeChange = event => {
    this.setState({ range: event.target.value });
  };

  handleGiftAutocomplete = event => {
    console.log("hello autocomplete", this.state.giftType);
    if (this.state.giftType || this.state.autoCompleteState.length === 0) {
      API.getAllGifts({
        gifts: this.state.giftType
      })
        .then(res => {
          let giftListFromDatabase = res.data;
          let finalGiftArray = [];
          let uniqueArray;
          let giftAutoCompleteArray;
          let autoCompleteArray = [];

          giftListFromDatabase.forEach(element => {
            let gifts = element.gifts;
            if (gifts.length === 1) {
              finalGiftArray.push(gifts[0]);
            } else {
              gifts.forEach(element => {
                finalGiftArray.push(element);
              });
            }

            let removeDuplicates = arr => {
              uniqueArray = arr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
              });
              return uniqueArray;
            };

            giftAutoCompleteArray = removeDuplicates(finalGiftArray);

            return giftAutoCompleteArray;
          });

          giftAutoCompleteArray.forEach(element => {
            let giftObject = { abbr: element, name: element };
            autoCompleteArray.push(giftObject);
            return autoCompleteArray;
          });

          this.setState({ autoCompleteState: autoCompleteArray });
        })
        .catch(err => console.log(err));
    }
  };

onFocusArea=(e)=>{
console.log("mano click kard:",e.target)
//   alert('hi hi')
document.getElementById(e.target.id).value="";
  }


  

  onBlurArea=(e)=>{
    // console.log("mano click kard:",e.target)
    //   alert('hi hi')
    document.getElementById(e.target.id).value=this.state.guestAddress;
      }

  searchButtonEffect() {
    let effect = document.getElementById("effect");
    effect.classList.add("running");
    setTimeout(function() {
      effect.classList.remove("running");
    }, 2000);
  }

  handleSearchBtnSubmit = event => {
    event.preventDefault();

    if (this.state.giftType) {
      API.lookForGifts({
        gifts: this.state.giftType,
        address: this.state.address,
        range: this.state.range
      })

        .then(res => {
          let resultsArray = [];
          console.log("results:", res);
          res.data.forEach(function(element) {
            console.log("element:", element);
            resultsArray.push(element);
          });
          console.log("result array:", resultsArray);
          this.setState({ results: resultsArray });
          // console.log("new state:", this.state.results[0].zipCode);
          let newAddress = this.state.results[0].zipCode;
          console.log("newAddress:", newAddress);
          this.latLong(newAddress);

          console.log("new state isssssss:", this.state);
        })
        .catch(err => console.log(err));
    }
    if (
      this.state.giftType === "" ||
      this.state.address === "" ||
      this.state.range === ""
    ) {
      this.handleErrorMessage();
      console.log("working");
    }

    this.setState({
      hasSearched: true
    });
  };

  distanceCalc = (lat1, lon1, lat2, lon2, unit) => {
    let radlat1 = (Math.PI * lat1) / 180;
    let radlat2 = (Math.PI * lat2) / 180;
    let theta = lon1 - lon2;
    let radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  };

  latLong = address => {
    Geocode.setApiKey("AIzaSyC_nTVvqzEckQ6WzQmCV_POw6a80BmOQPo");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();
    Geocode.fromAddress(address).then(
      response => {
        let { lat, lng } = response.results[0].geometry.location;
        console.log("lat and long are:", lat, lng);
        let newLat = lat;
        let newLong = lng;
        console.log("newlat and newlong are:", newLat, newLong);

        this.setState({
          userLat: newLat,
          userLong: newLong
        });
      },
      error => {
        console.error(error);
      }
      // ,
    );
  };

  //////////////////////////////////////////

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    }
  };

  setPosition = position => {
    this.setState({
      guestLat: position.coords.latitude,
      guestLong: position.coords.longitude
    });
    console.log("state jadide", this.state);
    this.GetAddress(this.state.guestLat, this.state.guestLong);
    // document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude;
  };

  /////////////////////Address from lat and long//////////

  GetAddress = (lat, lng) => {
    const script = document.createElement("script");
    script.src = `http://maps.googleapis.com/maps/api/js?sensor=false`;
    script.async = true;
    document.body.appendChild(script);
    console.log("alan state chie:", this.state);
    // let lat = this.state.guestLat; //43.6532; //parseFloat(document.getElementById("txtLatitude").value);
    // let lng = this.state.guestLong; //-79.3832; //parseFloat(document.getElementById("txtLongitude").value);
    const google = window.google;
    let latlng = new google.maps.LatLng(lat, lng);
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ latLng: latlng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          this.setState({
            guestAddress: results[1].formatted_address
          });
          console.log("State after grabbing Address", this.state);
          console.log("////////////////////////");
          console.log("here address", results[1].formatted_address);
          console.log("////////////////////////");
        }
      }
    });
  };

  ////////////////////////////////////////

  render() {
    return (
      <div>
        <Wrapper>
          <SearchWall
            handleGiftAutocomplete={this.handleGiftAutocomplete}
            values={this.state.autoCompleteState}
            handleGiftsChange={this.handleGiftsChange}
            // handleGiftsType={this.handleGiftsType}
            handleGiftsInputChange={this.handleGiftsInputChange}
            handleAreaChange={this.handleAreaChange}
            handleRangeChange={this.handleRangeChange}
            handleSearchBtnSubmit={this.handleSearchBtnSubmit}
            displaySearchResults={this.displaySearchResults}
            errorMessage={this.state.errorMessage}
            giftTypeStock={this.giftTypeStock}
            giftType={this.state.giftType}
            distanceCalc={this.distanceCalc}
            getLocation={this.getLocation}
            latLong={this.latLong}
            guestAddress={this.state.guestAddress}
            onFocusArea={this.onFocusArea}
            onBlurArea={this.onBlurArea}
          />

          {this.state.hasSearched ? (
            <SearchResults
              results={this.state.results}
              guestLat={this.state.guestLat}
              guestLong={this.state.guestLong}
              handleRequestButton={this.handleRequestButton}
              sendEmail={this.sendEmail}
              distanceCalc={this.distanceCalc}
              getLocation={this.getLocation}
              userLat={this.state.userLat}
              userLong={this.state.userLong}

              // latLong={this.latLong}
            />
          ) : (
            <div className="welcomeDiv">
              <h1 className="welcomeBanner">Welcome!</h1>
              <p id="welcomeNote">
                Feel free to search our list of gifts available to you from our
                donors. If you like what you see, you can request it from an
                angel and organize a time to pick it up!
              </p>
            </div>
          )}

          {/* <MakeRequest /> */}
          <ToastContainer />
        </Wrapper>
      </div>
    );
  }
}

export default Search;
