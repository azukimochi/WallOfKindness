/////////////////////////////////////////////NEW CODE ////////////////////////////

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
import Modal from "react-modal";
import "../../components/SearchResults/SearchResults.css";
import { Container, Row, Col } from "react-grid-system";

let addressArray = [];
let latLongArray = [];
let longArray = [];
let distanceArray = [];
let originalResults = [];

const emailConfirmation = () =>
  toast.success("Your e-mail has been successfully sent", {
    position: toast.POSITION.TOP_CENTER
  });
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    backgroundColor: "#38425B",
    color: "white"
  }
};

class Search extends Component {
  // insert state changes and methods here
  state = {
    autoCompleteState: [],
    modalIsOpen: false,
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
    searchResult: "",
    giftName: "",
    distance: "",
    guestLat: "",
    guestLong: "",
    guestAddress: "",
    userLat: [],
    userLong: [],
    eachLat: "",
    eachLong: "",
    reqButton: "",
    latArray: [],
    longArray: [],
    distances: [],
    latLongArray: []
  };

  componentDidMount = () => {
    this.handleGiftAutocomplete();
    this.getLocation();
    // this.latLong();
    // this.GetAddress();
  };

  // getCurrentPosition
  displaySearchResults = () => {
    return this.state.results.map(result => {
      if (result) {
        <SearchResults
          id={result._id}
          key={result._id}
          gifts={result.giftType}
          wallName={result.wallName}
          name={result.name}
          email={result.email}
          address={result.address}
          city={result.city}
          latitude={result.latitude}
          longtude={result.longtude}
          distance={result.distance}
        />;
      }
    });
  };

  openModal = event => {
    event.persist();
    this.setState(
      {
        modalIsOpen: true,
        reqButton: event.target.name
      },
      () => console.log("target", event.target.name)
    );
  };

