import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchATrip } from "../actions/tripActions";
import { addPlace } from "../actions/tripActions";
// import { addPlace } from "../actions/placeAction";
import TripShow from "./TripShow";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { CirclePlus } from "akar-icons";

class TripShowCont extends Component {
	state = {
		place_name: ""
	};

	handleChange = (e) => {
		// this.setState({ place: e.target.value }, () => {
		// 	console.log(this.state);
		// });
		this.setState({ place_name: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlace({ ...this.state, trip_id: this.props.fetchATrip.id });
		this.setState({ place_name: "" });
	};

	render() {
		const notNull = Object.values(this.props.fetchATrip).every(
			(value) => value !== null
		);

		if (notNull) {
			return (
				<div>
					<TripShow trip={this.props.fetchATrip} />
					Add to your itinerary here.
					<form onSubmit={this.handleSubmit}>
						{/* <TextField id="standard-basic" label="Place" variant="standard" /> */}
						<TextField
							id="outlined-basic"
							// label="Outlined"
							variant="outlined"
							size="small"
							onChange={this.handleChange}
						/>
						<IconButton color="primary" type="submit">
							<CirclePlus strokeWidth={2} size={24} />
						</IconButton>
					</form>
				</div>
			);
		} else return null;
	}
}
const mapStateToProps = (state) => ({ fetchATrip: state.trips.fetchATrip });

const mapDispatchToProps = (dispatch) => {
	return {
		addPlace: (placeInfo) => dispatch(addPlace(placeInfo))
		// addPlace: (placeInfo) => dispatch({ type: "ADD_PLACE" }, placeInfo)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TripShowCont);
