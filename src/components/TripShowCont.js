import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchATrip } from "../actions/tripActions";
import { addPlace } from "../actions/tripActions";
// import { addPlace } from "../actions/placeAction";
import TripShow from "./TripShow";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { CirclePlus } from "akar-icons";
import DateFormatting from "./DateFormatting";
import { fetchTripModal } from "../actions/modalActions";

class TripShowCont extends Component {
	state = {
		place_name: ""
	};

	componentDidUpdate(prevProps) {
		// const user = this.props.user.user || this.props.user;

		if (prevProps.newPlaceAdded !== this.props.newPlaceAdded) {
			// debugger;
			this.props.clearPlaceAddedStatus();
			// this.fetchTripModal();

			this.props.fetchTripModal(
				{ type: "show trip" },
				this.props.showFetchedTrip
			);
			// this.setState({ place_name: "" });

			// this.props.refreshTripModal();

			// this.props.clearTripCreatedStatus();
			// this.props.refreshDashboard(user);
		}
	}

	handleChange = (e) => {
		// this.setState({ place: e.target.value }, () => {
		// 	console.log(this.state);
		// });
		this.setState({ place_name: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlace({
			...this.state,
			trip_id: this.props.showFetchedTrip.id
		});
		this.setState({ place_name: "" });
	};

	render() {
		// debugger;
		// const notNull = Object.values(this.props.showFetchedTrip).every(
		// 	(value) => value !== null
		// );
		if (this.props.showFetchedTrip) {
			const { trip_name, start_date, end_date, places, days_left_till } =
				this.props.showFetchedTrip;

			return (
				<div>
					{/* <TripShow trip={this.props.showFetchedTrip} /> */}
					<div className="show-page title">{trip_name}</div>
					<div>{DateFormatting(start_date, end_date)}</div>
					{days_left_till !== "N/A" ? <div>D-{days_left_till}</div> : null}
					Add to your itinerary here.
					<form onSubmit={this.handleSubmit}>
						{/* <TextField id="standard-basic" label="Place" variant="standard" /> */}
						<TextField
							id="outlined-basic"
							// label="Outlined"
							variant="outlined"
							size="small"
							value={this.state.place_name}
							onChange={this.handleChange}
						/>
						<IconButton color="primary" type="submit">
							<CirclePlus strokeWidth={2} size={24} />
						</IconButton>
					</form>
					{places.map((place, idx) => {
						return (
							<ul>
								<li key={idx}>{place.place_name}</li>
							</ul>
						);
					})}
				</div>
			);
		} else return null;
	}
}
const mapStateToProps = (state) => ({
	showFetchedTrip: state.trips.showFetchedTrip,
	newPlaceAdded: state.trips.newPlaceAdded
});

const mapDispatchToProps = (dispatch) => {
	return {
		addPlace: (placeInfo) => dispatch(addPlace(placeInfo)),
		clearPlaceAddedStatus: () => dispatch({ type: "CLEAR_PLACE_ADDED_STATUS" }),
		fetchTripModal: (modalInfo, tripInfo) =>
			dispatch(fetchTripModal(modalInfo, tripInfo))
		// refreshTripModal: () => dispatch()

		// addPlace: (placeInfo) => dispatch({ type: "ADD_PLACE" }, placeInfo)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TripShowCont);
