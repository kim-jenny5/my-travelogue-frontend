import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { fetchTrips } from "../actions/tripActions";
import { UserFooter } from "../components/UserFooter";
import UserHeader from "../components/UserHeader";
import UpcomingTrips from "../components/UpcomingTrips";
import PastTrips from "../components/PastTrips";
import { formatISO, isBefore } from "date-fns";
// import TripCard from "../components/TripCard";
// import NewTripForm from "../components/NewTripForm";

class DashboardContainer extends Component {
	componentDidMount() {
		this.props.fetchTrips(this.props.user);
	}

	produceNewTripForm = () => {
		// e.preventDefault();
		// return <Redirect to="/newtrip" />;
		// return <NewTripForm />;
		return <Link to="/newtrip" />;
	};

	upcomingOrPastTrip = () => {
		let upcomingTrips = [];
		let pastTrips = [];

		this.props.trips.map(
			(trip) => {
				const dateFormatted = new Date(trip.start_date);
				const isBeforeAns = isBefore(new Date(), dateFormatted);
				if (isBeforeAns) {
					// [...upcomingTrips, trip];
					upcomingTrips = [...upcomingTrips, trip];
					// trips = upcomingTrips.push(trip);
				} else {
					// trips = pastTrips.push(trip);
					pastTrips = [...pastTrips, trip];
				}
			}
			// (console.log(trip), (<TripCard trip={trip} />))
		);
		return (
			(<UpcomingTrips trips={upcomingTrips} />),
			(<PastTrips trips={pastTrips} />)
		);
	};

	primaryRender() {
		const { first_name, last_name, joined } = this.props.user;
		// const today = new Date();
		// format(today, "PPPP");

		return (
			<div>
				<UserHeader />
				<span>
					{first_name} {last_name}
				</span>
				<div>Joined {joined}</div>
				{this.upcomingOrPastTrip()}
				{/* <UpcomingTrips trips={this.upcomingOrPastTrip()} />
				<PastTrips trips={this.upcomingOrPastTrip()} /> */}
				<Link to="/newtrip">+ New Trip</Link>
				{/* <button onClick={this.produceNewTripForm}>+ New Trip</button> */}
				<UserFooter user={this.props.user} />
			</div>
		);
	}

	render() {
		// const { first_name, last_name, joined } = this.props.user;
		// console.log(this.props);
		if (this.props.user) {
			return <>{this.primaryRender()}</>;
		} else {
			return <Redirect to="/login" />;
			// return (
			// 	<div>
			// 		<p>Hello!</p>
			// 	</div>
			// );
		}
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	trips: state.trips.trips
});

const mapDispatchToProps = (dispatch) => {
	return { fetchTrips: (user_info) => dispatch(fetchTrips(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
