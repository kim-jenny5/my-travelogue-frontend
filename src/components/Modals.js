import React from "react";
import NewTripFormCont from "./NewTripFormCont";

export default function Modals(props) {
	if (props.type === "new trip") {
		return <NewTripFormCont />;
		// } else if (props.type === "show trip") {
		// 	return <div>SHOW TRIP!</div>;
	} else {
		return ErrorModal();
	}
}

const ErrorModal = () => {
	return <div>Error</div>;
};
