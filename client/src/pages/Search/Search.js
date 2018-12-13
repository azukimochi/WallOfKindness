import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Geocode from "react-geocode";
import SearchWall from "../../components/SearchWalls";
import SearchResults from "../../components/SearchResults/SearchResults.js";
import NoResults from "../../components/SearchResults/NoResults.js";
import API from "../../utils/API";
import axios from "axios";
import "./Search.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import "../../components/SearchResults/SearchResults.css";
import { Container, Row } from "react-grid-system";

let addressArray = [];
let latLongArray = [];
let distanceArray = [];
let originalResults = [];

const emailConfirmation = () =>
  toast.success("Your e-mail is being sent.", {
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
  state = {
    autoCompleteState: [],
    modalIsOpen: false,
    gifts: "",
    category: "None",
    address: "",
    range: "",
    errorMessage: "",
    results: "",
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
    latLongArray: [],
    resultsNotFound: false
  };

  componentDidMount = () => {
    this.handleGiftAutocomplete();
    this.getLocation();
  };

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
      });
  };

  afterOpenModal = () => {

  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, reqButton: "" });
  };

  handleErrorMessage = () => {
    this.setState({
      errorMessage: "Please fill in all fields before searching."
    });
  };
  handleGiftsChange = event => {
    this.setState({ gifts: event.target.value.toLowerCase() });
  };

  handleCategoryChange = event => {
    this.setState({
      category: event.target.value
    });
  };

  handleGiftsInputChange = (event, giftType) => {
    this.setState({
      giftType: event.target.value
    });
  };

  handleGiftsInputSelect = (val, giftType) => {
    this.setState({ giftType: val.toLowerCase() });
  };

  handleAreaChange = event => {
    this.setState({
      address: event.target.value,
    });
  };

  handleRequestButton = event => {
    event.preventDefault();
    document.getElementById("emailForm").classList.remove("invisible");
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



  emailSentMessage() {
    document.getElementById("emailForm").classList.add("invisible");
    emailConfirmation();
  }

  handleRangeChange = event => {
    this.setState({ range: event.target.value });
  };

  handleGiftAutocomplete = event => {
    let giftListFromDatabaseRaw = [];
    if (this.state.giftType || this.state.autoCompleteState.length === 0) {
      API.getAllGifts({
        gifts: this.state.giftType
      })
        .then(res => {
          let resDataObj = res.data;
          resDataObj.map(item => {
            item.gifts.map(insideItem => {
              giftListFromDatabaseRaw.push(insideItem.item);
            });
          });

          let giftListFromDatabase = giftListFromDatabaseRaw;

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

        if (latLongArray.length === addressArray.length) {
          this.goToDistance();
        }
      },
      error => {
        console.error(error);
      }
    );
  };

  handleSearchBtnSubmit = event => {
    event.preventDefault();
    addressArray = [];
    latLongArray = [];
    distanceArray = [];

    this.setState({
      hasSearched: false,
      resultsNotFound: false,
    })

    if (this.state.giftType !== "" &&
      this.state.category !== "None") {
      API.lookForGifts({
        gifts: this.state.giftType,
        address: this.state.address,
        category: this.state.category
      })
        .then(res => {
          if (res.data.length !== 0) {
            let resultsArray = [];
            res.data.forEach(element => {
              resultsArray.push(element);
            })
            this.takeOutGifts(resultsArray);
          } else {
            this.setState({ resultsNotFound: true })
          }
        })
        .catch(err => console.log(err))

    } else {
      this.handleErrorMessage()
    }
  }

  takeOutGifts = resultsArray => {
    let giftArray = [];
    resultsArray.forEach(search => {
      giftArray.push(search.gifts);
    })
    if (giftArray.length === resultsArray.length) {
      this.removeUnwantedGifts(giftArray, resultsArray)
    }
  }

  removeUnwantedGifts = (giftArray, resultsArray) => {
    let giftTypeOfInput = this.state.giftType;
    let numOfLoops = 0;
    const regex = new RegExp(giftTypeOfInput, "i")
    let cleanedAllGiftsArr = [];
    for (let i = 0; i < giftArray.length; i++) {
      for (let j = 0; j < giftArray[i].length; j++) {
        let includesInput = regex.test(giftArray[i][j].item)
        if (includesInput === true) {
          giftArray[i][j].address = resultsArray[i].address;
          giftArray[i][j].name = resultsArray[i].name;
          giftArray[i][j].wallName = resultsArray[i].wallName;
          giftArray[i][j].email = resultsArray[i].email;
          cleanedAllGiftsArr.push(giftArray[i][j])
        }
      }
      numOfLoops++
    }
    if (numOfLoops === giftArray.length) {
      this.setState({ results: cleanedAllGiftsArr },
        () => this.getAddresses())
    }
  }

  getAddresses = () => {
    let newAddress = this.state.results;
    newAddress.map(userAddress => {
      addressArray.push(userAddress.address);
    });
    addressArray.forEach(eachAddress => {
      this.latLong(eachAddress);
    });
  }

  goToDistance = () => {
    let isArr =
      Object.prototype.toString.call(latLongArray) == "[object Array]";
    latLongArray.forEach(eachLatLong => {
      this.distanceCalc(
        eachLatLong.lat,
        eachLatLong.lng,
        this.state.guestLat,
        this.state.guestLong,
        'K'
      );
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
      dist = dist * 1.609344 * 1000;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    distanceArray.push(parseInt(dist.toFixed(0)));
    let sortedDistance = distanceArray.sort((a, b) => a - b);
    if (distanceArray.length === latLongArray.length) {
      let results = [];
      this.state.results.map((result, index) => {
        result.distanceM = distanceArray[index];
        result.distanceKM = (distanceArray[index] * 0.001).toFixed(2)
        results.push(result);
      });
      if (results.length === this.state.results.length) {
        this.setState({
          results: results,
          hasSearched: true,
          giftType: "",
          category: ""
        });
        originalResults = this.state.results;
      }
    }
  };

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
    this.GetAddress(this.state.guestLat, this.state.guestLong);
  };

  GetAddress = (lat, lng) => {
    const script = document.createElement("script");
    script.src = `http://maps.googleapis.com/maps/api/js?sensor=false`;
    script.async = true;
    document.body.appendChild(script);
    const google = window.google;
    let latlng = new google.maps.LatLng(lat, lng);
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ latLng: latlng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          this.setState({
            guestAddress: results[1].formatted_address
          });
        }
      }
    });
  };



  filterResults = () => {
    let e = document.getElementById("filterResult");
    let selectedRange = e.options[e.selectedIndex].value;
    let caseResults = [];
    switch (selectedRange) {
      case "5":
        originalResults.filter(result => {
          result.distanceM <= 500 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });

        break;
      case "10":
        originalResults.filter(result => {
          result.distanceM <= 1000 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });
        break;
      case "15":
        originalResults.filter(result => {
          result.distanceM <= 1500 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });
        break;
      case "20":
        originalResults.filter(result => {
          result.distanceM <= 2000 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });
        break;
      case "50":
        originalResults.filter(result => {
          result.distanceM <= 5000 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });
        break;
      case "100":
        originalResults.filter(result => {
          result.distanceM <= 10000 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });
        break;
      case "200":
        originalResults.filter(result => {
          result.distanceM <= 20000 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });
        break;
      case "300":
        originalResults.filter(result => {
          result.distanceM <= 30000 ? caseResults.push(result) : null;
        });
        this.setState({
          results: caseResults
        });
        break;
      default:
        this.setState({ results: originalResults });
    }
  };

  render() {
    return (
      <div>
        <Wrapper>
          <SearchWall
            handleGiftAutocomplete={this.handleGiftAutocomplete}
            values={this.state.autoCompleteState}
            handleGiftsChange={this.handleGiftsChange}
            handleCategoryChange={this.handleCategoryChange}
            category={this.state.category}
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

          {this.state.resultsNotFound ?
            <Container>
              <Row>
                <NoResults>
                </NoResults>
              </Row>
            </Container>
            : null}

          {this.state.hasSearched === false && this.state.resultsNotFound === false ?
            <div className="welcomeDiv">
              <h1 className="welcomeBanner">Welcome!</h1>
              <p id="welcomeNote">
                Feel free to search our archive of gifts from our donors.
                The searches are based on your current location only.
                If you like what you see, you can request it from an
                angel and organize a time to pick the item up!
           </p>
            </div>
            : null}

          {this.state.hasSearched ? (
            <div>
              <hr style={{ height: '1px', backgroundColor: '#e81e17', width: '80%', textAlign: 'center', margin: '0 auto' }} />
              <h3 className="resultTitle">Results</h3>
              <div style={{ width: '30%', textAlign: 'center', margin: '0 auto' }}>
                <label htmlFor="item">Select a Range in Distance</label>
                <br />
                <select
                  onChange={this.filterResults}
                  name="distance"
                  className="searchRange"
                  id="filterResult"
                >
                  <option value="All">All</option>
                  <option value="5">0 - 500 m</option>
                  <option value="10">0 - 1000 m</option>
                  <option value="15">0 -1500 m</option>
                  <option value="20">0 - 2 km</option>
                  <option value="50">0 - 5 km</option>
                  <option value="100">0 - 10 km</option>
                  <option value="200">0 - 20 km</option>
                  <option value="300">0 - 30 km</option>
                </select>
              </div>
              <Container>
                <Row>
                  {this.state.results.map((result, index) => (
                    <SearchResults
                      index={index}
                      wallName={result.wallName}
                      item={result.item}
                      date={result.date.slice(0, 10)}
                      email={result.email}
                      openModal={this.openModal}
                      sendEmail={this.sendEmail}
                      distanceM={result.distanceM}
                      distanceKM={result.distanceKM}
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
                  <div className="emailTo">
                    To:{" "}
                    <input
                      type="text"
                      id="emailTo"
                      placeholder="Donor's Email"
                      value={this.state.reqButton}
                    />{" "}
                  </div>
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
          ) : null
          }
          <ToastContainer />
        </Wrapper>
      </div>
    );
  }
}

export default Search;
