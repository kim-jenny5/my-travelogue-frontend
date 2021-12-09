import React from "react";
import NewTripForm from "./NewTripForm";

export default function Modals(props) {
	// console.log(props);
	if (props.type === "new trip") return <NewTripForm />;
	return <div>YOLO</div>;
}
