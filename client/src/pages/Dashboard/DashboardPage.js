import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
// import Autocomplete from  'react-autocomplete';
// import { giftTypeStock, matchGiftType } from './dataGiftType';
// import { giftNameStock, matchGiftName } from './dataGiftName';

// import './autocomplete.css';
import Dashboard from './Dashboard.js';
class DashboardPage extends Component {
  state = {
   giftType: "",
    giftName:"",
    secretData: '',
    user: {},
    names:{
      firstName:'',
      // middleNmae:'',
      lastName:''
    },
    address: {
      // streetAddress1: '',
      // streetAddress2: '',
      // city: '',
      // state: '',
      zipCode: ''
      // phoneNumber:''
    },
    categories: [],
    gifts: [],
    wall: {
      wallName: ''
    }
    
  };

  componentDidMount() {
    // this.loadWall();
  }



  loadWall = () => {
    // e.preventDefault();
    console.log(this.state);
  
    console.log(this.state.gifts);
    // if (this.state.item && this.state.area && this.state.range){
    
        // API.saveWallInfo({
          API.loadWallInfo({
          id : this.state.user.email,
          firstName:this.state.names.firstName,
          // middleName:this.state.names.middleName,
          lastName:this.state.names.lastName,
          // streetAddress1 : this.state.address.streetAddress1,
          // streetAddress2 : this.state.address.streetAddress2,
          city : this.state.address.city,
          // state : this.state.address.state,
          zipCode : this.state.address.zipCode,
          category : this.state.categories,
          gifts: this.state.gifts,
          wallName: this.state.wall.wallName
  
        })
             
  
     
    .then((response) => {
      console.log(response.data);
      this.loadReponseData(response.data[0]);
    })
  
  }
  

  loadReponseData(data){
    this.setState({
      names:{
        firstName:data.firstName,
        // middleNmae:data.middleNmae,
        lastName:data.lastName

      }
    });
    this.setState({
      address:{
        // streetAddress1: data.streetAddress1,
        // streetAddress2: data.streetAddress2,
        // city: data.city,
        // state: data.state,
        zipCode: data.zipCode,
        // phoneNumber:data.phoneNumber
    }});
    this.setState({categories: data.category});
    this.setState({gifts: data.gifts});
};

updateWall(e) {
  e.preventDefault();
  console.log(this.state);

  // console.log(this.state.gifts);
  // if (this.state.item && this.state.area && this.state.range){
  
      API.saveWallInfo({
        id : this.state.user.email,
        firstName:this.state.names.firstName,
        // middleName:this.state.names.middleName,
        lastName:this.state.names.lastName,
        // streetAddress1 : this.state.address.streetAddress1,
        // streetAddress2 : this.state.address.streetAddress2,
        city : this.state.address.city,
        // state : this.state.address.state,
        zipCode : this.state.address.zipCode,
        category : this.state.categories,
        gifts: this.state.gifts,
        wallName: this.state.wall.wallName

      })
           

   
  .then((response) => {
    console.log(response.data);
    this.loadReponseData(response.data);
  })

}

addClicked=(e)=> {
  e.preventDefault();
  console.log("e.target",e.target)
  let itemClicked = e.target.id;

  let currentState = this.state[itemClicked];
  console.log("itemClicked",itemClicked )
  console.log("current state",currentState )
  currentState.push("");
  console.log("current state",currentState )
  this.setState({itemClicked: currentState});
    
};

removeClicked(e) {
  e.preventDefault();
  let itemClicked = e.target.dataset.attribute;
    let itemGroup = e.target.dataset.group;
    let currentState = this.state[itemGroup];
    currentState.splice(itemClicked, 1);
    this.setState({itemGroup: currentState});
};


itemChange(e) {
  let itemToChange = e.target.dataset.attribute;
  let itemGroup = e.target.dataset.group;
  let currentState = this.state[itemGroup];
  currentState[itemToChange] = e.target.value;
  this.setState({itemGroup: currentState});
};

 

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
      secretData={this.state.secretData} 
      user={this.state.user} 
      address={this.state.address} 
      names={this.state.names}
      categories={this.state.categories} 
      gifts={this.state.gifts} 
      wallName={this.state.wall.wallName} 
      btnClickHandler={(e) => {this.updateWall(e)}} 
      addClick={(e) => {this.addClicked(e)}} 
      removeClick={(e) => {this.removeClicked(e)}} 
      itemChanged={(e) => {this.itemChange(e)}} 

      />
      </div>
      );


  }
}

export default DashboardPage;
