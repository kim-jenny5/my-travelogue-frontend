import React from "react";

export default function TripCard(props) {
	const { trip_name, start_date, end_date } = props.trip;
	// console.log(props);
	return (
		<div>
			<div>{trip_name}</div>
			<div>
				{start_date} - {end_date}
			</div>
		</div>
	);
}
