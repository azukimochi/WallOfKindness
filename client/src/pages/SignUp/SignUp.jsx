import React, { Component } from 'react'
// import httpClient from '../../httpClient'
import API from "../../utils/API.js"
import { withRouter } from 'react-router-dom'
import "./SignUp.css";
// const wallControllers = require("../../controllers/wallControllers");
// import routes from '../../routes/api'
// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		statusMsg: ""
	}

	onInputChange = event => {
		event.preventDefault();
		this.setState({[event.target.name]: event.target.value}, 
			() => {
			console.log(this.state.name),
			console.log(this.state.email),
			console.log(this.state.password)
			}
		)}

	onFormSubmit = event => {
		event.preventDefault();
		const newUserData = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}
		API.register(newUserData)
		.then(response => {
			console.log(response)
			if (response.data.validate === false) {
				console.log("The email is already taken")
				this.setState({
					statusMsg: "The registration failed. This email already has an account!",
					name: "",
					email: "",
					password: ""
				})
			} else {
				console.log("Successful sign-up!")
				this.props.history.push("/login")
			}
			
		}).catch(error => {
			console.log('signup error: ')
			console.log(error)

		})
	}
	// onFormSubmit(event) {
	// 	event.preventDefault()
	// 	httpClient.signUp(this.state.fields).then(user => {
	// 		this.setState({ fields: { name: '', email: '', password: '' } })
	// 		if(user) {
	// 			this.props.onSignUpSuccess(user)
	// 			this.props.history.push('/')
				// console.log("user",user)
				// this.createWall(this.state.fields.name, this.state.fields.email)
		// 	}
			
		// })
		
		// console.log("ino beggo",this.state.fields)
	// }

	// onFormSubmit(event)



	
	render() {
		// const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33 signUpDiv'>
						<h1 className="signUpHeader">Sign Up</h1>
						<form  onSubmit={this.onFormSubmit} >

							<input 
							type="text" 
							placeholder="Name" 
							name="name" 
							value={this.state.name} 
							onChange={this.onInputChange}
							required/>

							<input 
							type="email" 
							placeholder="Email" 
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
							onChange={this.onInputChange}
							title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters" required/>
							
							<div className="signUpBtn">
							<button className="registerBtn">Sign Up</button>
							</div>
						</form>
						{this.state.statusMsg}
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp