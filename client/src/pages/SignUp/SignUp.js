import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirm: "",
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    };
    this.props.registerUser(user, this.props.history);
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
        <h2 style={{ marginBottom: "40px" }}>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control form-control-lg"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
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
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control form-control-lg"
              name="password_confirm"
              onChange={this.handleInputChange}
              value={this.state.password_confirm}
            />
            {errors.password_confirm && (
              <div className="invalid-feedback">{errors.password_confirm}</div>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register User
            </button>
          </div>
          <h5>
            {" "}
            Already have an account? <Link to={"/signIn"}>Sign in</Link>
          </h5>
        </form>
      </div>
    );
  }
}

export default SignUp;
