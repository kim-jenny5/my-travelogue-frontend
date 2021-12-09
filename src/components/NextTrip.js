import React from "react";
import DateFormatting from "./DateFormatting";

export default function NextTrip(props) {
	if (props.trip) {
		const { days_left_till, trip_name, start_date, end_date } = props.trip;
		return (
			<div>
				{/* <div className="next-trip-container"> */}
				<div className="circle">
					<div className="text">{days_left_till}</div>
				</div>
				<div className="text">{trip_name}</div>
				<div className="text">{DateFormatting(start_date, end_date)}</div>
			</div>
		);
	} else {
		return null;
	}
}
