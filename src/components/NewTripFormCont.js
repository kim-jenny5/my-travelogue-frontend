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
import Stack from "@mui/material/Stack";
// import DateRangePicker from "@mui/lab/DateRangePicker";
// import DatePicker from "./DatePicker";
// import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

class NewTripFormCont extends Component {
	state = {
		userId: "",
		tripName: "",
		// startDate: "",
		// endDate: "",
		startDate: new Date(),
		endDate: new Date()
	};

	handleChange = (keyName, e) => {
		if (e instanceof Date) {
			this.setState({ [keyName]: e });
		} else {
			this.setState({ [keyName]: e.target.value });
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTrip({
			...this.state,
			userId: this.props.userId
		});
	};

	render() {
		return (
			<div className="new-trip-form">
				<div className="title">When's your new trip?</div>
				<div className="form-container">
					<form onSubmit={this.handleSubmit}>
						<div className="trip-name-container">
							<TextField
								id="outlined-basic"
								label="Name of your trip"
								// name="tripName"
								variant="outlined"
								placeholder="Roadtrip with the girls 👯"
								onChange={(e) => this.handleChange("tripName", e)}
								className="trip-name"
							/>
						</div>
						<div className="trip-dates">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<Stack direction="row" spacing={5}>
									<DatePicker
										label="Start Date"
										value={this.state.startDate}
										// name="startDate"
										onChange={(e) => this.handleChange("startDate", e)}
										renderInput={(params) => <TextField {...params} />}
									/>
									<DatePicker
										label="End Date"
										value={this.state.endDate}
										// name="endDate"
										// onChange={this.handleChange}
										onChange={(e) => this.handleChange("endDate", e)}
										renderInput={(params) => <TextField {...params} />}
									/>
								</Stack>
							</LocalizationProvider>
						</div>
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
		createTrip: (tripInfo) => dispatch(createTrip(tripInfo))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTripFormCont);
