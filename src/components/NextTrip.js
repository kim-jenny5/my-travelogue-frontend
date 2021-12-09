import React from "react";
import DateFormatting from "./DateFormatting";

export default function NextTrip(props) {
	// console.log(props.trip);
	// debugger;
	const { days_left_till, trip_name, start_date, end_date } = props.trip;
	// console.log(days_left_till, trip_name);
	return (
		<div>
			<div>Upcoming Trip 🚗</div>
			<div>{days_left_till}</div>
			<div>{trip_name}</div>
			<div>{DateFormatting(start_date, end_date)}</div>
			{/* HELLO WOOHOO! */}
		</div>
	);
}
