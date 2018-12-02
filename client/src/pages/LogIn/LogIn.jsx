import React, { Component } from 'react'
import API from "../../utils/API.js"
import "./LogIn.css";

class LogIn extends Component {
	state = {
		email: "",
		password: "",
		statusMsg: ""
	}

	onInputChange = event => {
		this.setState({[event.target.name]: event.target.value}, 
			() => {
			console.log(this.state.email)
			// console.log(this.state.password)
			}
		)}

	onFormSubmit = event => {
		event.preventDefault();
		const loginData = {
			email: this.state.email,
			password: this.state.password
		}
		API.logIn(loginData)
		.then(res => {
			console.log(res)
			if (res.data.validate === false) {
				localStorage.clear()
				console.log("Login failed")
				this.setState({ 
					statusMsg: "Login failed. The email/password did not match.",
					email: "",
					password: ""
			 })
			} else {
				console.log('login response: Logged In', res)
				localStorage.setItem('session_token', res.data.token);
				localStorage.setItem('user_welcome', res.data.message);
				localStorage.setItem('user_id', res.data.id);
				localStorage.setItem('username', res.data.name);
				localStorage.setItem('auth', true);
				this.props.history.push('/dashboard')
			}
		})
		.catch(err => {
			console.log('login error', err)
		})
	}

	// onFormSubmit(event) {
	// 	event.preventDefault()
	// 	httpClient.logIn(this.state.fields).then(user => {
	// 		this.setState({ fields: { email: '', password: '' } })
	// 		if(user) {
	// 			this.props.onLoginSuccess(user)
	// 			this.props.history.push('/')
	// 		}
	// 	})
	// }
	
	render() {
		// const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1 className="logInHeader">Log In</h1>
						<form onSubmit={this.onFormSubmit}>
							<input 
							type="email" 
							placeholder="Enter a valid email address" 
							name="email" 
							value={this.state.email} 
							onChange={this.onInputChange}
							required/>

							<input 
							type="password" 
							placeholder="Password" 
							name="password" 
							value={this.state.password} 
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}" 
							title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters" 
							onChange={this.onInputChange}
							required/>

							<div className="signUpDiv">
							<button className="logInBtn registerBtn">Log In</button>
							</div>
						</form>
						{this.state.statusMsg}

					</div>
				</div>
			</div>
		)
	}
}

export default LogIn