import React, { Component } from "react";

import { connect } from "react-redux";
import { createTrip } from "../actions/tripActions";
import { nanoid } from "nanoid";
import { Redirect } from "react-router";
// import UserHeader from "./UserHeader";
// import DateRangePicker from "react-daterange-picker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import DateRangePicker from "@mui/lab/DateRangePicker";
// import DatePicker from "./DatePicker";
// import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

class NewTripFormCont extends Component {
	state = {
		// id: "",
		userId: "",
		tripName: "",
		// startDate: "",
		// endDate: "",
		// startDate: new Date(),
		// endDate: new Date(),
		dates: new Date()
	};

	handleChange = (keyName, e) => {
		// debugger;
		if (e instanceof Date) {
			this.setState({ [keyName]: e });
		} else {
			this.setState({ [keyName]: e.target.value });
		}
		// this.setState({ ...this.state, [e.target.name]: e.target.value });
		// this.setState({ tripName: e.target.value });
		// this.setState({ tripName: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		debugger;
		this.props.createTrip({
			...this.state,
			// id: nanoid(),
			userId: this.props.userId
		});
	};

	render() {
		// if (!this.props.isLoggedIn) {
		// 	return <Redirect to="/login" />;
		// } else {
		return (
			<div className="new-trip-form">
				<div className="title">When's your new trip?</div>
				<div className="form-container">
					<form onSubmit={this.handleSubmit}>
						<TextField
							id="outlined-basic"
							label="Name of your trip"
							// name="tripName"
							variant="outlined"
							placeholder="Roadtrip with the girls 👯"
							onChange={(e) => this.handleChange("tripName", e)}
							className="trip-name"
						>
							{/* <input
							type="text"
							name="tripName"
							placeholder="Example: Roadtrip with the girls 👯"
							onChange={this.handleChange}
						/> */}
						</TextField>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								label="Start Date"
								value={this.state.startDate}
								// name="startDate"
								onChange={(e) => this.handleChange("startDate", e)}
								renderInput={(params) => <TextField {...params} />}
								className="trip-date-inputs"
							/>
							<DatePicker
								label="End Date"
								value={this.state.endDate}
								// name="endDate"
								// onChange={this.handleChange}
								onChange={(e) => this.handleChange("endDate", e)}
								renderInput={(params) => <TextField {...params} />}
								className="trip-date-inputs"
							/>
						</LocalizationProvider>
						{/* <input
						type="date"
						id="startDate"
						name="startDate"
						onChange={this.handleChange}
					/>
					<input
						type="date"
						id="endDate"
						name="endDate"
						onChange={this.handleChange}
					/> */}
						{/* <button type="submit">Let's Go!</button> */}
						<div className="submit-btn">
							<Button variant="contained" type="submit">
								Let's Go!
							</Button>
						</div>
					</form>
				</div>
			</div>
		);
		// }
	}
}

const mapStateToProps = (state) => ({
	userId: state.user.user.id,
	isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
	return {
		createTrip: (trip_info) => dispatch(createTrip(trip_info))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTripFormCont);
