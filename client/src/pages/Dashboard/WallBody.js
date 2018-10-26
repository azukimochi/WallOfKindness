import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
import Autocomplete from  'react-autocomplete';
import { giftTypeStock, matchGiftType } from './dataGiftType';
import { giftNameStock, matchGiftName } from './dataGiftName';

import './autocomplete.css';
import Dashboard from './Dashboard.js';
class WallBody extends Component {
  state = {
   giftType: "",
    giftName:""
       
  };

//   componentDidMount() {
//     this.loadWall();
//   }



//   loadWall = () => {
//     // API.getBooks()
//     //   .then(res =>
//     //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//     //   )
//     //   .catch(err => console.log(err));
//     console.log("going to load user");
//     axios({
//       method: 'post',
//       url: 'walls/load',
//       params: {
//         id: this.state.user.email
//       }
//     })
//     .then((response) => {
//       console.log(response);
//       this.loadReponseData(response.data[0]);
//     })
//   };

//   loadReponseData(data){
//     this.setState({
//       address:{
//         streetAddress1: data.streetAddress1,
//         streetAddress2: data.streetAddress2,
//         city: data.city,
//         state: data.state,
//         zipCode: data.zipCode
//     }});
//     this.setState({categories: data.category});
//     this.setState({gifts: data.inventory});
// };

// updateWall() {
//   axios({
//     method: 'post',
//     url: 'walls/update',
//     params: {
//       id : this.state.user.email,
//       streetAddress1 : this.state.address.streetAddress1,
//       streetAddress2 : this.state.address.streetAddress2,
//       city : this.state.address.city,
//       state : this.state.address.state,
//       zipCode : this.state.address.zipCode,
//       category : this.state.categories,
//       inventory: this.state.goods,
//       businessName: this.state.shop.businessName
//     }
//   })
//   .then((response) => {
//     console.log(response.data);
//     this.loadReponseData(response.data);
//   })
// }

// addClicked(e) {
//   let itemClicked = e.target.id;
//   let currentState = this.state[itemClicked];
//   currentState.push("");
//   this.setState({itemClicked: currentState});
// };

// removeClicked(e) {
//   let itemClicked = e.target.dataset.attribute;
//   let itemGroup = e.target.dataset.group;
//   let currentState = this.state[itemGroup];
//   currentState.splice(itemClicked, 1);
//   this.setState({itemGroup: currentState});
// };


// itemChange(e) {
//   let itemToChange = e.target.dataset.attribute;
//   let itemGroup = e.target.dataset.group;
//   let currentState = this.state[itemGroup];
//   currentState[itemToChange] = e.target.value;
//   this.setState({itemGroup: currentState});
// };

 

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

