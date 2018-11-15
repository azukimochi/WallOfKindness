import React, { Component } from "react";
import httpClient from '../../httpClient'
import Dashboard from "./Dashboard.js";
import API from "../../utils/API.js"

class DashboardPage extends Component {
  // state = {
  //    currentUser: httpClient.getCurrentUser()
  // };
  
  state = {
    categories: [],
    city: "",
    email: "karen@gmail.com",
    gifts: [],
    isDonor: false,
    name: "Karen",
    wallName: "",
    zipCode: ""
  }


  componentDidMount = () => {
    const id = localStorage.getItem("user_id")
    console.log("id", id)
    API.getUserInfo(id)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  // componentWillMount() {
    // console.log('gifts', localStorage.getItem("updatedGifts"));
    // console.log('name', localStorage.getItem('updatedEmail'));

  // }


  updateWall = (e) => {
    e.preventDefault();

    //const { name, wallName, email, city, zipCode, categories, gifts, _id } = this.state.currentUser;

    httpClient.updateUser(this.state.currentUser)
      .then(user => {
        this.setState({ currentUser: this.state.currentUser })
        console.log('USER', this.state.currentUser);
      })


    console.log('current wall info', this.state.currentUser);
    this.updateButtonEffect()
  }

  updateButtonEffect() {
    let updateEffect = document.getElementById('updateWallButton');
    updateEffect.classList.add('running');
    setTimeout(function () { updateEffect.classList.remove('running') }, 2000);
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
    console.log("e.target.dataset", e.target.dataset)
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
    this.setState({ itemGroup: currentState });
    console.log('itemGroup', itemGroup);
    console.log('currentState', currentState);

    var storageGifts = localStorage.setItem("updatedGifts", currentState);
    console.log('input change', localStorage.getItem("updatedGifts"));
  };

  itemChange = (e) => {
    let itemToChange = e.target.dataset.attribute;
    console.log("e.target", e.target)
    const itemState = this.state.currentUser;
    console.log("this.state.currentUser", this.state.currentUser)
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
        Hi
        <Dashboard
         email={this.state.email}
          // user={this.state.currentUser.user}
          name={this.state.name}
          categories={this.state.categories}
          gifts={this.state.gifts}
          wallName={this.state.wallName }
          zipCode={this.state.zipCode }
          city={this.state.city }
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


        {/* <Dashboard
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
        /> */}
      </div>
    );
  }
}

export default DashboardPage;
