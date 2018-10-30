// import React, { Component } from "react";
// import { Link } from "react-router-dom";
//
// class SignIn extends Component {
//   state = {
//     email: "",
//     password: "",
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
//       email: this.state.email,
//       password: this.state.password
//     };
//     this.props.loginUser(user);
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
//         <h2 style={{ marginBottom: "40px" }}>Sign In</h2>
//         <form onSubmit={this.handleSubmit}>
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
//             <button type="submit" className="btn btn-primary">
//               Sign in User
//             </button>
//           </div>
//           <h5>
//             {" "}
//             Don't have an account? <Link to={"/signUp"}>Sign Up</Link>
//           </h5>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default SignIn;

import React from 'react'
import httpClient from '../../httpClient'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
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
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
        console.log(user);
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Log In</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Email" name="email" value={email} />
							<input type="password" placeholder="Password" name="password" value={password} />
							<button >Log In</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn
