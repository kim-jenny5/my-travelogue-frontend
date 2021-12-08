import React, { Component } from "react";
import { connect } from "react-redux";
import { createTrip } from "../actions/tripActions";
import { nanoid } from "nanoid";
import { Redirect } from "react-router";
import UserHeader from "./UserHeader";
// import DateRangePicker from "react-daterange-picker";

class NewTripForm extends Component {
	state = {
		id: "",
		user_id: "",
		trip_name: "",
		start_date: "",
		end_date: ""
	};

	handleChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTrip({
			...this.state,
			id: nanoid(),
			user_id: this.props.user_id
		});
		// NOTE: NOT WORKING
		// history push
		// return <Redirect to="/dashboard" />;
	};

	render() {
		// if (!this.props.isLoggedIn) {
		// 	return <Redirect to="/login" />;
		// } else {
		return (
			<div>
				<UserHeader />
				<div>When's your new trip?</div>
				<form onSubmit={this.handleSubmit}>
					<div>Name of your trip</div>
					<input
						type="text"
						name="trip_name"
						placeholder="Example: Roadtrip with the girls 👯"
						onChange={this.handleChange}
					/>
					{/* <DateRangePicker /> */}
					<input
						type="date"
						id="start_date"
						name="start_date"
						onChange={this.handleChange}
					/>
					<input
						type="date"
						id="end_date"
						name="end_date"
						onChange={this.handleChange}
					/>
					<button type="submit" onClick={this.connectUser}>
						Let's Go!
					</button>
				</form>
			</div>
		);
		// }
	}
}

const mapStateToProps = (state) => ({
	user_id: state.user.user.id,
	isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
	return {
		createTrip: (trip_info) => dispatch(createTrip(trip_info))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTripForm);
