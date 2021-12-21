import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTrips } from "../actions/tripActions";
import { UserFooter } from "./UserFooter";
import NextTrip from "./NextTrip";
import { showModal } from "../actions/modalActions";
import ModalContainer from "./ModalContainer";
import { refreshDashboard } from "../actions/userActions";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import TripCard from "./TripCard";
import TextField from "@mui/material/TextField";

class DashboardContainer extends Component {
	componentDidMount() {
		const user = this.props.user.user || this.props.user;
		this.props.fetchTrips(user);
	}

	componentDidUpdate(prevProps) {
		const user = this.props.user.user || this.props.user;

		if (prevProps.newTripCreated !== this.props.newTripCreated) {
			this.props.clearTripCreatedStatus();
			this.props.refreshDashboard(user);
		}
	}

	handleClick = () => {
		this.props.showModal({ type: "new trip" });
	};

	logOutUser = () => {
		this.props.logOutUser();
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.history.back();
	};

	render() {
		const {
			first_name,
			last_name,
			joined,
			next_trip,
			past_trips,
			upcoming_trips
		} = this.props.user.user || this.props.user;

		return (
			<div className="dashboard">
				<div className="info container">
					<div className="user">
						<div className="name">
							{first_name} {last_name}
						</div>
						<div className="joined text">
							Joined <b>{joined}</b>
						</div>
						<div className="total-trips text">
							Taken <b>{past_trips.length}</b> trips
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
								value={new Date()}
								readOnly={true}
								disabled={true}
								onChange={() => {}}
								sx={{ fontFamily: "Poppins" }}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
						<div className="upcoming-trip title">Upcoming Trip 🚗</div>
						<NextTrip trip={next_trip} />
					</div>
				</div>
				<div className="all-trips-container">
					<div className="upcoming-trips-container">
						<div className="titles">Upcoming Trips</div>
						<TripCard trips={upcoming_trips} />
					</div>
					<div className="past-trips-container">
						<div className="titles">Past Trips</div>
						<TripCard trips={past_trips} />
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
	newTripCreated: state.trips.newTripCreated
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTrips: (userInfo) => dispatch(fetchTrips(userInfo)),
		showModal: (modalInfo) => dispatch(showModal(modalInfo)),
		logOutUser: () => dispatch({ type: "LOGGED_OUT" }),
		clearTripCreatedStatus: () =>
			dispatch({ type: "CLEAR_TRIP_CREATED_STATUS" }),
		refreshDashboard: (userInfo) => dispatch(refreshDashboard(userInfo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
