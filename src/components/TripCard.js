import React from "react";
import DateFormatting from "./DateFormatting";
import { Link, Route } from "react-router-dom";
import TripDetails from "./TripDetails";

export default function TripCard(props) {
	const { trip } = props;
	return (
		<div>
			<Link to={`/${trip.id}`}>{trip.trip_name}</Link>
			<div>{DateFormatting(trip)}</div>
			{/* <Route
				path={`/${trip.id}`}
				render={(routerProps) => <TripDetails {...routerProps} trip={trip} />}
			/> */}
		</div>
	);
}
