import React, { Component } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import { connect } from "react-redux";
import Login from "../components/Login";

class LoginContainer extends Component {
	// export default class LoginContainer extends Component {
	state = {
		isLoggedIn: ""
	};

	render() {
		return <Login isLoggedIn={this.props.isLoggedIn} />;
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.isLoggedIn
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(LoginContainer);
