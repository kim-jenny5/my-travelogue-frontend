// import React from "react";

// export default function UpcomingTrips(props) {
// 	console.log(props);
// 	return (
// 		<div>
// 			<div>Upcoming Trips</div>
// 			{props.trips.map((trip) => (
// 				<div>
// 					<div>{trip.trip_name}</div>
// 					<div>
// 						{trip.start_date} - {trip.end_date}
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
import React, { Component } from "react";
import { isSameMonth, isSameYear, format } from "date-fns";

export default class UpcomingTrips extends Component {
	dateFormatting = (trip) => {
		// console.log(trip.start_date);
		// console.log(trip.end_date);
		const start_date = new Date(trip.start_date);
		const end_date = new Date(trip.end_date);
		if (isSameMonth(start_date, end_date) && isSameYear(start_date, end_date)) {
			return `${format(start_date, "MMMM d")} - ${format(end_date, "d, yyyy")}`;
		} else if (isSameYear(start_date, end_date)) {
			return `${format(start_date, "MMMM d")} - ${format(
				end_date,
				"MMMM d, yyyy"
			)}`;
		} else {
			return `${format(start_date, "MMMM d, yyyy")} - ${format(
				end_date,
				"MMMM d, yyyy"
			)}`;
		}
		// console.log(start_date);
		// console.log(end_date);
	};

	render() {
		return (
			<div>
				<div>Upcoming Trips</div>
				{this.props.trips.map((trip) => (
					<div>
						<div>{trip.trip_name}</div>
						<div>
							{this.dateFormatting(trip)}
							{/* {trip.start_date} - {trip.end_date} */}
						</div>
					</div>
				))}
			</div>
		);
	}
}
