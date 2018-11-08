import React from 'react'
import httpClient from '../../httpClient'
import "./SignUp.css";
// const wallControllers = require("../../controllers/wallControllers");
// import routes from '../../routes/api'
// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
				// console.log("user",user)
				// this.createWall(this.state.fields.name, this.state.fields.email)
			}
			
		})
		
		// console.log("ino beggo",this.state.fields)
	}



	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33 signUpDiv'>
						<h1 className="signUpHeader">Sign Up</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)} >
							<input type="text" placeholder="Name" name="name" value={name} required/>
							<input type="email" placeholder="Email" name="email" value={email} required/>
							<input type="password" placeholder="Password" name="password" value={password} 
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters" required/>
							<div className="signUpBtn">
							<button className="registerBtn">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp