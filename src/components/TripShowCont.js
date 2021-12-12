import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchATrip } from "../actions/tripActions";
import TripShow from "./TripShow";

class TripShowCont extends Component {
	render() {
		const notNull = Object.values(this.props.fetchedTrip).every(
			(value) => value !== null
		);

		if (notNull) {
			return <TripShow trip={this.props.fetchedTrip} />;
		} else return null;
	}
}
const mapStateToProps = (state) => ({ fetchedTrip: state.trips.fetchedTrip });

export default connect(mapStateToProps)(TripShowCont);
