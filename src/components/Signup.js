import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signUpUser } from "../actions/userActions";

class Signup extends Component {
	state = {
		first_name: "",
		last_name: "",
		email: "",
		password: ""
	};

	handleChange = (e) => {
		// this.setState(
		// 	{
		// 		[e.target.name]: e.target.value
		// 	},
		// 	() => console.log(this.state)
		// );
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<SecondNav />
				<h1>Sign Up</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="First Name"
						name="first_name"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						placeholder="Last Name"
						name="last_name"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						placeholder="Email Address"
						name="email"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={this.handleChange}
					/>
					<button type="submit">Sign Up</button>
				</form>
				<p>
					Already have an account? <NavLink to="/login">Log in</NavLink>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
	return { signUpUser: (user_info) => dispatch(signUpUser(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
