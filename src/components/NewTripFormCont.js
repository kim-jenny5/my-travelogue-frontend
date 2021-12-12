import React, { Component } from "react";
import { connect } from "react-redux";
import { createTrip } from "../actions/tripActions";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

class NewTripFormCont extends Component {
	state = {
		user_id: "",
		trip_name: "",
		start_date: new Date(),
		end_date: new Date()
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
			user_id: this.props.userId
		});
		this.props.hideModal();
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
								variant="outlined"
								placeholder="Roadtrip with the girls 👯"
								onChange={(e) => this.handleChange("trip_name", e)}
								className="trip-name"
							/>
						</div>
						<div className="trip-dates">
							<LocalizationProvider dateAdapter={AdapterDateFns}>
								<Stack direction="row" spacing={5}>
									<DatePicker
										label="Start Date"
										value={this.state.start_date}
										onChange={(e) => this.handleChange("start_date", e)}
										renderInput={(params) => <TextField {...params} />}
										className="new-trip-date-picker"
									/>
									<DatePicker
										label="End Date"
										value={this.state.end_date}
										onChange={(e) => this.handleChange("end_date", e)}
										renderInput={(params) => <TextField {...params} />}
										className="new-trip-date-picker"
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
	}
}

const mapStateToProps = (state) => ({
	userId: state.user.user.id
});

const mapDispatchToProps = (dispatch) => {
	return {
		createTrip: (tripInfo) => dispatch(createTrip(tripInfo)),
		hideModal: () => dispatch({ type: "HIDE_MODAL" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTripFormCont);
