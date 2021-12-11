import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchATrip } from "../actions/tripActions";

class TripShowDetails extends Component {
	// componentDidMount() {
	// 	this.props.fetchATrip();
	// }

	render() {
		console.log(this.props);
		debugger;
		return <div>Hello</div>;
	}
}
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => {
// 	return { fetchATrip: (tripInfo) => dispatch(fetchATrip(tripInfo)) };
// };

// export default connect(mapDispatchToProps)(TripShowDetails);
export default TripShowDetails;
