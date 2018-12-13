import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import LogIn from './pages/LogIn'
import LogOut from './pages/LogOut'
import SignUp from './pages/SignUp'
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";
import Search from "./pages/Search";
import DashboardPage from "./pages/Dashboard";
import Chat from "./pages/Chat";

const App = () => (
	<Router>
	  <div className="appContainer">
		<NavBar />
		<Switch>
		<Route exact path="/search" component={Search} />
		  <Route exact path="/login" component={LogIn} />
		  <Route exact path="/logout" component={LogOut} />
		  <Route exact path="/signup" component={SignUp} />
		  <Route exact path="/dashboard" component={DashboardPage} />
		  <Route exact path="/messages" component={Chat} />
		  <Route exact path="/" component={Main} />
		  <Route component={NoMatch} />
		</Switch>
		<Footer />
	  </div>
	</Router>
  );
  
  export default App;
