import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { fetchTrips } from "../actions/tripActions";
import { UserFooter } from "./UserFooter";
import UserHeader from "./UserHeader";
import UpcomingTrips from "./UpcomingTrips";
import PastTrips from "./PastTrips";
import TripDetails from "./TripDetails";
import NewTripForm from "./NewTripForm";
// import TripCard from "../components/TripCard";
// import NewTripForm from "../components/NewTripForm";

class DashboardContainer extends Component {
	componentDidMount() {
		const user = this.props.user.user || this.props.user;
		// this.props.fetchTrips(this.props.user);
		this.props.fetchTrips(user);
	}

	// produceNewTripForm = () => {
	// 	// return <Redirect to="/newtrip" />;
	// 	// return <NewTripForm />;
	// 	return <Link to="/newtrip" />;
	// };

	// primaryRender() {
	// 	const { first_name, last_name, joined } = this.props.user;

	// 	return (
	// 		<div>
	// 			<UserHeader />
	// 			<span>
	// 				{first_name} {last_name}
	// 			</span>
	// 			<div>Joined {joined}</div>
	// 			<UpcomingTrips trips={this.props.trips.upcomingTrips} />
	// 			<PastTrips trips={this.props.trips.pastTrips} />
	// 			<Link to="/newtrip">+ New Trip</Link>
	// 			<UserFooter user={this.props.user} />
	// 			{/* <Route path={`${match.url}`/> */}
	// 		</div>
	// 	);
	// }

	// handleClick = () => {
	// 	// debugger;
	// 	// window.history.pushState(this.props.user, "", "/dashboard/trips/new");
	// 	return <NewTripForm />;
	// };

	render() {
		// if (this.props.isLoggedIn) {
		// 	return <>{this.primaryRender()}</>;
		// } else {
		// 	return <Redirect to="/login" />;
		// }
		// console.log(this.props);
		// console.log(this.state);
		// debugger;

		// let { first_name, last_name, joined }

		// if (Object.keys(this.props.user).length !== 2) {
		// 	{ first_name, last_name, joined } = this.props.user;
		// } else {

		// }

		const { first_name, last_name, joined } =
			this.props.user.user || this.props.user;
		// const { first_name, last_name, joined } = this.props.user.user;

		return (
			<div>
				<UserHeader />
				<span>
					{first_name} {last_name}
				</span>
				<div>Joined {joined}</div>
				<UpcomingTrips trips={this.props.upcomingTrips} />
				<PastTrips trips={this.props.pastTrips} />
				{/* <UpcomingTrips trips={this.props.trips.upcomingTrips} />
				<PastTrips trips={this.props.trips.pastTrips} /> */}
				{/* <button onClick={this.handleClick}> */}
				<Link to="/dashboard/trips/new">+ New Trip</Link>
				{/* </button> */}
				{/* <Link to="/dashboard/trips/new">+ New Trip</Link> */}
				{/* <UserFooter user={this.props.user} /> */}
				<UserFooter first_name={first_name} />
				{/* <Route path={`${match.url}`/> */}
				{/* <Switch>
					<Route
						exact
						path="/dashboard/trips/new"
						component={NewTripForm}
					></Route>
				</Switch> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	upcomingTrips: state.trips.upcomingTrips,
	pastTrips: state.trips.pastTrips
	// isLoggedIn: state.user.isLoggedIn,
	// trips: state.trips.trips
});

const mapDispatchToProps = (dispatch) => {
	return { fetchTrips: (user_info) => dispatch(fetchTrips(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
// export default connect(mapStateToProps)(DashboardContainer);
