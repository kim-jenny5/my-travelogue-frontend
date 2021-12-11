import React from "react";
import NewTripFormCont from "./NewTripFormCont";

export default function Modals(props) {
	// console.log(props);
	if (props.type === "new trip") return <NewTripFormCont />;
	if (props.type === "show trip") return <div>SHOW TRIP!</div>;
	return <div>YOLO</div>;
}
