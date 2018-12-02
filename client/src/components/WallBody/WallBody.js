import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import "./autocomplete.css";
import "./WallBody.css";

const WallBody = props => (
  <Container fluid>
    <form onSubmit={props.updateWall}>
      <Row>
        <Col size="md-6">
          <h3 style={{ textAlign: "center" }}>
            Welcome, {props.donor}
          </h3>

          <Input
            value={props.donor}
            onChange={props.handleItemChange}
            name="name"
            placeholder="Full Name (required)"
            id="UserfirstName"
          />

          <Input

            value={props.wallName}
            onChange={props.handleItemChange}
            name="wallName"
            placeholder="Wall Name (required)"
            id="wallName"
          />

          <Input
            value={props.city}
            onChange={props.handleItemChange}
            name="city"
            placeholder="City (required)"
            id="UserAddress"
          />

          <Input
            value={props.address}
            onChange={props.handleItemChange}
            name="address"
            placeholder="Zip Code (required)"
            id="UserAddress"
          />
          <Input
            value={props.email}
            onChange={props.handleItemChange}
            name="email"
            placeholder="Email (required)"
            id="UserEmail"
          />

          <button
            id="categories"
            className="button btn btn-primary"
            onClick={props.addClick}
          >
            Add More Items
                </button>

          

              <Row>
                <Col size="lg-12">
            {props.gifts.map((item, index) => (
           
                <Col size="lg-6">
                  
                  <div key={index}>
                  
                    <Col size="lg-2">
                      <i
                        className="fas fa-trash-alt"
                        aria-hidden="true"
                        onClick={(event) => props.removeClick(index, event)}
                      />
                    </Col>
                    <Col size="lg-10">
                      <Input
                        value={item}
                        name="item"
                        placeholder="Item Name (required)"
                        onChange={(event) => props.handleGiftChange(index, event)}
                      />

                      <select name="category" value={props.categories[index]} onChange={(event) => props.handleCategoryChange(index, event)}>
                        <option value="None">Category</option>
                        <option value="Food">Food</option>
                        <option value="Clothing">Clothing</option>
                      </select>
                   
                    </Col>
                   
                  </div>
                  
                  </Col>
                
                ))}
                </Col>
            </Row>
            <br />

          <div id="updateStatus">
          {props.updateStatus}
          </div>

          <button
            id="updateWallButton"
            className="btn btn-success ld-over-full-inverse"
          >
            <div className="ld ld-ball ld-flip"></div>Update Wall
              </button>
          <br />

        </Col>
        <Col size="md-6 sm-12">
          <br />
          <Jumbotron>
            <h5>{`Donor Name: ${props.donor}`}</h5>
            <h5>{`Wall Name: ${props.wallName}`}</h5>
            <h5>{`Email: ${props.email} `}</h5>
            <h5>{`City: ${props.city} `}</h5>
            <h5>{`Zip Code: ${props.address} `}</h5>
          </Jumbotron>
        </Col>
      </Row>
    </form>
  </Container>

)

export default WallBody;



