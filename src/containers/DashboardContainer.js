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
		// let upcomingTrips = [];
		// let pastTrips = [];
		let allTrips = [];
		let answers = [];

		const today = formatISO(new Date());

		this.props.trips.forEach(
			(trip) => {
				// const today = formatISO(new Date());

				// if (isFuture(trip.start_date)) {
				// 	upcomingTrips = [...upcomingTrips, trip];
				// } else {
				// 	pastTrips = [...pastTrips, trip];
				// }
				const date = trip.start_date.split("T")[0];
				const dateFormatted = new Date(date);
				const answer = isBefore(new Date(), dateFormatted);

				// const answer = isFuture(trip.start_date);
				// allTrips.push(trip.start_date);

				allTrips.push(dateFormatted);
				answers.push(answer);
				// console.log(trip.start_date);
				// console.log(answer);

				// return (
				// 	(<UpcomingTrips trips={upcomingTrips} />),
				// 	(<PastTrips trips={pastTrips} />)
				// );
			}
			// (console.log(trip), (<TripCard trip={trip} />))
		);
		// console.log(today);
		console.log(new Date());
		console.log(allTrips);
		console.log(answers);
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
