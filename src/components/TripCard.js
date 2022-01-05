import React, { Component } from "react";
import DateFormatting from "./dateFormatting";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import ModalContainer from "./ModalContainer";
import { fetchTripModal } from "../actions/modalActions";

class TripCard extends Component {
	handleClick = (trip) => {
		this.props.fetchTripModal({ type: "show trip" }, trip);
	};

	render() {
		return (
			<div>
				{this.props.trips.map((trip, idx) => {
					return (
						<div className="trip-card container" key={idx}>
							<Card className="trip-card" variant="outlined">
								<CardContent style={{ backgroundColor: "#F2F2F2" }}>
									<div className="title">{trip.trip_name}</div>
									<div>{DateFormatting(trip.start_date, trip.end_date)}</div>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										style={{ color: "#0F43F9", fontWeight: 400 }}
										onClick={() => this.handleClick(trip)}
									>
										Open
									</Button>
								</CardActions>
							</Card>
							<ModalContainer />
						</div>
					);
				})}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTripModal: (modalInfo, tripInfo) =>
			dispatch(fetchTripModal(modalInfo, tripInfo))
	};
};

export default connect(null, mapDispatchToProps)(TripCard);
