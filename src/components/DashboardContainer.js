import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { fetchTrips } from "../actions/tripActions";
import { UserFooter } from "./UserFooter";
import UserHeader from "./UserHeader";
import UpcomingTrips from "./UpcomingTrips";
import PastTrips from "./PastTrips";
// import TripCard from "../components/TripCard";
// import NewTripForm from "../components/NewTripForm";

class DashboardContainer extends Component {
	componentDidMount() {
		this.props.fetchTrips(this.props.user);
	}

	produceNewTripForm = () => {
		// return <Redirect to="/newtrip" />;
		// return <NewTripForm />;
		return <Link to="/newtrip" />;
	};

	primaryRender() {
		const { first_name, last_name, joined } = this.props.user;

		return (
			<div>
				<UserHeader />
				<span>
					{first_name} {last_name}
				</span>
				<div>Joined {joined}</div>
				<UpcomingTrips trips={this.props.upcomingTrips} />
				<PastTrips trips={this.props.pastTrips} />
				<Link to="/newtrip">+ New Trip</Link>
				<UserFooter user={this.props.user} />
			</div>
		);
	}

	render() {
		if (this.props.user) {
			return <>{this.primaryRender()}</>;
		} else {
			return <Redirect to="/login" />;
		}
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	upcomingTrips: state.trips.trips.upcomingTrips,
	pastTrips: state.trips.trips.pastTrips
});

const mapDispatchToProps = (dispatch) => {
	return { fetchTrips: (user_info) => dispatch(fetchTrips(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
