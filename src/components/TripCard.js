// import React from "react";
// import DateFormatting from "./DateFormatting";
// // import { Link, Route } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";

// export default function TripCard(props) {
// 	// console.log(props.showModal);
// 	return (
// 		<div>
// 			{props.trips.map((trip, idx) => {
// 				return (
// 					<div className="trip-card container" key={idx}>
// 						<Card className="trip-card" variant="outlined">
// 							<CardContent style={{ backgroundColor: "#F2F2F2" }}>
// 								<div className="title">{trip.trip_name}</div>
// 								<div>{DateFormatting(trip.start_date, trip.end_date)}</div>
// 							</CardContent>
// 							<CardActions>
// 								<Button
// 									size="small"
// 									style={{ color: "#0F43F9", fontWeight: 400 }}
// 									onClick={props.showModal}
// 								>
// 									{/* <Button size="small" style={{ color: "#62676B" }}> */}
// 									{/* View */}
// 									{/* <MoreHorizontalFill strokeWidth={2} size={24} /> */}
// 									{/* <LinkOut strokeWidth={2} size={15} /> */}
// 									Open
// 								</Button>
// 							</CardActions>
// 						</Card>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }

import React, { Component } from "react";
import DateFormatting from "./DateFormatting";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { showModal } from "../actions/modalActions";
import ModalContainer from "./ModalContainer";

class TripCard extends Component {
	handleClick = () => {
		this.props.showModal({ type: "show trip" });
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
										onClick={this.handleClick}
									>
										Open
									</Button>
								</CardActions>
							</Card>
							<ModalContainer />;
						</div>
					);
				})}
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = (dispatch) => {
	return { showModal: (modalInfo) => dispatch(showModal(modalInfo)) };
};

export default connect(null, mapDispatchToProps)(TripCard);
// export default TripCard;
