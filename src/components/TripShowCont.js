import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchATrip } from "../actions/tripActions";
import TripShow from "./TripShow";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Plus, CirclePlus } from "akar-icons";

class TripShowCont extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		console.log("yolo");
	};

	render() {
		const notNull = Object.values(this.props.fetchedTrip).every(
			(value) => value !== null
		);

		if (notNull) {
			return (
				<div>
					<TripShow trip={this.props.fetchedTrip} />
					<form onSubmit={this.handleSubmit}>
						<TextField
							id="standard-basic"
							label="Standard"
							variant="standard"
						/>
						<IconButton color="primary" type="submit">
							<CirclePlus strokeWidth={2} size={20} />
						</IconButton>
					</form>
				</div>
			);
		} else return null;
	}
}
const mapStateToProps = (state) => ({ fetchedTrip: state.trips.fetchedTrip });

export default connect(mapStateToProps)(TripShowCont);
