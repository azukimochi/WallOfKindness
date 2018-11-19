import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import WallBody from '../../components/WallBody/WallBody.js';
import API from "../../utils/API.js"

class DashboardPage extends Component {
  // state = {
  //    currentUser: httpClient.getCurrentUser()
  // };

  state = {
    categories:[],
    city: "",
    email: "",
    gifts: [],
    isDonor: "",
    name: "Karen",
    wallName: "",
    zipCode: "",
    id: ""
  }


  componentDidMount = () => {
    const id = localStorage.getItem("user_id")
    console.log("id", id)
    API.getUserInfo(id)
      .then(res => {
        console.log("Res.data", res.data)
        if (res.data.status === "404") {
          this.props.history.push("/login")
        } else {
          this.setState({
            city: res.data.city,
            email: res.data.email,
            gifts: res.data.gifts,
            isDonor: res.data.isDonor,
            name: res.data.name,
            wallName: res.data.wallName,
            zipCode: res.data.zipCode,
            id: res.data._id
          }, ()=> console.log(this.state))
        }
      })
      .catch(err => console.log(err))
  }

  updateWall = event => {
    event.preventDefault();
    console.log("Hi, I'm the update button")
  }
  
  updateButtonEffect() {
    let updateEffect = document.getElementById('updateWallButton');
    updateEffect.classList.add('running');
    setTimeout(function () { updateEffect.classList.remove('running') }, 2000);
  }

  addMoreItems = event => {
    event.preventDefault();
    console.log("Hi, I'm the addMoreItems button")
    let copyOfCategories = [...this.state.categories]
    let copyOfGifts = [...this.state.gifts]
    copyOfCategories.push("none")
    copyOfGifts.push("")
    this.setState({
      categories: copyOfCategories,
      gifts: copyOfGifts
    }, () => console.log(this.state))
  }
  
  removeItem = event => {
    event.preventDefault();
    console.log("Hi, I'm the removeItem button")
  }

  handleItemChange = event => {
    this.setState({[event.target.name]: event.target.value}, 
			() => {
			console.log(this.state)
			}
    )}
    
  handleGiftChange = (index, event) => {
    console.log("Changing category and the index is: ", index)
    let copyOfGifts = [...this.state.gifts]
    copyOfGifts[index] = event.target.value
    this.setState({
      gifts: copyOfGifts
    }, () => console.log("new gifts", this.state.gifts));
  }

  handleCategoryChange = (index, event) => {
    console.log("Changing category and the index is: ", index)
    let copyOfCategories = [...this.state.categories]
    copyOfCategories[index] = event.target.value
    this.setState({
      categories: copyOfCategories
    }, () => console.log("new categories", this.state.categories));
  }


  // componentWillMount() {
    // console.log('gifts', localStorage.getItem("updatedGifts"));
    // console.log('name', localStorage.getItem('updatedEmail'));
  // }


  // updateWall = (e) => {
  //   e.preventDefault();

    //const { name, wallName, email, city, zipCode, categories, gifts, _id } = this.state.currentUser;

  //   httpClient.updateUser(this.state.currentUser)
  //     .then(user => {
  //       this.setState({ currentUser: this.state.currentUser })
  //       console.log('USER', this.state.currentUser);
  //     })


  //   console.log('current wall info', this.state.currentUser);
  //   this.updateButtonEffect()
  // }


  // addClicked = e => {
  //   e.preventDefault();
  //   // console.log("e.target", e.target);
  //   // console.log("kalle kiri", this.state);
  //   let itemClicked = e.target.id;
  //   let currentState = this.state.currentUser[itemClicked];
  //   // console.log("current state", currentState);
  //   currentState.push("");
  //   this.setState({ itemClicked: currentState });
  // };

  // removeClicked(e) {
  //   e.preventDefault();
  //   let itemClicked = e.target.dataset.attribute;
  //   console.log("e.target.dataset", e.target.dataset)
  //   let itemGroup = e.target.dataset.group;
  //   let currentState = this.state.currentUser[itemGroup];
  //   currentState.splice(itemClicked, 1);
  //   this.setState({ itemGroup: currentState });
  // }

  // itemChangeGifts = (e) => {
  //   let itemToChange = e.target.dataset.attribute;
  //   const itemGroup = e.target.dataset.group;
  //   const currentState = this.state.currentUser[itemGroup];
  //   currentState[itemToChange] = e.target.value;
  //   this.setState({ itemGroup: currentState });
  //   console.log('itemGroup', itemGroup);
  //   console.log('currentState', currentState);

  //   var storageGifts = localStorage.setItem("updatedGifts", currentState);
  //   console.log('input change', localStorage.getItem("updatedGifts"));
  // };

  // itemChange = (e) => {
  //   let itemToChange = e.target.dataset.attribute;
  //   console.log("e.target", e.target)
  //   const itemState = this.state.currentUser;
  //   console.log("this.state.currentUser", this.state.currentUser)
  //   const itemGroup = e.target.dataset.group;
  //   const currentState = this.state[itemGroup];
  //   itemState[e.target.name] = e.target.value;
  //   this.setState({ currentUser: itemState });

  //   var storageName = localStorage.setItem("updatedName", itemState.name);
  //   var storageWallName = localStorage.setItem("updatedWallName", itemState.wallName);
  //   var storageEmail = localStorage.setItem("updatedEmail", itemState.email);
  //   var storageCity = localStorage.setItem("updatedCity", itemState.city);
  //   var storageZipCode = localStorage.setItem("updatedZipcode", itemState.zipCode);
  // }




  render() {
    return (
      <div>
        <WallBody
         email={this.state.email}
          // user={this.state.currentUser.user}
          donor={this.state.name}
          categories={this.state.categories}
          gifts={this.state.gifts}
          wallName={this.state.wallName }
          zipCode={this.state.zipCode }
          city={this.state.city }
          updateWall={event => {
            this.updateWall(event);
          }}
          addClick={event => {
            this.addMoreItems(event);
          }}
          removeClick={event => {
            this.removeItem(event);
          }}
          handleItemChange={event => {
            this.handleItemChange(event);
          }}
          handleGiftChange={this.handleGiftChange}
          handleCategoryChange={this.handleCategoryChange}
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
