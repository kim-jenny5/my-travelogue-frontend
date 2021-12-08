import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";
// import { Redirect } from "react-router";
import DashboardContainer from "./DashboardContainer";
import Login from "./Login";
import Signup from "./Signup";
import { fetchTrips } from "../actions/tripActions";
import NewTripForm from "./NewTripForm";

class UserContainer extends Component {
	// this.props.location.pathname

	render() {
		// debugger;
		if (this.props.isLoggedIn) {
			// debugger;
			// return <DashboardContainer user={this.props.user} />;
			return <DashboardContainer />;
		} else if (this.props.location.pathname === "/login") {
			return <Login />;
		} else if (this.props.location.pathname === "/signup") {
			return <Signup />;
			// } else if (this.props.location.pathname === "/dashboard/trips/new") {
			// 	return <NewTripForm />;
		} else if (!this.props.isLoggedIn) {
			return <Redirect to="/login" />;
		}

		<div>
			<Switch>
				<Route exact path="/dashboard/trips/new" component={NewTripForm} />
			</Switch>
		</div>;

		// } else {
		// 	// return <Login />;
		// 	return <Redirect to="/login" />;
		// }
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
	user: state.user.user,
	isLoggedIn: state.user.isLoggedIn
});

// const mapDispatchToProps = (dispatch) => {
// 	return { fetchTrips: (user_info) => dispatch(fetchTrips(user_info)) };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
export default connect(mapStateToProps)(UserContainer);
