import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";

class LoginContainer extends Component {
	// export default class LoginContainer extends Component {
	// state = {
	// 	isLoggedIn: ""
	// };

	render() {
		console.log(this.props.user);
		// debugger;
		// return <Login isLoggedIn={this.props.isLoggedIn} />;
		return <Login />;
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.isLoggedIn
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(LoginContainer);
// export default LoginContainer;
