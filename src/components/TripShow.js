import React from "react";
import DateFormatting from "./DateFormatting";
// import TextField from "@mui/material/TextField";

export default function TripShow(props) {
	const { tripName, startDate, endDate } = props.trip;

	return (
		<div>
			<div className="show-page title">{tripName}</div>
			<div>{DateFormatting(startDate, endDate)}</div>
			{/* <form onSubmit={}>
				<TextField id="standard-basic" label="Standard" variant="standard" />
			</form> */}
		</div>
	);
}
