import React from "react";
import DateFormatting from "./DateFormatting";

export default function NextTrip(props) {
	// console.log(props.trip);
	// debugger;
	if (props.trip) {
		const { days_left_till, trip_name, start_date, end_date } = props.trip;
		return (
			// <div className="upcoming-trip container">
			<div className="">
				<div>{days_left_till}</div>
				<div>{trip_name}</div>
				<div>{DateFormatting(start_date, end_date)}</div>
			</div>
		);
	} else {
		return null;
	}
}
