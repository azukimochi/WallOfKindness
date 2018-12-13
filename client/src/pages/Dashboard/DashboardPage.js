import React, { Component } from "react";
import WallBody from '../../components/WallBody/WallBody.js';
import API from "../../utils/API.js"

class DashboardPage extends Component {

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
    })
  }

  validateInfo = event => {
    event.preventDefault();
    if (
      this.state.city === "" ||
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.wallName === "" ||
      this.state.address === ""
    ) {
      this.setState({ updateStatus: "Update aborted. Please fill out all the fields in your profile." })
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
      }
    })
    if (errNum === 0) {
      this.makeGiftsObj(copyOfCategories, copyOfGifts)
    } else {
      this.setState({ updateStatus: "Update aborted. Please fill out all item names and categories.  You can only have 5 items at once." })
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
    this.setState({ allGiftsObj: updatedGiftsArr },
      () => {
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
    this.updateButtonEffect()
    API.updateUserInfo(id, token, reqObj)
      .then(res => {
        if (res.data.status === "404") {
          localStorage.clear()
          this.props.history.push("/login")
        } else {
          this.setState({ updateStatus: "Updated successfully!" })
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
    })
  }

  removeItem = (index, event) => {
    event.preventDefault();
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
    this.setState({ [event.target.name]: event.target.value })
  }

  handleGiftChange = (index, event) => {
    let copyOfGifts = [...this.state.gifts]
    copyOfGifts[index] = event.target.value
    this.setState({
      gifts: copyOfGifts
    })
  }

  handleCategoryChange = (index, event) => {
    let copyOfCategories = [...this.state.categories]
    copyOfCategories[index] = event.target.value
    this.setState({
      categories: copyOfCategories
    })
  }

  render() {
    return (
      <div>
        <WallBody
          email={this.state.email}
          donor={this.state.name}
          categories={this.state.categories}
          gifts={this.state.gifts}
          wallName={this.state.wallName}
          address={this.state.address}
          city={this.state.city}
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
