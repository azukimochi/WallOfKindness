import React, { Component } from 'react'
import Jumbotron from "../../components/Jumbotron";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Col, Row, Container } from "../../components/Grid";
import "./Main.css"



class Main extends Component {
  state = {
    isAuthorized: false
  }
  componentDidMount = () => {
    const isAuthorized = localStorage.getItem("auth")
    if (isAuthorized === "true") {
      this.setState({ isAuthorized: true })
    }
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="welcomeMsg">Wall of Kindness</h1>
          {/* <h2 className="subText">The average Canadian consumer throws out an estimated 170kg of food a year. </h2> */}
          <h2 className="subText">feed your heart and your stomach</h2>


        </Jumbotron>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="sm-6">
              <h3 className="mainHeaders">Search for Donated Items</h3>
              <p className="pageContainers">Search for food or used garments and connect with donors through email. Here at our Wall, we try to create a safe and judgement-free environment to donate unneeded food and clothing and reduce waste. </p>
              <a href="/search"><button className="searchBtn" >Search Page</button></a>
            </Col>

            <Col size="sm-6 donate">
              <h3 className="mainHeaders">Donate to Someone in Need</h3>
              <p className="pageContainers">Sign up to make your 'Wall of Kindness' and become a donor. Users may contact you via email to obtain your donations. Sign up and see how you can help your fellow neighbours in a pinch! Everyone is welcome to take part in change.</p>
              <div className="groupButtons">
                <a href="signUp"><button disabled={this.state.isAuthorized} className="registerBtn register">Register</button></a>
                <a href="login"><button disabled={this.state.isAuthorized} className="signInBtn signIn">Sign-In</button></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Main;