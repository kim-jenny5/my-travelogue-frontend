import React from "react";
import DateFormatting from "./DateFormatting";

export default function NextTrip(props) {
	if (props.trip) {
		const { days_left_till, trip_name, start_date, end_date } = props.trip;
		return (
			<div>
				{/* <div className="next-trip-container-cont"> */}
				<span className="circle">
					<div className="text">{days_left_till}</div>
				</span>
				<span className="text container">
					<div className="text">{trip_name}</div>
					<div className="text">{DateFormatting(start_date, end_date)}</div>
				</span>
				{/* </div> */}
			</div>
		);
	} else {
		return null;
	}
}
