import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/donerPage" component={DonerPage} /> */}
        {/* <Route exact path="/signIn" component={signIn} /> */}
        {/* <Route exact path="/signOut" component={signOut} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;

