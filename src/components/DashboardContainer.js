import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Link } from "react-router-dom";
import { fetchTrips } from "../actions/tripActions";
import { UserFooter } from "./UserFooter";
import UserHeader from "./UserHeader";
import UpcomingTrips from "./UpcomingTrips";
import PastTrips from "./PastTrips";
import TripDetails from "./TripDetails";
// import TripCard from "../components/TripCard";
// import NewTripForm from "../components/NewTripForm";

class DashboardContainer extends Component {
	componentDidMount() {
		this.props.fetchTrips(this.props.user);
	}

	// produceNewTripForm = () => {
	// 	// return <Redirect to="/newtrip" />;
	// 	// return <NewTripForm />;
	// 	return <Link to="/newtrip" />;
	// };

	primaryRender() {
		const { first_name, last_name, joined } = this.props.user;

		return (
			<div>
				<UserHeader />
				<span>
					{first_name} {last_name}
				</span>
				<div>Joined {joined}</div>
				<UpcomingTrips trips={this.props.trips.upcomingTrips} />
				<PastTrips trips={this.props.trips.pastTrips} />
				<Link to="/newtrip">+ New Trip</Link>
				<UserFooter user={this.props.user} />
				{/* {this.props.trips.map((trip) => (
					<Route
						path={`${trip.id}`}
						render={(routerProps) => (
							<TripDetails {...routerProps} trip={trip} />
						)}
					/>
				))} */}
				{/* <Route path={`${match.url}`/> */}
			</div>
		);
	}

	render() {
		if (this.props.isLoggedIn) {
			return <>{this.primaryRender()}</>;
		} else {
			return <Redirect to="/login" />;
		}
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoggedIn: state.user.isLoggedIn,
	trips: state.trips.trips
});

const mapDispatchToProps = (dispatch) => {
	return { fetchTrips: (user_info) => dispatch(fetchTrips(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
