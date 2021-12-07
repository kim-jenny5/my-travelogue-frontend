import React, { Component } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router";
import DashboardContainer from "./DashboardContainer";
import Login from "./Login";
import Signup from "./Signup";

class UserContainer extends Component {
	render() {
		if (this.props.isLoggedIn) {
			// const { first_name, last_name, joined } = this.props.user;
			// const { user } = this.props;
			// return <DashboardContainer user={user} />;
			return <DashboardContainer />;
		} else if (this.props.match.path === "/login") {
			// return <Redirect to="/login" />;
			return <Login />;
		} else if (this.props.match.path === "/signup") {
			// return <Redirect to="/signup" />;
			return <Signup />;
		}
	}
}

const mapStateToProps = (state) => ({
	isloggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps)(UserContainer);
