import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import DashboardContainer from "./DashboardContainer";
import Login from "./Login";
import Signup from "./Signup";

class UserContainer extends Component {
	render() {
		if (this.props.isLoggedIn) {
			return <DashboardContainer />;
		} else if (this.props.location.pathname === "/login") {
			return <Login />;
		} else if (this.props.location.pathname === "/signup") {
			return <Signup />;
		} else {
			return <Redirect to="/login" />;
		}
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps)(UserContainer);
