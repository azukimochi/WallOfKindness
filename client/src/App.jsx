import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import "./App.css";
import httpClient from './httpClient'
// import { BrowserRouter as Router, Switch } from "react-router-dom"
import NavBar from './NavBar'
import LogIn from './pages/LogIn'
import LogOut from './pages/LogOut'
import SignUp from './pages/SignUp'
// import VIP from './views/VIP'
// import Home from './views/Home'


//////////////Import Pages///////////////////

import Main from "./pages/Main";
import Search from "./pages/Search";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import DashboardPage from "./pages/Dashboard";
// import NoMatch from "./pages/NoMatch";
import Chat from "./pages/Chat";
// import NoMatch from "./pages/NoMatch";

////////Import Components//////////////////


// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

// ________________START OF KAREN'S CODE_____________________
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
		</Switch>
	  </div>
	</Router>
  );
  
  export default App;
// ______________END OF KAREN'S CODE___________________________ 


// class App extends React.Component {
// 	state = { currentUser: httpClient.getCurrentUser() }

// 	onLoginSuccess(user) {
// 		this.setState({ currentUser: httpClient.getCurrentUser() })
// 	}

// 	logOut() {
// 		httpClient.logOut()
// 		this.setState({ currentUser: null })
// 	}
	
// 	render() {
// 		const { currentUser } = this.state
// 		return (
// 			<div className='appContainer'>

// 				<NavBar currentUser={currentUser} />
// 				<Switch>
// 				<Route path="/search" component={Search} />

// 					<Route path="/login" render={(props) => {
// 						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
// 					}} />

// 					<Route path="/logout" render={(props) => {
// 						return <LogOut onLogOut={this.logOut.bind(this)} />
// 					}} />

// 					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
// 					<Route path="/signup" render={(props) => {
// 						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
// 					}} />

// 					{/* <Route path="/vip" render={() => {
// 						return currentUser
// 							? <VIP />
// 							: <Redirect to="/login" />
// 					}} /> */}

// 					<Route path="/dashboard" render={() => {
// 						return currentUser
// 							? <DashboardPage />
// 							: <Redirect to="/login" />
// 					}} />

// 					<Route path="/messages" render={() => {
// 						return currentUser
// 							? <Chat />
// 							: <Redirect to="/login" />
// 					}} />

					
// 					<Route path="/" component={Main} />

					
					

// 				</Switch>
// 				<Footer />
// 			</div>
// 		)
// 	}
// }

// export default App