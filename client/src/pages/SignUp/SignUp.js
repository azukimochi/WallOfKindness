// import React, { Component } from "react";
// import { Link } from "react-router-dom";
//
// class SignUp extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     password_confirm: "",
//     errors: {}
//   };
//
//   handleInputChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//
//   handleSubmit = e => {
//     e.preventDefault();
//     const user = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password_confirm: this.state.password_confirm
//     };
//     this.props.registerUser(user, this.props.history);
//
//     // this.setState({
//     //   isAuthentication: !this.state.isAuthenticated
//     // })
//   };
//
//   // componentDidMount() {
//   //     if(this.props.auth.isAuthenticated) {
//   //         this.props.history.push('/');
//   //     }
//   // }
//
//   render() {
//     const { errors } = this.state;
//     return (
//       <div className="container" style={{ marginTop: "50px", width: "700px",textAlign:"center" }}>
//         <h2 style={{ marginBottom: "40px" }}>Sign Up</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Name"
//               className="form-control form-control-lg"
//               name="name"
//               onChange={this.handleInputChange}
//               value={this.state.name}
//             />
//             {errors.name && (
//               <div className="invalid-feedback">{errors.name}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               className="form-control form-control-lg"
//               name="email"
//               onChange={this.handleInputChange}
//               value={this.state.email}
//             />
//             {errors.email && (
//               <div className="invalid-feedback">{errors.email}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Password"
//               className="form-control form-control-lg"
//               name="password"
//               onChange={this.handleInputChange}
//               value={this.state.password}
//             />
//             {errors.password && (
//               <div className="invalid-feedback">{errors.password}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="form-control form-control-lg"
//               name="password_confirm"
//               onChange={this.handleInputChange}
//               value={this.state.password_confirm}
//             />
//             {errors.password_confirm && (
//               <div className="invalid-feedback">{errors.password_confirm}</div>
//             )}
//           </div>
//           <div className="form-group">
//             <button type="submit" className="btn btn-primary">
//               Register User
//             </button>
//           </div>
//           <h5>
//             {" "}
//             Already have an account? <Link to={"/signIn"}>Sign in</Link>
//           </h5>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default SignUp;

import React from 'react'
import httpClient from '../../httpClient'

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
				// this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Sign Up</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
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
