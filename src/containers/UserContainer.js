import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import { currentUser } from "../api/fetchUser";
import { connect } from "react-redux";
// import Home from "../components/Home";
import Login from "../components/Login";

// import Signup from "../components/Signup";

class UserContainer extends Component {
	render() {
		// console.log(this.props.user);
		// debugger;
		// return <Login isLoggedIn={this.props.isLoggedIn} />;
		return (
			<div>
				<Login isLoggedIn={this.props.isLoggedIn} />
				{/* <UserContainer isLoggedIn={this.props.isLoggedIn} /> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.isLoggedIn
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(UserContainer);
// export default LoginContainer;
