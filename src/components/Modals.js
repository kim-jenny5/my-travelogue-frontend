import React from "react";
import NewTripFormCont from "./NewTripFormCont";

export default function Modals(props) {
	// console.log(props);
	if (props.type === "new trip") return <NewTripFormCont />;
	return <div>YOLO</div>;
}
