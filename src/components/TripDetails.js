// import React, { Component } from "react";
// import { connect } from "react-redux";

// class TripDetails extends Component {
// 	render() {
// 		console.log(this.props.trip);
// 		return (
// 			<div>
// 				<p>Hello</p>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => {};

// export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
// // export default TripDetails;

import React from "react";

const TripDetails = (props) => {
	console.log(props.trip);
	return <div>Hello</div>;
};

export default TripDetails;
