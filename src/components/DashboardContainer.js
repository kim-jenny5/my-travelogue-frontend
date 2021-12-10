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
import TripCard from "./TripCard";

// import TripCard from "../components/TripCard";
// import NewTripForm from "../components/NewTripForm";

class DashboardContainer extends Component {
	componentDidMount() {
		const user = this.props.user.user || this.props.user;
		// this.props.fetchTrips(this.props.user);
		this.props.fetchTrips(user);
	}

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

	logOutUser = () => {
		this.props.logOutUser();
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.history.pushState(this.props.user, "", "/login");
	};

	render() {
		const { first_name, last_name, joined } =
			this.props.user.user || this.props.user;

		return (
			<div className="dashboard">
				{/* <UserHeader /> */}
				<div className="info container">
					<div className="user">
						<div className="name">
							{first_name} {last_name}
						</div>
						<div className="joined text">
							Joined <b>{joined}</b>
						</div>
						<div className="total-trips text">
							Taken <b>{this.props.pastTrips.length}</b> trips
						</div>
						<div className="logout-btn container">
							<button onClick={this.logOutUser} className="logout-btn">
								Log Out
							</button>
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
						<div className="upcoming-trip title">Upcoming Trip 🚗</div>
						<div className="next-trip-container">
							<NextTrip trip={this.props.nextTrip} />
						</div>
					</div>
				</div>
				<div className="all-trips-container">
					<div className="titles">Upcoming Trips</div>
					<div className="upcoming-trips-container">
						{/* <UpcomingTrips trips={this.props.upcomingTrips} /> */}
						{/* <TripCard trips={this.props.upcomingTrips} /> */}
					</div>
					<div className="titles">Past Trips</div>
					<div className="past-trips-container">
						{/* <PastTrips trips={this.props.pastTrips} /> */}
						{/* <TripCard trips={this.props.pastTrips} /> */}
					</div>
				</div>
				<button onClick={this.handleClick} className="new-trip-btn">
					+ New Trip
				</button>
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
		showModal: (modalInfo) => dispatch(showModal(modalInfo)),
		logOutUser: () => dispatch({ type: "LOGGED_OUT" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
// export default connect(mapStateToProps)(DashboardContainer);
