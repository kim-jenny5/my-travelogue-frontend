import React from "react";
import DateFormatting from "./DateFormatting";
import { Link, Route } from "react-router-dom";
import TripDetails from "./TripDetails";

export default function TripCard(props) {
	return (
		<div>
			{props.trips.map((trip) => {
				return (
					<div>
						<div>{trip.trip_name}</div>
						<div>{DateFormatting(trip.start_date, trip.end_date)}</div>
					</div>
				);
			})}

			{/* <Link to={`/${trip.id}`}>{trip.trip_name}</Link> */}
			{/* <div>{DateFormatting(trip)}</div> */}
			{/* <Route
				path={`/${trip.id}`}
				render={(routerProps) => <TripDetails {...routerProps} trip={trip} />}
			/> */}
		</div>
	);
}
