import React from "react";
import DateFormatting from "./DateFormatting";

export default function UpcomingTrips(props) {
	return (
		<div>
			<div>Upcoming Trips</div>
			{props.trips.map((trip) => (
				<div>
					<div>{trip.trip_name}</div>
					<div>{DateFormatting(trip)}</div>
				</div>
			))}
		</div>
	);
}
