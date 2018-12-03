import React, { Component } from "react";

class LogOut extends Component {
  componentDidMount = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    return <div>nothing</div>;
  }
}

export default LogOut;
