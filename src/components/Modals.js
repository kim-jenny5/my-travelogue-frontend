import React from "react";
import NewTripFormCont from "./NewTripFormCont";
import TripShowCont from "./TripShowCont";
import { Bug } from "akar-icons";

export default function Modals(props) {
	// console.log(props);
	// debugger;
	if (props.type === "new trip") {
		return <NewTripFormCont />;
	} else if (props.type === "show trip") {
		return <TripShowCont trip={props.trip} />;
		// return <TripShowCont trip=/>;
	} else {
		return ErrorModal();
	}
}

const ErrorModal = () => {
	return (
		<div className="error-container">
			Oops... This is embarassing.{" "}
			<span style={{ fontSize: "1.5em", verticalAlign: "middle" }}>😳</span>
			<div
				style={{ fontSize: "1.25rem", fontWeight: "400", marginBottom: "2em" }}
			>
				We're always bug hunting, but we'll be sure to catch this one too!
			</div>
			<div>
				<Bug strokeWidth={2} size={60} />
			</div>
		</div>
	);
};

// import React, { Component } from "react";
// import NewTripFormCont from "./NewTripFormCont";
// import TripShowCont from "./TripShowCont";
// import { Bug } from "akar-icons";

// class Modals extends Component {
// 	errorModal = () => (
// 		<div className="error-container">
// 			Oops... This is embarassing.{" "}
// 			<span style={{ fontSize: "1.5em", verticalAlign: "middle" }}>😳</span>
// 			<div
// 				style={{
// 					fontSize: "1.25rem",
// 					fontWeight: "400",
// 					marginBottom: "2em"
// 				}}
// 			>
// 				We're always bug hunting, but we'll be sure to catch this one too!
// 			</div>
// 			<div>
// 				<Bug strokeWidth={2} size={60} />
// 			</div>
// 		</div>
// 	);

// 	render() {
// 		// debugger;
// 		// return <div></div>;
// 		if (this.props.type === "new trip") {
// 			return <NewTripFormCont />;
// 		} else if (this.props.type === "show trip") {
// 			// debugger;
// 			// return <TripShowCont fetchedTrip={this.props.fetchedTrip} />;
// 			return <TripShowCont />;
// 			// return <div>Not yet babe</div>;
// 		} else {
// 			return this.errorModal();
// 		}
// 	}
// }

// // const mapStateToProps = (state) => ({
// // 	fetchedTrip: state.trips.fetchedTrip
// // });

// // const mapDispatchToProps = {};

// // export default connect(mapStateToProps)(Modals);
// export default Modals;
