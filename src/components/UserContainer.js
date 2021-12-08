import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
// import { Redirect } from "react-router";
import DashboardContainer from "./DashboardContainer";
import Login from "./Login";
import Signup from "./Signup";
import { fetchTrips } from "../actions/tripActions";

class UserContainer extends Component {
	render() {
		if (this.props.isLoggedIn) {
			// 	// const { first_name, last_name, joined } = this.props.user;
			// 	// const { user } = this.props;
			// return <DashboardContainer user={user} />;
			// return <DashboardContainer user={this.props.user} />;
			return <DashboardContainer />;
		} else if (this.props.match.path === "/login") {
			// if (this.props.match.path === "/login") {
			// return <Redirect to="/login" />;
			return <Login />;
		} else if (this.props.match.path === "/signup") {
			// return <Redirect to="/signup" />;
			return <Signup />;
		}
		// } else {
		// 	return <Redirect to="/login" />;
		// 	// return <Login />;
		// }
	}
}

const mapStateToProps = (state) => ({
	// user: state.user.user,
	isLoggedIn: state.user.isLoggedIn
});

// const mapDispatchToProps = (dispatch) => {
// 	return { fetchTrips: (user_info) => dispatch(fetchTrips(user_info)) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
export default connect(mapStateToProps)(UserContainer);
