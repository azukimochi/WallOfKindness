import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
    <div>
      <Jumbotron>
        <h1>Welcome to the Wall of Kindness</h1>
        <h2>The average Canadian consumer throws out an estimated 170kg of food a year. Shocking? Let's break that pattern...</h2>
      </Jumbotron>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="sm-6">
           <h3>Search for donated items</h3>
           <p>Search for fresh food or furniture to complete your living room and connect with doners through email. Here at appName, we offer a safe and judgement free environment to share and reduce wastage. </p>
           <button>Search Page</button>
          </Col>
     
          <Col size="sm-6">
          <h3>Be an angel- Donate</h3>
          <p>Sign up and make your 'Wall of Kindness'. A donee will reach your by email for more information.</p>
          <button>Sign-Up</button>
          <button>Sign-In</button>
         
          </Col>
        </Row>
      </Container>
    </div>
  );
  
  export default About;