  afterOpenModal = () => {
    // console.log("Open Modal");
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, reqButton: "" });
  };

  handleErrorMessage = () => {
    this.setState({
      errorMessage: "Please fill in all fields before searching."
    });
    // console.log(this.state.errorMessage);
  };
  handleGiftsChange = event => {
    this.setState({ gifts: event.target.value.toLowerCase() });
  };

  handleGiftsInputChange = (event, giftType) => {
    this.setState({ giftType: event.target.value.toLowerCase() });
  };

  handleGiftsInputSelect = (val, giftType) => {
    console.log("value", val)

    this.setState({ giftType: val.toLowerCase() });
  };

  handleAreaChange = event => {
    this.setState({ address: event.target.value });
  };

  handleRequestButton = event => {
    event.preventDefault();
    document.getElementById("emailForm").classList.remove("invisible");

    // console.log("hello");
  };

  clearEmailForm() {
    document.getElementById("emailFrom").value = "";
    document.getElementById("emailSubject").value = "";
    document.getElementById("emailBody").value = "";
  }

  sendEmail = e => {
    e.preventDefault();
    {
      this.closeModal();
    }

    axios({
      method: "post",
      url: "/api/send/mail",
      params: {
        emailTo: document.getElementById("emailTo").value,
        emailFrom: document.getElementById("emailFrom").value,
        emailSubject: document.getElementById("emailSubject").value,
        emailBody: document.getElementById("emailBody").value
      }
    }).then(response => {
      // console.log(response);
      // console.log(this.state.results[0].email);
    });

    this.clearEmailForm();

    this.emailSentMessage();
  };
  emailButtonEffect() {
    let effect = document.getElementById("emailSendButton");
    effect.classList.add("running");
    setTimeout(function () {
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

    setTimeout(function () {
      toast.classList.add("invisible");
    }, 2000);
    document.getElementById("emailForm").classList.add("invisible");
    emailConfirmation();
  }

  handleRangeChange = event => {
    this.setState({ range: event.target.value });
  };

  handleGiftAutocomplete = event => {
    let giftListFromDatabaseRaw = [];
    // console.log("hello autocomplete", this.state.giftType);
    if (this.state.giftType || this.state.autoCompleteState.length === 0) {
      API.getAllGifts({
        gifts: this.state.giftType
      })
        .then(res => {
          // console.log("new res:", res.data);
          let resDataObj = res.data;
          resDataObj.map(item => {
            item.gifts.map(insideItem => {
              giftListFromDatabaseRaw.push(insideItem.item);
            });
          });

          let giftListFromDatabase = giftListFromDatabaseRaw;
          let finalGiftArray = [];
          let uniqueArray;
          let giftAutoCompleteArray;
          let autoCompleteArray = [];

          let removeDuplicates = arr => {
            uniqueArray = arr.filter(function (elem, index, self) {
              return index == self.indexOf(elem);
            });
            return uniqueArray;
          };

          giftAutoCompleteArray = removeDuplicates(giftListFromDatabase);
          // console.log(
          //   "giftListFromDatabase after filter for duplicate",
          //   giftAutoCompleteArray
          // );

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

  searchButtonEffect() {
    let effect = document.getElementById("effect");
    effect.classList.add("running");
    setTimeout(function () {
      effect.classList.remove("running");
    }, 2000);
  }

  latLong = address => {
    Geocode.setApiKey("AIzaSyC_nTVvqzEckQ6WzQmCV_POw6a80BmOQPo");
    Geocode.enableDebug();

    Geocode.fromAddress(address).then(
      response => {
        let { lat, lng } = response.results[0].geometry.location;
        let obj = {
          lat: lat,
          lng: lng
        };
        latLongArray.push(obj);
        console.log("testing latLong function", latLongArray);
        console.log(addressArray.length);

        if (latLongArray.length === addressArray.length) {
          this.goToDistance();
        }
        // latLongArray.push(
        //   {lat:lat,
        //     lng:lng
        //   }
        //   )

        // longArray.push(lng)
        // console.log("guest lat",guestLat)
        // this.distanceCalc(lat,lng,guestLat,guestLong)
        // newLat=lat;
        // newLong=lng;
        //  console.log('latArray',latArray)
        //  console.log('longArray',longArray)

        // latLongShow(lat,lng)
      },
      error => {
        console.error(error);
      }
    );
    // return {
    //   longArray:longArray,
    //   latArray:latArray
    // }
  };

  handleSearchBtnSubmit = event => {
    event.preventDefault();
    // latArray=[];
    // longArray=[];
    if (this.state.giftType) {
      API.lookForGifts({
        gifts: this.state.giftType,
        address: this.state.address

      })

        .then(res => {
          console.log("karen res", res.data);
          let resultsArray = [];
          res.data.forEach(function (element) {
            resultsArray.push(element);
          });
          console.log("result array:", resultsArray);


      
          //***********Extract giftName ************************/
          let searchResults = resultsArray;
          let giftsItemArray = [];
          let giftArray = [];
          //loop through resultsArray and store each gift array in varible giftArray
          searchResults.forEach(function (search) {
            giftArray.push(search.gifts);
            console.log("GA:", giftArray);
          })
          //name of gift typed by the guest in the search input box
          let giftTypeOfInput = this.state.giftType;
          console.log("GTI:", giftTypeOfInput);

          //not sure why item is showing up as undefined. Trying to grab name of gift if there is a match between what the guest typed in input box to the name of the item in giftArray
          giftArray.forEach(function (result, i) {
            console.log("resultItem:", result);
            if (giftTypeOfInput === result[i].item) {
              giftsItemArray.push(result[i].item);
              console.log("giftsitem:", giftsItemArray);
              //creatin a new property in resultsArray called giftType and setting its value to item names from giftItemArray
              resultsArray.giftType = giftsItemArray[0]
              console.log("resultsArrayPropertyValue:", resultsArray.giftType)
            }
          })

          //was trying to extract/manipulate data above before setting state below.
          this.setState({ results: resultsArray });
          console.log(
            "results isssssssssssssssssssssssssss:",
            this.state.results
          );

          //trying to pass name of value from resultsArray.giftType as a prop in searchresults.js. The  handleGiftsInputChange from line 132 seems to be changing the name of the
          //gift in the cards. I was thinking of changing the name giftType to some other name like 'itemName' and passing that as props to break that link between the input box and result card. 
          //Then in
          // But when I do that,  gift name doesn't show up on results page.

          //***************************************************** */

          let newAddress = this.state.results;

          newAddress.map(userAddress => {
            addressArray.push(userAddress.address);
          });



          addressArray.forEach(eachAddress => {
            this.latLong(eachAddress);
          });

          //           latLongArray.map((eachLatLong,index)=>{

          //             this.distanceCalc(eachLatLong.lat,eachLatLong.lng,this.state.guestLat,this.state.guestLong)
          // console.log("jakesh", eachLatLong.lat)
          //            })

          // latArray.map()

          console.log("gueslat", this.state.guestLat);
          console.log("addressArray2", addressArray);
          // console.log('lat Long Array',latLongArray)
          console.log("long Array", longArray);
          console.log("distance Array", distanceArray);

          // this.goToDistance()
        })
        .catch(err => console.log(err));
    }
    if (
      this.state.giftType === ""


    ) {
      this.handleErrorMessage();
      // console.log("working");
    }

    console.log("final state before sending", this.state);

  };

  goToDistance = () => {
    console.log("Length of latLongArray", latLongArray.length);
    console.log("Type of LatLongArray", typeof latLongArray);
    let isArr =
      Object.prototype.toString.call(latLongArray) == "[object Array]";
    console.log(isArr);
    latLongArray.forEach(eachLatLong => {
      console.log("Hi");
      this.distanceCalc(
        eachLatLong.lat,
        eachLatLong.lng,
        this.state.guestLat,
        this.state.guestLong,
        'K'
      );
    });
    // console.log("jakesh", eachLatLong.lat)
  };

  distanceCalc = (lat1, lon1, lat2, lon2, unit) => {
    console.log("Hi");
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
      dist = dist * 1.609344 * 1000;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    // this.setState({
    //   results.dist:dist
    // })
    distanceArray.push(dist);
    console.log("distanceArray", distanceArray);
    let sortedDistance = distanceArray.sort((a, b) => a - b);
    console.log("sortedDistance", sortedDistance);
    let results = [];
    this.state.results.map((result, index) => {
      result.distance = distanceArray[index];

      results.push(result);
    });
    this.setState({
      results: results
    });
    if (distanceArray.length === latLongArray.length) {
      this.setState({
        hasSearched: true
      });
      originalResults = this.state.results;
      console.log("originalResults", originalResults);
      console.log("Length is good for distance and latLongArray");
    }

    // console.log('distanceArray too function',distanceArray)
    // return dist;
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
    // console.log("state jadide", this.state);
    console.log(
      "guestLatLong:",
      position.coords.latitude,
      "",
      position.coords.longitude
    );
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
    // console.log("alan state chie:", this.state);
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
          // console.log("State after grabbing Address", this.state);
          // console.log("////////////////////////");
          // console.log("here address", results[1].formatted_address);
          // console.log("////////////////////////");
        }
      }
    });
  };



  filterResults = () => {
    // const originalResults = this.state.results;
    console.log("I am filter");
    var e = document.getElementById("filterResult");
    var selectedRange = e.options[e.selectedIndex].value;
    // let selectedRange=document.getElementById("filterResult").selectedIndex;
    console.log("Selected Range:", selectedRange);
    console.log("Selected Range type:", typeof selectedRange);
    console.log("Results:", this.state.results);

    console.log("original Results:", originalResults);

    let caseResults = [];
    switch (selectedRange) {
      case "5":
        console.log("Range Selected: 0 -500m");
        originalResults.filter(result => {
          result.distance <= 500 ? caseResults.push(result) : null;
        });
        console.log("result distance:", caseResults);
        // results.push(result)

        // console.log("result distance:", newResult);
        this.setState({
          results: caseResults
        });

        break;
      case "10":
        console.log("Range Selected: 0 -1000m");
        originalResults.filter(result => {
          result.distance <= 1000 ? caseResults.push(result) : null;
        });
        console.log("result distance:", caseResults);
        // results.push(result)

        // console.log("result distance:", newResult);
        this.setState({
          results: caseResults
        });
        break;
      case "15":
        console.log("Range Selected: 0 -1500m");
        originalResults.filter(result => {
          result.distance <= 1500 ? caseResults.push(result) : null;
        });
        console.log("result distance:", caseResults);
        // results.push(result)

        // console.log("result distance:", newResult);
        this.setState({
          results: caseResults
        });
        break;
      case "20":
        console.log("Range Selected: 0 - 2000m");
        originalResults.filter(result => {
          result.distance <= 2000 ? caseResults.push(result) : null;
        });
        console.log("result distance:", caseResults);
        // results.push(result)

        // console.log("result distance:", newResult);
        this.setState({
          results: caseResults
        });
        break;
      case "50":
        console.log("Range Selected: 0 - 5000m");
        originalResults.filter(result => {
          result.distance <= 5000 ? caseResults.push(result) : null;
        });
        console.log("result distance:", caseResults);
        // results.push(result)

        // console.log("result distance:", newResult);
        this.setState({
          results: caseResults
        });
        break;

      default:
        this.setState({
          results: originalResults
        });
        console.log("Range Selected: All");
    }
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
            handleGiftsInputSelect={this.handleGiftsInputSelect}
            handleAreaChange={this.handleAreaChange}
            handleRangeChange={this.handleRangeChange}
            handleSearchBtnSubmit={this.handleSearchBtnSubmit}
            displaySearchResults={this.displaySearchResults}
            errorMessage={this.state.errorMessage}
            giftTypeStock={this.giftTypeStock}
            giftType={this.state.giftType}
            getLocation={this.getLocation}
            latLong={this.latLong}
            guestAddress={this.state.guestAddress}
            onFocusArea={this.onFocusArea}
            onBlurArea={this.onBlurArea}
          />

          {this.state.hasSearched ? (
            <div>
              <hr style={{ height: '1px', backgroundColor: '#e81e17', width: '80%', textAlign: 'center', margin: '0 auto' }} />
              <h3 className="resultTitle">Results</h3>
              <div style={{ width: '30%', textAlign: 'center', margin: '0 auto' }}>
                <label htmlFor="item">Select Your Range</label>
                <br />
                <select
                  onChange={this.filterResults}
                  name="distance"
                  className="searchRange"
                  id="filterResult"
                >
                  <option value="All">All</option>
                  <option value="5">0 - 500m</option>
                  <option value="10">0 - 1000m</option>
                  <option value="15">0 -1500m</option>
                  <option value="20">0 - 2000m</option>
                  <option value="50">0 - 5000m</option>
                </select>
              </div>
              <Container>
                <Row>
                  {this.state.results.map((result, index) => (
                    <SearchResults
                      index={index}
                      id={result._id}
                      name={result.name}
                      wallName={result.wallName}
                      gifts={result.gifts}
                      email={result.email}
                      city={result.city}
                      address={result.address}
                      results={this.state.results}
                      guestLat={this.state.guestLat}
                      guestLong={this.state.guestLong}
                      openModal={this.openModal}
                      sendEmail={this.sendEmail}
                      getLocation={this.getLocation}
                      userLat={this.state.userLat}
                      userLong={this.state.userLong}
                      giftType={this.state.giftType}
                      latLong={this.latLong}
                      latArray={this.state.latArray}
                      longArray={this.state.longArray}
                      distance={distanceArray[index]}
                    // latLong={this.latLong}
                    />
                  ))}
                </Row>
              </Container>

              <Modal
                openModal={this.openModal}
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <form id="emailForm">
                  <h4>
                    To:{" "}
                    <input
                      type="text"
                      id="emailTo"
                      placeholder="Donor's Email"
                      value={this.state.reqButton}
                    />{" "}
                  </h4>
                  {/* <h4>To: <input type="text" id="emailTo" placeholder="Donor's Email" />{this.state.results.email} </h4> */}
                  <h4>
                    From:{" "}
                    <input
                      type="email"
                      id="emailFrom"
                      placeholder="Your Email"
                    />
                  </h4>
                  <h4>
                    Subject:
                    <input
                      type="text"
                      id="emailSubject"
                      placeholder="Message Title"
                    />
                  </h4>
                  <h4>Message:</h4>
                  <textarea id="emailBody" />
                  <button
                    onClick={this.sendEmail}
                    type="submit"
                    id="emailSendButton"
                    className="btn btn-success ld-over-full-inverse registerBtn"
                  >
                    <div className="ld ld-ball ld-flip" />
                    Send
                  </button>
                  <button className="closeModal" onClick={this.closeModal}>
                    Close
                  </button>
                </form>
              </Modal>
            </div>
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

          <ToastContainer />
        </Wrapper>
      </div>
    );
  }
}

export default Search;
