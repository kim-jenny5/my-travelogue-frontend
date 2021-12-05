import React, { Component } from "react";
import { Redirect } from "react-router";
// import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
// import DashboardContainer from "./DashboardContainer";
import Login from "../components/Login";
import Signup from "../components/Signup";

class UserContainer extends Component {
	primaryRender() {
		// this.props.isLoggedIn ? (<Redirect to="/myprofile"/>) : <Login />
		if (this.props.isLoggedIn) {
			// debugger;
			// return <ProfileContainer />;
			// return <Redirect push to="/dashboard" />;
			// return <Redirect to="/dashboard" />;
			// return <DashboardContainer />;
			return <Redirect to="/dashboard" />;
			// return <Link to="/dashboard" />;
		} else if (this.props.match.path === "/signup") {
			return <Signup />;
			// return <Redirect to="/signup" />;
		} else {
			return <Login />;
			// return <Redirect to="/login" />;
		}
	}

	render() {
		return <>{this.primaryRender()}</>;
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoggedIn: state.user.isLoggedIn
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(UserContainer);
// export default LoginContainer;
