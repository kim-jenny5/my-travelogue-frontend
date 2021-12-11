import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchATrip } from "../actions/tripActions";
import TripShow from "./TripShow";

class TripShowCont extends Component {
	// componentDidMount() {
	// 	this.props.fetchATrip();
	// }

	render() {
		// console.log(this.props);
		// debugger;
		const notNull = Object.values(this.props.fetchedTrip).every(
			(value) => value !== null
		);

		if (notNull) {
			// const { tripName, startDate, endDate } = this.props.fetchedTrip;
			return <TripShow trip={this.props.fetchedTrip} />;
			// return <div>Hello</div>;
		} else return null;
	}
}
const mapStateToProps = (state) => ({ fetchedTrip: state.trips.fetchedTrip });

// const mapDispatchToProps = (dispatch) => {
// 	return { fetchATrip: (tripInfo) => dispatch(fetchATrip(tripInfo)) };
// };

export default connect(mapStateToProps)(TripShowCont);
// export default TripShowCont;
