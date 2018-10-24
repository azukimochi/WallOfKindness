import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  };

  // componentDidMount() {
  //     if(this.props.auth.isAuthenticated) {
  //         this.props.history.push('/');
  //     }
  // }

  render() {
    const { errors } = this.state;
    return (
      <div className="container" style={{ marginTop: "50px", width: "700px",textAlign:"center" }}>
        <h2 style={{ marginBottom: "40px" }}>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control form-control-lg"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control form-control-lg"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign in User
            </button>
          </div>
          <h5>
            {" "}
            Don't have an account? <Link to={"/signUp"}>Sign Up</Link>
          </h5>
        </form>
      </div>
    );
  }
}

export default SignIn;