  render() {
    let categories = this.props.categories.map((item, index) => (
        <li><input data-group="categories" data-attribute={index} onChange={this.props.inputChangeHandler} type="text" value={item} /><i className="fa fa-trash-o" aria-hidden="true" data-group="categories" data-attribute={index} onClick={this.props.removeClickHandler}></i></li>
      ));
  
      let gifts = this.props.gifts.map((item, index) => (
        <li><input data-attribute={index} data-group="gifts" onChange={this.props.inputChangeHandler} type="text" value={item} /><i className="fa fa-trash-o" aria-hidden="true" data-group="gifts" data-attribute={index} onClick={this.props.removeClickHandler}></i></li>
      ));


    return (

   
      <Container fluid>
      <form>
        <Row>
          <Col size="md-6">
                       <h3 style={{textAlign:"center"}}>Welcome, First Name{this.props.angel}</h3>
            {/* <form> */}
            <Input
                // value={this.props.names.firstName}
                onChange={this.props.inputChangeHandler}
                name="firstName"
                placeholder="First Name (required)"
                data-group="names" 
                data-attribute="firstName"
                id="UserfirstName"
              />
              <Input
                // value={this.props.names.middleName}
                onChange={this.props.inputChangeHandler}
                name="middleName"
                placeholder="Middles Name (optional)"
                data-group="names" 
                data-attribute="middleName"
                id="UsermiddleName"
              />
              <Input
                // value={this.props.names.lastName}
                onChange={this.props.inputChangeHandler}
                name="lastName"
                placeholder="Last Name (required)"
                data-group="names" 
                data-attribute="lastName"
                id="UserlastName"
              />
              <Input
                // value={this.props.wall.wallName}
                onChange={this.props.inputChangeHandler}
                name="wallName"
                placeholder="Wall Name (required)"
                data-group="wall" 
                data-attribute="wallName"
                id="wallName"
              />
              <Input
                // value={this.props.address.streetAddress1}
                onChange={this.props.inputChangeHandler}
                name="streetAddress1"
                placeholder="Street Address (required)"
                data-group="address" 
                data-attribute="streetAddress1"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.streetAddress2}
                onChange={this.props.inputChangeHandler}
                name="streetAddress2"
                placeholder="Apt/Unit # (optional)"
                data-group="address" 
                data-attribute="streetAddress2"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.city}
                onChange={this.props.inputChangeHandler}
                name="city"
                placeholder="City (required)"
                data-group="address" 
                data-attribute="city"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.state}
                onChange={this.props.inputChangeHandler}
                name="state"
                placeholder="State (required)"
                data-group="address" 
                data-attribute="state"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.zipCode}
                onChange={this.props.inputChangeHandler}
                name="zipCode"
                placeholder="Zip Code (required)"
                data-group="address" 
                data-attribute="zipCode"
                id="UserAddress"
              />
              <Input
                // value={this.props.email}
                onChange={this.props.inputChangeHandler}
                name="email"
                placeholder="Email (required)"
                data-group="user" 
                data-attribute="email"
                id="UserEmail"
              />
               <Input
                // value={this.props.address.phoneNumber}
                onChange={this.props.inputChangeHandler}
                name="phoneNumber"
                placeholder="Phone Number (optional)"
                data-group="address" 
                data-attribute="phoneNumber"
                id="UserphoneNumber"
              />
              
              
              <FormBtn
              id="updateWallButton"
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.props.submitBtnClick}
              >
                Update Wall
              </FormBtn>
            {/* </form> */}
          </Col>
          <Col size="md-6 sm-12">

          <Jumbotron>
            <h5>{`Angel Name: ${this.props.firstName} ${this.props.lastName}`}</h5>
            <h5>{`Wall Name: ${this.props.wallName}`}</h5>
            <h5>{`Email: ${this.props.email} `}</h5>
            <h5>{`Address: ${this.props.streetAddress1}, ${this.props.city}, ${this.props.state}, ${this.props.zipCode} `}</h5>
          </Jumbotron>

          <Col size="md-6 sm-12">
          <h5>Type of Gift:</h5>

 <Autocomplete
          value={ this.state.giftType }
          inputProps={{ id: 'states-autocomplete',placeholder: 'Type of Gift' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ giftTypeStock() }
          getItemValue={ item => item.name }
          shouldItemRender={ matchGiftType }
          onChange={(event, giftType) => this.setState({ giftType }) }
          onSelect={ giftType => this.setState({ giftType }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.abbr } >
              { item.name }
            </div>
          )}
        />
<button id="categories" className="button btn btn-primary" onClick={this.props.addCategoryBtnClick}>Add</button>
              <ul>

               {this.state.giftType} {/* for testing */}
                {categories}
              </ul>
              <br />
              </Col>
              <Col size="md-6 sm-12">

               <h5 className="MType">Gift Name:</h5>
               <Autocomplete
          value={ this.state.giftName }
          inputProps={{ id: 'states-autocomplete',placeholder: 'Name of Gift' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ giftNameStock() }
          getItemValue={ item => item.name }
          shouldItemRender={ matchGiftName }
          onChange={(event, giftName) => this.setState({ giftName }) }
          onSelect={ giftName => this.setState({ giftName }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.abbr } >
              { item.name }
            </div>
          )}
        />
        <button id="gifts" className="button btn btn-primary" onClick={this.props.addGiftBtnClick}>Add</button>

              <ul>
              {this.state.giftName} {/* for testing */}
              {gifts}
              </ul>
              </Col>
          
           
            
          </Col>
        </Row>
        </form>
      </Container>
    );
  }
}

export default WallBody;
