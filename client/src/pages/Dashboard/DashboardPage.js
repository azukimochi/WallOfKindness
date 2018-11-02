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
  // componentDidMount() {
    
  //     axios.get("/api/user/"+decodedToken._id)
  //     .then((res) => {
  //       console.log('res', res)
  //     })
  //       .catch(function(error){
  //         console.log(error);
  //       }) 
      
      
  //     return console.log("decoded user ID:",decodedToken._id)
  //     return null
  //   }
  //   console.log("HELLO", this.state);
    
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
    // const { history } = this.props;
    
    // httpClientUpdate.updateUser(this.state.currentUser._id).then(user => {
		// 	this.setState({currentUser:this.state.currentUser})
		// 	// if(user) {
		// 		// this.props.onSignUpSuccess(user)
    //     // this.props.history.push('/')
    //     history.push('/update/'+this.state.currentUser._id)
		// 		// console.log("user",user)
		// 		// this.createWall(this.state.fields.name, this.state.fields.email)
		// 	// }
			
		// })
    // console.log(this.state.gifts);
    // if (this.state.item && this.state.area && this.state.range){

      const { name, wallName, email, zipCode, categories,gifts,_id } = this.state.currentUser;

      // axios.get('/api/users/'+this.state.currentUser._id, { name, wallName, email, zipCode, categories,gifts,_id })
      //   .then((res) => {
          // httpClientUpdate.updateUser(this.state.currentUser._id);
          // console.log("result",res)
          // httpClient.updateUser(this.state.currentUser._id, res)
          // this.props.history.push('/update/'+this.state.currentUser._id)


   
        // });

      httpClient.updateUser(this.state.currentUser)
        .then(user => {
          this.setState({currentUser: this.setState.currentUser})

          if(user) {
            this.props.history.push('/api/users/'+this.state.currentUser._id)
            console.log('user', user)
          }
        })

    console.log('current wall info', this.state.currentUser);
  
  }

  addClicked = e => {
    e.preventDefault();
    console.log("e.target", e.target);
    let itemClicked = e.target.id;

    let currentState = this.state[itemClicked];
    console.log("itemClicked", itemClicked);
    console.log("current state", currentState);
    currentState.push("");
    console.log("current state", currentState);
    this.setState({ itemClicked: currentState });
  };

  removeClicked(e) {
    e.preventDefault();
    let itemClicked = e.target.dataset.attribute;
    let itemGroup = e.target.dataset.group;
    let currentState = this.state[itemGroup];
    currentState.splice(itemClicked, 1);
    this.setState({ itemGroup: currentState });
  }

  itemChange(e) {
    let itemToChange = e.target.dataset.attribute;
    const itemState = this.state.currentUser;
    let itemGroup = e.target.dataset.group;
    let currentState = this.state[itemGroup];
    itemState[e.target.name] = e.target.value;
    this.setState({ currentUser: itemState });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Dashboard
         email={this.state.currentUser.email}
          user={this.state.currentUser.user}
          name={this.state.currentUser.name}
          categories={this.state.currentUser.categories}
          gifts={this.state.currentUser.gifts}
          wallName={this.state.currentUser.wallName}
          zipCode={this.state.currentUser.zipCode}
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
        />
      </div>
    );
  }
}

export default DashboardPage;
