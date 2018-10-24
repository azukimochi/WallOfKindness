import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




//////////////Import Pages///////////////////

// import Main from "./pages/Main";
// import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
// import NoMatch from "./pages/NoMatch";

////////Import Components//////////////////


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>

        {/* <Route exact path="/" component={Main} /> */}
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/donerPage" component={DonerPage} /> */}
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        {/* <Route component={NoMatch} /> */}

        

      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;

