import React from "react";
import dateFormatting from "./dateFormatting";

export default function UpcomingTrips(props) {
	return (
		<div>
			<div>Upcoming Trips</div>
			{props.trips.map((trip) => (
				<div>
					<div>{trip.trip_name}</div>
					<div>{dateFormatting(trip)}</div>
				</div>
			))}
		</div>
	);
}
