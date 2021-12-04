import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import { currentUser } from "../api/fetchUser";
import { connect } from "react-redux";
// import Home from "../components/Home";
import Login from "../components/Login";

// import Signup from "../components/Signup";

class UserContainer extends Component {
	primaryRender() {
		// console.log(this.props);
		let path = this.props.match.path;
		if (this.props.isLoggedIn === false) return <Login />;
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
	isLoggedIn: state.isLoggedIn
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(UserContainer);
// export default LoginContainer;
