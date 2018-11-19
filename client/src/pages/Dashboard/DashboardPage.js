import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import WallBody from '../../components/WallBody/WallBody.js';
import API from "../../utils/API.js"

class DashboardPage extends Component {
  // state = {
  //    currentUser: httpClient.getCurrentUser()
  // };

  state = {
    allGiftsObj: [],
    categories: [],
    gifts: [],
    dates: [],
    city: "",
    email: "",
    name: "",
    wallName: "",
    zipCode: "",
    id: "",
    updateStatus: ""
  }


  componentDidMount = () => {
    const id = localStorage.getItem("user_id")
    const token = localStorage.getItem("session_token")
    const reqObj = {
      id: id,
      token: token
    }
    API.getUserInfo(reqObj)
      .then(res => {
        console.log("Res.data", res.data)
        if (res.data.status === "404") {
          this.props.history.push("/login")
        } else {
          this.parseGifts(res)
        }
      })
      .catch(err => console.log(err))
    }
    
    parseGifts = (res) => {
      let copyOfGifts = [...res.data.gifts]
      console.log("copyOfGifts", copyOfGifts)
      let giftsArr = [];
      let categoriesArr = [];
      let datesArr = [];
      copyOfGifts.forEach(gift => {
        for (let key in gift) {
          if (key === "item") {
            giftsArr.push(gift[key])
          } else if (key === "category") {
            categoriesArr.push(gift[key])
          } else if (key === "date") {
            datesArr.push(gift[key])
          }
        }
      });
      console.log("giftsArr", giftsArr)
      console.log("categoriesArr", categoriesArr)
      console.log("datesArr", datesArr)
      this.showUserInfo(res, giftsArr, categoriesArr, datesArr)
    }
    
    showUserInfo = (res, giftsArr, categoriesArr, datesArr) => {
      this.setState({
        city: res.data.city,
        email: res.data.email,
        allGiftsObj: res.data.gifts,
        categories: categoriesArr,
        gifts: giftsArr,
        dates: datesArr,
        name: res.data.name,
        wallName: res.data.wallName,
        zipCode: res.data.zipCode,
        id: res.data._id
      }, ()=> console.log(this.state))
}

  makeGiftsObj = event => {
    event.preventDefault();
    console.log("Hi, I'm the update button")
    let copyOfGifts = [...this.state.gifts]
    let copyOfCategories = [...this.state.categories]
    let copyOfDates = [...this.state.dates]
    let date;
    let updatedGiftsArr = [];
    copyOfGifts.forEach((gift, index) => {
      if (copyOfDates[index] == "") {
        date = new Date();
      } else {
        date = copyOfDates[index]
      }
      let giftObj = {
        item: gift,
        category: copyOfCategories[index],
        date: date
      }
      updatedGiftsArr.push(giftObj)
    })
    console.log("The new gifts array is this: ", updatedGiftsArr)
    this.setState({allGiftsObj: updatedGiftsArr}, 
      () => {
        console.log("The new allGiftsObj state: ", this.state.allGiftsObj);
        this.submitData();
    })
  }

  submitData = () => {
    const id = localStorage.getItem("user_id")
    const token = localStorage.getItem("session_token")
    const reqObj = {
      name: this.state.name,
      email: this.state.email,
      wallName: this.state.wallName,
      gifts: this.state.allGiftsObj,
      city: this.state.city,
      zipCode: this.state.zipCode,
    }
    console.log("reqObj for submitting data", reqObj)
    API.updateUserInfo(id, token, reqObj)
    .then(res => {
      if (res.data.status === "404") {
        this.props.history.push("/login")
      } else {
        this.setState({updateStatus: "Updated successfully!"})
        console.log("User updated!")
      }
    })
    .catch(err => console.log(err))
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
    let copyOfDates = [...this.state.dates]
    copyOfCategories.push("none")
    copyOfGifts.push("")
    copyOfDates.push("")
    this.setState({
      categories: copyOfCategories,
      gifts: copyOfGifts,
      dates: copyOfDates
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
          updateStatus={this.state.updateStatus}
          updateWall={event => {
            this.makeGiftsObj(event);
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
