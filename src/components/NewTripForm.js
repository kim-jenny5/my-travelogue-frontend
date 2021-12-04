import React, { Component } from "react";
import { connect } from "react-redux";
// import DateRangePicker from "react-daterange-picker";

class NewTripForm extends Component {
	state = {
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
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
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
					<button type="submit">Let's Go!</button>
				</form>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = (dispatch) => {
	// createTrip: state.
};

export default connect(null, mapDispatchToProps)(NewTripForm);
