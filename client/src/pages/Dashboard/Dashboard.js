import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Dashboard extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
      <form>
        <Row>
          <Col size="md-6">
           
            <h3>Welcome, {this.props.angleName}</h3>
            {/* <form> */}
              <Input
                // value={this.props.wallName}
                onChange={this.props.handleInputChange}
                name="wallName"
                placeholder="Wall Name (required)"
                data-group="wall" 
                data-attribute="wallName"
                id="wallName"
              />
              <Input
                // value={this.props.address.streetAddress1}
                onChange={this.props.handleInputChange}
                name="streetAddress1"
                placeholder="Street Address (required)"
                data-group="address" 
                data-attribute="streetAddress1"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.streetAddress2}
                onChange={this.props.handleInputChange}
                name="streetAddress2"
                placeholder="Apt/Unit # (required)"
                data-group="address" 
                data-attribute="streetAddress2"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.city}
                onChange={this.props.handleInputChange}
                name="city"
                placeholder="City (required)"
                data-group="address" 
                data-attribute="city"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.state}
                onChange={this.props.handleInputChange}
                name="state"
                placeholder="State (required)"
                data-group="address" 
                data-attribute="state"
                id="UserAddress"
              />
              <Input
                // value={this.props.address.zipCode}
                onChange={this.props.handleInputChange}
                name="zipCode"
                placeholder="Zip Code (required)"
                data-group="address" 
                data-attribute="zipCode"
                id="UserAddress"
              />
              <Input
                // value={this.props.email}
                onChange={this.props.handleInputChange}
                name="email"
                placeholder="Email (required)"
                data-group="user" 
                data-attribute="email"
                id="UserEmail"
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
          <h5>Type of Gift:
              <ul>
                {/* {categories} */}
              </ul></h5>
              <button id="categories" className="button btn btn-primary" onClick={this.props.addCategoryBtnClick}>Add Types</button>

               <h5 className="MType">Gift Name:
              <ul>
              {/* {gifts} */}
              </ul></h5>
              <button id="gifts" className="button btn btn-primary" onClick={this.props.addGiftBtnClick}>Add Gift</button>
          
           
            
          </Col>
        </Row>
        </form>
      </Container>
    );
  }
}

export default Dashboard;
