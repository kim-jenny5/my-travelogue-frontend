import React from "react";
import TripCard from "./TripCard";

export default function UpcomingTrips(props) {
	return (
		<div>
			<div>Upcoming Trips</div>
			{props.trips.map((trip, idx) => (
				<TripCard key={idx} trip={trip} />
			))}
		</div>
	);
}
