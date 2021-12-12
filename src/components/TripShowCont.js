import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchATrip } from "../actions/tripActions";
import TripShow from "./TripShow";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Plus, CirclePlus } from "akar-icons";

class TripShowCont extends Component {
	state = {
		place: ""
	};

	handleChange = (e) => {
		this.setState({ place: e.target.value }, () => {
			console.log(this.state);
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		debugger;
		console.log("yolo");
		this.props.addPlace(this.state);
		this.setState({ place: "" });
	};

	render() {
		const notNull = Object.values(this.props.fetchedTrip).every(
			(value) => value !== null
		);

		if (notNull) {
			return (
				<div>
					<TripShow trip={this.props.fetchedTrip} />
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
const mapStateToProps = (state) => ({ fetchedTrip: state.trips.fetchedTrip });

// const mapDispatchToProps = (dispatch) => ({ addPlace: state. });

export default connect(mapStateToProps)(TripShowCont);
