import React from "react";
import Jumbotron from "../../components/Jumbotron";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Col, Row, Container } from "../../components/Grid";
import "./Main.css"

const Main = () => (
    <div>
      <Jumbotron>
        <h1 className="welcomeMsg">Welcome to the Wall of Kindness</h1>
        <h2 className="subText">The average Canadian consumer throws out an estimated 170kg of food a year. Shocking? Let's break that pattern...</h2>
      </Jumbotron>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="sm-6">
           <h3 className="mainHeaders">Search for Donated Items</h3>
           <p className="pageContainers">Search for fresh food, or household items like furniture to complete your living room and connect with donors through email. Here at our Wall, we try to create a safe and judgement free environment to share resources and reduce wastage. </p>
           <a href="/search"><button className="searchBtn" >Search Page</button></a>
          </Col>
     
          <Col size="sm-6">
          <h3 className="mainHeaders">Donate to Someone in Need</h3>
          <p className="pageContainers">Sign up to make your 'Wall of Kindness' and become a donor. A recipient may contact you via messages for more information. Sign up and see how you can help your fellow neighbours in a pinch! Everyone is welcome to join</p>
          <div className="groupButtons">
          <a href="signUp"><button className="registerBtn register">Register</button></a>
          <a href="login"><button className="signInBtn signIn">Sign-In</button></a>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
  export default Main;