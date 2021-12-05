import React, { Component } from "react";
import { Redirect } from "react-router";
// import { Route, Switch } from "react-router-dom";
// import { currentUser } from "../api/fetchUser";
import { connect } from "react-redux";
// import Home from "../components/Home";
// import ProfileContainer from "./DashboardContainer";
// import DashboardContainer from "./DashboardContainer";
import Login from "../components/Login";
import Signup from "../components/Signup";
// import { Link } from "react-router-dom";

// import Signup from "../components/Signup";

class UserContainer extends Component {
	// usersName() {
	// 	if (this.props.user) {
	// 		const { first_name } = this.props.user.first_name;
	// 		return `${first_name.toLowerCase()}s`;
	// 	}
	// }

	primaryRender() {
		// console.log(this.props);
		// let path = this.props.match.path;
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
		} else {
			return <Login />;
		}
		// } else {
		// 	return <Home />;
		// }
		// } else {
		// 	<Redirect to="/" />;
		// }
		// } else {
		// 	return <Home />;
		// }
		// console.log(this.props);

		// debugger;
	}

	render() {
		console.log(this.props);
		console.log(this.state);
		// debugger;
		// return <Login isLoggedIn={this.props.isLoggedIn} />;
		return <>{this.primaryRender()}</>;
	}
}

const mapStateToProps = (state) => ({
	// user: state.user,
	// isLoggedIn: state.isLoggedIn
	user: state.user.user,
	isLoggedIn: state.user.isLoggedIn
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(UserContainer);
// export default LoginContainer;
