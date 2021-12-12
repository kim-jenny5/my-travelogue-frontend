import React from "react";
import DateFormatting from "./DateFormatting";

export default function TripShow(props) {
	const { tripName, startDate, endDate } = props.trip;

	return (
		<div>
			<div className="show-page title">{tripName}</div>
			<div>{DateFormatting(startDate, endDate)}</div>
		</div>
	);
}
