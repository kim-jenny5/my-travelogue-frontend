import React, { Component } from "react";
import { Redirect } from "react-router";
// import { Route, Switch } from "react-router-dom";
// import { currentUser } from "../api/fetchUser";
import { connect } from "react-redux";
// import Home from "../components/Home";
import ProfileContainer from "./ProfileContainer";
import Login from "../components/Login";

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
			// const name = usersName();
			return (<ProfileContainer />), (<Redirect push to="/dashboard" />);
		} else {
			return <Login />;
		}
		// console.log(this.props);

		// debugger;
	}

	render() {
		// console.log(this.props.user);
		// debugger;
		// return <Login isLoggedIn={this.props.isLoggedIn} />;
		return (
			// <div>
			<>{this.primaryRender()}</>
			// </div>
		);
	}
}

{
	/* <Login isLoggedIn={this.props.isLoggedIn} /> */
}
{
	/* <UserContainer isLoggedIn={this.props.isLoggedIn} /> */
}
const mapStateToProps = (state) => ({
	user: state.user,
	isLoggedIn: state.isLoggedIn
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(UserContainer);
// export default LoginContainer;
