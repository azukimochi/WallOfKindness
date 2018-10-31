import React from 'react'
import httpClient from '../../httpClient'
import API from "../../utils/API";
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
				// console.log("ino beggo",this.props)
				// this.createWall(this.state.fields.name, this.state.fields.email)
			}
			
		})
		this.createWall()
		// console.log("ino beggo",this.state.fields)
	}

	createWall=()=>{
		console.log("ino beggo",this.state.fields)
		API.createNewWall({
			firstName:this.state.fields.name,
			lastName:"",
			userName:"",
			email: this.state.fields.email,
			isDonor:true,
			city : "",
			zipCode : "",
			category : [],
			gifts: [],
			wallName: ""
	
		  })
		.then(() => {
		  console.log('New Wall Created');
		})
	  }


	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Sign Up</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)} >
							<input type="text" placeholder="Name" name="name" value={name} />
							<input type="text" placeholder="Email" name="email" value={email} />
							<input type="password" placeholder="Password" name="password" value={password} />
							<button>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp