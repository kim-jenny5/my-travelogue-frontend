import React from "react";
import DateFormatting from "./DateFormatting";

export default function TripCard(props) {
	const { trip } = props;

	return (
		<div>
			<div>{trip.trip_name}</div>
			<div>{DateFormatting(trip)}</div>
		</div>
	);
}
