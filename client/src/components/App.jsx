import PropTypes from "prop-types";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toasts from "./Toasts";
import { addToast } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { addToast } = this.props.actions;
    addToast({ text: "Hello, World!" });
  }

  render() {
    return (
      <main>
        <section>
          <h1>It's getting toasty!</h1>
          <p>Click the button below to dispatch a toast notification.</p>
          <button onClick={this.handleClick}>Dispatch</button>
        </section>
        <Toasts />
      </main>
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape({
    addToast: PropTypes.func.isRequired
  }).isRequired
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addToast }, dispatch)
});

export default connect(null, mapDispatchToProps)(App);