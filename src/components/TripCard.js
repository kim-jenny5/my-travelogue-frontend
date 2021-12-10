import React from "react";
import DateFormatting from "./DateFormatting";
// import { Link, Route } from "react-router-dom";
// import TripDetails from "./TripDetails";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// import { MoreHorizontalFill } from "akar-icons";
import { LinkOut } from "akar-icons";

export default function TripCard(props) {
	return (
		<div>
			{props.trips.map((trip) => {
				return (
					<div className="trip-card container">
						<Card className="trip-card" variant="outlined">
							<CardContent style={{ backgroundColor: "#F2F2F2" }}>
								<div className="title">{trip.trip_name}</div>
								<div>{DateFormatting(trip.start_date, trip.end_date)}</div>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									style={{ color: "#0F43F9", fontWeight: 300 }}
								>
									{/* <Button size="small" style={{ color: "#62676B" }}> */}
									{/* View */}
									{/* <MoreHorizontalFill strokeWidth={2} size={24} /> */}
									{/* <LinkOut strokeWidth={2} size={15} /> */}
									Open
								</Button>
							</CardActions>
						</Card>
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
