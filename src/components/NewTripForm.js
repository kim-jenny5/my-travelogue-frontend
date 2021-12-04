import React, { Component } from "react";
import { connect } from "react-redux";
import { createTrip } from "../actions/tripActions";
// import DateRangePicker from "react-daterange-picker";

class NewTripForm extends Component {
	state = {
		user_id: this.props.user_id,
		trip_name: "",
		start_date: "",
		end_date: ""
	};

	handleChange = (e) => {
		// this.setState(
		// 	{
		// 		[e.target.name]: e.target.value
		// 	},
		// 	() => {
		// 		console.log(this.state);
		// 	}
		// );
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};

	connectUser = (e) => {};

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.props);
		// this.props.createTrip(this.state, this.props.user_id);
		this.props.createTrip(this.state);
	};

	render() {
		return (
			<div>
				<div>When's your new trip?</div>
				<form onSubmit={this.handleSubmit}>
					<div>Name of your trip</div>
					{/* <input type="hidden" name="user_id" value={this.props.user_id} /> */}
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
	}
}

const mapStateToProps = (state) => ({
	user_id: state.user.user.id
});

const mapDispatchToProps = (dispatch) => {
	return {
		// createTrip: (trip_info, user_id) => dispatch(createTrip(trip_info, user_id))
		createTrip: (trip_info) => dispatch(createTrip(trip_info))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTripForm);
