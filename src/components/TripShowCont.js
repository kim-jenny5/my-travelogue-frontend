import React, { Component } from "react";
import { connect } from "react-redux";
import { addPlace } from "../actions/tripActions";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { CirclePlus } from "akar-icons";
import DateFormatting from "./dateFormatting";
import { fetchTripModal } from "../actions/modalActions";

class TripShowCont extends Component {
	state = {
		place_name: ""
	};

	componentDidUpdate(prevProps) {
		if (prevProps.newPlaceAdded !== this.props.newPlaceAdded) {
			this.props.clearPlaceAddedStatus();

			this.props.fetchTripModal(
				{ type: "show trip" },
				this.props.showFetchedTrip
			);
		}
	}

	handleChange = (e) => {
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
		if (this.props.showFetchedTrip) {
			const { trip_name, start_date, end_date, places, days_left_till } =
				this.props.showFetchedTrip;

			return (
				<div className="show-page">
					<div className="quick-info-container">
						<div className="quick-info">
							<div className="title">{trip_name}</div>
							<div>{DateFormatting(start_date, end_date)}</div>
							{days_left_till !== "N/A" ? (
								<div>
									D-<span className="d-day">{days_left_till}</span>
								</div>
							) : null}
						</div>
					</div>
					<div className="details">
						<div className="subtitle-1">Where to?</div>
						<div className="subtitle-2">Add to your itinerary here.</div>
						<form onSubmit={this.handleSubmit} className="new-place-form">
							<span>
								<TextField
									id="outlined-basic"
									// label="Outlined"
									variant="outlined"
									size="small"
									value={this.state.place_name}
									onChange={this.handleChange}
								/>
							</span>
							<span>
								<IconButton color="primary" type="submit" className="add-btn">
									<CirclePlus strokeWidth={2} size={24} />
								</IconButton>
							</span>
						</form>
						<div className="subtitle-1">Current Itinerary</div>
						{places.map((place, idx) => {
							return (
								<ul className="place-list">
									<li key={idx}>{place.place_name}</li>
								</ul>
							);
						})}
					</div>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TripShowCont);
