import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
// import { Redirect } from "react-router";
import DashboardContainer from "./DashboardContainer";
import Login from "./Login";
import Signup from "./Signup";
import { fetchTrips } from "../actions/tripActions";
import NewTripForm from "./NewTripForm";

class UserContainer extends Component {
	render() {
		if (this.props.isLoggedIn) {
			// return <DashboardContainer user={this.props.user} />;
			return <DashboardContainer />;
		} else if (this.props.match.path === "/login") {
			return <Login />;
		} else if (this.props.match.path === "/signup") {
			// return <Redirect to="/signup" />;
			return <Signup />;
		}
		// } else if (this.props.match.path === "/dashboard/trips/new") {
		// 	return <NewTripForm />;
		// } else {
		// 	if (this.props.match.path === "/login") {
		// 		// return <Login />;
		// 		// return <Redirect to="/login" />;
		// 	} else if (this.props.match.path === "/signup") {
		// 		return <Signup />;
		// 	} else if (this.props.match.path === "/dashboard/trips/new") {
		// 		return <NewTripForm />;
		// 	}
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
