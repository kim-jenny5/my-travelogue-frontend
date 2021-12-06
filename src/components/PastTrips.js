import React from "react";
import TripCard from "./TripCard";

export default function PastTrips(props) {
	return (
		<div>
			<div>Past Trips</div>
			{props.trips.map((trip, idx) => (
				<TripCard key={idx} trip={trip} />
			))}
		</div>
	);
}
