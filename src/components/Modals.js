import React from "react";
import NewTripFormCont from "./NewTripFormCont";
import TripShowDetails from "./TripShowDetails";
import { Bug } from "akar-icons";

export default function Modals(props) {
	// console.log(props);
	// debugger;
	if (props.type === "new trip") {
		return <NewTripFormCont />;
	} else if (props.type === "show trip") {
		// return <TripShowDetails trip={props.trip} />;
		return <TripShowDetails />;
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
