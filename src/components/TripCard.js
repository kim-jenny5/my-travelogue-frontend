import React from "react";
import DateFormatting from "./DateFormatting";
import { Route } from "react-router-dom";
import TripDetails from "./TripDetails";

export default function TripCard(props) {
	const { trip } = props;

	return (
		<div>
			<div>{trip.trip_name}</div>
			<div>{DateFormatting(trip)}</div>
			<Route
				path={`${trip.id}`}
				render={(routerProps) => <TripDetails {...routerProps} trip={trip} />}
			/>
		</div>
	);
}
