import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import httpClient from '../../httpClient'

import axios from "axios";
// import Autocomplete from  'react-autocomplete';
// import { giftTypeStock, matchGiftType } from './dataGiftType';
// import { giftNameStock, matchGiftName } from './dataGiftName';

// import './autocomplete.css';
import Dashboard from "./Dashboard.js";
class DashboardPage extends Component {
  state = {
     currentUser: httpClient.getCurrentUser()
  };

  // componentWillMount() {
  //   this.setState({
  //     currentUser: httpClient.getCurrentUser()
  //   });
  //   console.log('on mount', this.state.currentUser);
  // }
  componentDidMount() {
    console.log('gifts', localStorage.getItem("updatedGifts"));
    console.log('name', localStorage.getItem('updatedEmail'));
  }


  // }

  // loadWall = () => {
  //   // e.preventDefault();
  //   console.log("too load wall",this.state);

  //     httpClient.getUserInfo({

  //       email: this.state.email,


  //     }).then(user => {

  //        //   firstName: this.state.names.firstName,
  //       //   // middleName:this.state.names.middleName,
  //       //   lastName: this.state.names.lastName,
  //       //   // streetAddress1 : this.state.address.streetAddress1,
  //       //   // streetAddress2 : this.state.address.streetAddress2,
  //       //   city: this.state.address.city,
  //       //   // state : this.state.address.state,
  //       //   zipCode: this.state.address.zipCode,
  //       //   category: this.state.categories,
  //       //   gifts: this.state.gifts,
  //       //   wallName: this.state.wall.wallName
  //       console.log("user",user);
  //     });

  // };

  // loadReponseData(user) {
  //   this.setState({
  //     names: {
  //       firstName: user.firstName,
  //       // middleNmae:data.middleNmae,
  //       lastName: user.lastName
  //     }
  //   });
  //   this.setState({
  //     address: {
  //       // streetAddress1: data.streetAddress1,
  //       // streetAddress2: data.streetAddress2,
  //       // city: data.city,
  //       // state: data.state,
  //       zipCode: user.zipCode
  //       // phoneNumber:data.phoneNumber
  //     }
  //   });
  //   this.setState({ categories: user.category });
  //   this.setState({ gifts: user.gifts });
  // }




  updateWall = (e) => {
    e.preventDefault();

      const { name, wallName, email, city, zipCode, categories, gifts, _id } = this.state.currentUser;

      httpClient.updateUser(this.state.currentUser)
        .then(user => {
          this.setState({currentUser: this.state.currentUser})
          console.log('USER', this.state.currentUser);
        })


    console.log('current wall info', this.state.currentUser);
    this.updateButtonEffect()
  }

  updateButtonEffect(){
    let updateEffect = document.getElementById('updateWallButton');
    updateEffect.classList.add('running');
    setTimeout(function(){updateEffect.classList.remove('running')}, 2000);
  }

  addClicked = e => {
    e.preventDefault();
    // console.log("e.target", e.target);
    // console.log("kalle kiri", this.state);
    let itemClicked = e.target.id;
    let currentState = this.state.currentUser[itemClicked];
   // console.log("current state", currentState);
    currentState.push("");
    this.setState({ itemClicked: currentState });
  };

  removeClicked(e) {
    e.preventDefault();
    let itemClicked = e.target.dataset.attribute;
    console.log("e.target.dataset",e.target.dataset)
    let itemGroup = e.target.dataset.group;
    let currentState = this.state.currentUser[itemGroup];
    currentState.splice(itemClicked, 1);
    this.setState({ itemGroup: currentState });
  }

  itemChangeGifts = (e) => {
    let itemToChange = e.target.dataset.attribute;
    const itemGroup = e.target.dataset.group;
    const currentState = this.state.currentUser[itemGroup];
    currentState[itemToChange] = e.target.value;
    this.setState({itemGroup: currentState});
    console.log('itemGroup', itemGroup);
    console.log('currentState', currentState);

    var storageGifts = localStorage.setItem("updatedGifts", currentState);
    console.log('input change', localStorage.getItem("updatedGifts"));
  };

  itemChange = (e) => {
    let itemToChange = e.target.dataset.attribute;
    console.log("e.target",e.target)
    const itemState = this.state.currentUser;
    console.log("this.state.currentUser",this.state.currentUser)
    const itemGroup = e.target.dataset.group;
    const currentState = this.state[itemGroup];
    itemState[e.target.name] = e.target.value;
    this.setState({ currentUser: itemState });

    var storageName = localStorage.setItem("updatedName", itemState.name);
    var storageWallName = localStorage.setItem("updatedWallName", itemState.wallName);
    var storageEmail = localStorage.setItem("updatedEmail", itemState.email);
    var storageCity = localStorage.setItem("updatedCity", itemState.city);
    var storageZipCode = localStorage.setItem("updatedZipcode", itemState.zipCode);
  }




  render() {
    return (
      <div>
        <Dashboard
         email={ window.localStorage.updatedEmail ? window.localStorage.updatedEmail : this.state.currentUser.email }
          user={this.state.currentUser.user}
          name={window.localStorage.updatedName ? window.localStorage.updatedName : this.state.currentUser.name}
          categories={this.state.currentUser.categories}
          gifts={this.state.currentUser.gifts}
          wallName={window.localStorage.updatedWallName ? window.localStorage.updatedWallName : this.state.currentUser.wallName }
          zipCode={window.localStorage.updatedZipcode ? window.localStorage.updatedZipcode : this.state.currentUser.zipCode }
          city={window.localStorage.updatedCity ? window.localStorage.updatedCity : this.state.currentUser.city }
          btnClickHandler={e => {
            this.updateWall(e);
          }}
          addClick={e => {
            this.addClicked(e);
          }}
          removeClick={e => {
            this.removeClicked(e);
          }}
          itemChanged={e => {
            this.itemChange(e);
          }}
          itemChangedGifts={e => {
            this.itemChangeGifts(e);
          }}
        />
      </div>
    );
  }
}

export default DashboardPage;
