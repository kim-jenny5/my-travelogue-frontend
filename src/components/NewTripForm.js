import React, { Component } from "react";
// import DateRangePicker from "react-daterange-picker";

export default class NewTripForm extends Component {
	state = {
		name: "",
		start_date: "",
		end_date: ""
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
						placeholder="Example: Roadtrip with the girls 👯"
					/>
					{/* <DateRangePicker /> */}
					<input type="date" id="start_date" name="start_date" />
					<input type="date" id="end_date" name="end_date" />
					<button type="submit">Let's Go!</button>
				</form>
			</div>
		);
	}
}
