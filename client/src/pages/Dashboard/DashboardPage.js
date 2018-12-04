import React, { Component } from "react";
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
    address: "",
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
          localStorage.clear()
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
        address: res.data.address,
        id: res.data._id
      }, ()=> console.log(this.state))
}

  validateInfo = event => {
    event.preventDefault();
    console.log("Hi, I'm the update button")

    if (
      this.state.city === "" ||
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.wallName === "" ||
      this.state.address === ""
    ) {
      console.log("Not all info has been filled.")
      this.setState({updateStatus: "Update aborted. Please fill out all the fields in your profile."})
    } else {
      this.validateGifts()
    }
  }


  validateGifts = () => {
    let copyOfGifts = [...this.state.gifts]
    let copyOfCategories = [...this.state.categories]
    let errNum = 0
    copyOfGifts.forEach((gift, index) => {
      if (gift[index] === "" || gift[index] === undefined || copyOfCategories[index] === "None") {
        errNum++
        console.log("Num of err", errNum)
      } 
    })
    console.log("Final number of errors", errNum)
    if (errNum === 0 ) {
      this.makeGiftsObj(copyOfCategories, copyOfGifts)
    } else {
      this.setState({updateStatus: "Update aborted. Please fill out all item names and categories.  You can only have 5 items at once."})
    }
  }

    makeGiftsObj = (copyOfCategories, copyOfGifts) => {
    let copyOfDates = [...this.state.dates]
    let date;
    let updatedGiftsArr = [];
    copyOfGifts.forEach((gift, index) => {
      if (copyOfDates[index] === "") {
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
      address: this.state.address,
    }
    console.log("reqObj for submitting data", reqObj)
    this.updateButtonEffect()
    API.updateUserInfo(id, token, reqObj)
    .then(res => {
      if (res.data.status === "404") {
        localStorage.clear()
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
    copyOfCategories.push("None")
    copyOfGifts.push("")
    copyOfDates.push("")
    this.setState({
      categories: copyOfCategories,
      gifts: copyOfGifts,
      dates: copyOfDates
    }, () => console.log(this.state))
  }
  
  removeItem = (index, event) => {
    event.preventDefault();
    console.log("Hi, I'm the removeItem button")
    let copyOfCategories = [...this.state.categories]
    let copyOfGifts = [...this.state.gifts]
    let copyOfDates = [...this.state.dates]
    copyOfCategories.splice(index, 1)
    copyOfGifts.splice(index, 1)
    copyOfDates.splice(index, 1)
    this.setState({
      categories: copyOfCategories,
      gifts: copyOfGifts,
      dates: copyOfDates
    })
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
          address={this.state.address }
          city={this.state.city }
          updateStatus={this.state.updateStatus}
          handleGiftChange={this.handleGiftChange}
          handleCategoryChange={this.handleCategoryChange}
          removeClick={this.removeItem}
          updateWall={this.validateInfo}
          addClick={this.addMoreItems}
          handleItemChange={this.handleItemChange}
        />


      </div>
    );
  }
}

export default DashboardPage;
