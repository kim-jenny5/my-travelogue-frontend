import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { fetchTrips } from "../actions/tripActions";
import { UserFooter } from "./UserFooter";
import UserHeader from "./UserHeader";
import UpcomingTrips from "./UpcomingTrips";
import PastTrips from "./PastTrips";
import NextTrip from "./NextTrip";
import TripDetails from "./TripDetails";
import NewTripForm from "./NewTripForm";
import { showModal } from "../actions/modalActions";
import ModalContainer from "./ModalContainer";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import PickersDay from "@mui/lab/PickersDay";

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

	handleClick = () => {
		// debugger;
		// window.history.pushState(this.props.user, "", "/dashboard/trips/new");
		// return <NewTripForm />;
		// const modalInfo = { open: true, title: "New Trip Modal" };
		// const modalInfo = { title: "New Trip Modal" };
		// this.props.showModal(modalInfo);

		// this.props.showModal({ type: "New Trip Modal" });
		this.props.showModal({ type: "new trip" });
	};

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

		// debugger;

		return (
			<div className="dashboard">
				<UserHeader />
				<div className="info container">
					<div className="user">
						<div className="name">
							{first_name} {last_name}
						</div>
						<div className="text">Joined {joined}</div>
						<div className="text">
							Taken <b>{this.props.pastTrips.length}</b> trips
						</div>
					</div>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<StaticDatePicker
							displayStaticWrapperAs="desktop"
							orientation="portrait"
							openTo="day"
							readOnly="true"
							disabled="true"
							sx={{ fontFamily: "Poppins" }}
						/>
					</LocalizationProvider>
					{/* <div className="next-trip-container">
						<NextTrip trip={this.props.nextTrip} />
					</div> */}
					{/* <div>{first_upcoming_trip}</div> */}
				</div>
				{/* <div className="trip container">
					<UpcomingTrips trips={this.props.upcomingTrips} />
					<PastTrips trips={this.props.pastTrips} />
				</div> */}
				{/* <UpcomingTrips trips={this.props.trips.upcomingTrips} />
				<PastTrips trips={this.props.trips.pastTrips} /> */}
				{/* <button onClick={this.handleClick}>
					<Link to="/dashboard/trips/new">+ New Trip</Link>
				</button> */}

				<button onClick={this.handleClick} className="new-trip-btn">
					+ New Trip
				</button>

				{/* <button onClick={this.handleClick}>+ New Trip</button> */}

				{/* <Link to="/dashboard/trips/new">+ New Trip</Link> */}
				{/* <UserFooter user={this.props.user} /> */}
				<UserFooter firstName={first_name} />
				<ModalContainer />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	upcomingTrips: state.trips.upcomingTrips,
	pastTrips: state.trips.pastTrips,
	nextTrip: state.trips.nextTrip
	// isLoggedIn: state.user.isLoggedIn,
	// trips: state.trips.trips
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTrips: (userInfo) => dispatch(fetchTrips(userInfo)),
		// showModal: () => dispatch({ type: "SHOW_MODAL" })
		showModal: (modalInfo) => dispatch(showModal(modalInfo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
// export default connect(mapStateToProps)(DashboardContainer);
