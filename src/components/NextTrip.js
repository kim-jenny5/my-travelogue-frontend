import React from "react";
import DateFormatting from "./DateFormatting";

export default function NextTrip(props) {
	if (props.trip) {
		const { days_left_till, trip_name, start_date, end_date } = props.trip;
		return (
			<>
				<div className="next-trip-container">
					<span className="circle">
						<div className="text">{days_left_till}</div>
					</span>
					<div className="upcoming-text">
						<div>{trip_name}</div>
						<div>{DateFormatting(start_date, end_date)}</div>
					</div>
				</div>
			</>
		);
	} else {
		return null;
	}
}
