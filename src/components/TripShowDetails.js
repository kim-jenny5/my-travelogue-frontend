import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchATrip } from "../actions/tripActions";

class TripShowDetails extends Component {
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
			debugger;
			return <div>Hello</div>;
		} else return null;
	}
}
const mapStateToProps = (state) => ({ fetchedTrip: state.trips.fetchedTrip });

// const mapDispatchToProps = (dispatch) => {
// 	return { fetchATrip: (tripInfo) => dispatch(fetchATrip(tripInfo)) };
// };

export default connect(mapStateToProps)(TripShowDetails);
// export default TripShowDetails;
