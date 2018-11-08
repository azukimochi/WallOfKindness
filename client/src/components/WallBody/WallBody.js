import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import "./autocomplete.css";

class WallBody extends Component {
  state = {
    giftType: "",
    giftName: "",
    secretData: "",
    user: {},
    names: {
      firstName: "",
      lastName: ""
    },
    address: {
      zipCode: ""
      
    },
    categories: [],
    gifts: [],
    wall: {
      wallName: "Aboozar"
    }
  };

  render() {

    let categories = this.props.categories.map((item, index) => (
      <li key={index}>
        <input
        name="categories"
          data-group="categories"
          data-attribute={index}
          onChange={this.props.inputChangeHandlerGifts}
          type="text"
          value={item}
        />
        <i
          className="fas fa-trash-alt"
          aria-hidden="true"
          data-group="categories"
          data-attribute={index}
          onClick={this.props.removeClickHandler}
        />
      </li>
    ));

    let gifts = this.props.gifts.map((item, index) => (
      <li key={index}>
        <input
         name="gifts"
          data-attribute={index}
          data-group="gifts"
          onChange={this.props.inputChangeHandlerGifts}
          type="text"
          value={item}
        />
        <br />
        <i
          className="fas fa-trash-alt"
          aria-hidden="true"
          data-group="gifts"
          data-attribute={index}
          onClick={this.props.removeClickHandler}
        />
      </li>
    ));
    
    return (
      <Container fluid>
        <form>
          <Row>
            <Col size="md-6">
              <h3 style={{ textAlign: "center" }}>
                Welcome, {this.props.donor}
              </h3>
              
              <Input
                value={this.props.donor}
                onChange={this.props.inputChangeHandler}
                name="name"
                placeholder="Full Name"
                data-group="names"
                data-attribute="fullName"
                id="UserfirstName"
              />

              <Input

                value={this.props.wallName}
                onChange={this.props.inputChangeHandler}
                name="wallName"
                placeholder="Wall Name"
                data-group="wall"
                data-attribute="wallName"
                id="wallName"
              />

              <Input
                value={this.props.city}
                onChange={this.props.inputChangeHandler}
                name="city"
                placeholder="City (required)"
                data-group="address"
                data-attribute="city"
                id="UserAddress"
              />

              <Input
                value={this.props.zipCode}
                onChange={this.props.inputChangeHandler}
                name="zipCode"
                placeholder="Zip Code (required)"
                data-group="address"
                data-attribute="zipCode"
                id="UserAddress"
              />
              <Input
                value={this.props.email}
                onChange={this.props.inputChangeHandler}
                name="email"
                placeholder="Email (required)"
                data-group="user"
                data-attribute="email"
                id="UserEmail"
              />
             
              <Col size="md-6 sm-12">
              
                <button
                  id="categories"
                  className="button btn btn-primary"
                  onClick={this.props.addCategoryBtnClick}
                >
                  Add Categories
                </button>
                <ol>
                  {/* {this.state.giftType} for testing */}
                  {categories}
                </ol>
                <br />
              </Col>
              <Col size="md-6 sm-12">
             
                <button
                  id="gifts"
                  className="button btn btn-primary"
                  onClick={this.props.addGiftBtnClick}
                >
                  Add Gifts
                </button>

                <ol>
          
                  {gifts}
                </ol>
              </Col>

              <button
                id="updateWallButton"
                className="btn btn-success ld-over-full-inverse"
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.props.submitBtnClick}
              >
                <div className="ld ld-ball ld-flip"></div>Update Wall
              </button>
              <br />
           
            </Col>
            <Col size="md-6 sm-12">
              <br />
              <Jumbotron>
                <h5>{`Donor Name: ${this.props.donor}`}</h5>
                <h5>{`Wall Name: ${this.props.wallName}`}</h5>
                <h5>{`Email: ${this.props.email} `}</h5>
                <h5>{`City: ${this.props.city} `}</h5>
                <h5>{`Zip Code: ${this.props.zipCode} `}</h5>
              </Jumbotron>
            </Col>
          </Row>
        </form>
      </Container>
    );
  }
}

export default WallBody;
