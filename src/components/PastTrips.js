import React from "react";
import DateFormatting from "./DateFormatting";

export default function PastTrips(props) {
	return (
		<div>
			<div>Past Trips</div>
			{props.trips.map((trip) => (
				<div>
					<div>{trip.trip_name}</div>
					<div>{DateFormatting(trip)}</div>
				</div>
			))}
		</div>
	);
}
