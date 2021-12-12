import React from "react";
import DateFormatting from "./DateFormatting";
// import TextField from "@mui/material/TextField";

export default function TripShow(props) {
	// const { tripName, startDate, endDate } = props.trip;
	const { trip_name, start_date, end_date, places, days_left_till } =
		props.trip;

	return (
		<div>
			<div className="show-page title">{trip_name}</div>
			<div>{DateFormatting(start_date, end_date)}</div>
			{/* <form onSubmit={}>
				<TextField id="standard-basic" label="Standard" variant="standard" />
			</form> */}
		</div>
	);
}
