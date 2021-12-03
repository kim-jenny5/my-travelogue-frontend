import React, { Component } from "react";
import { SecondNav } from "../components/SecondNav";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { fetchUsers } from "../actions/fetchUsers";
import { fetchUsers } from "../api/fetchUser";

// TODO: IMPORT ACTION FOR USER INTO HERE SO THAT HANDLESUBMIT CAN DISPATCH ACTIONS TO THE REDUCER

class Login extends Component {
	// this state is for login form
	state = {
		email: "",
		password: ""
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		// console.log(this.props);
		// console.log(this.props.fetchUsers(this.state));
		this.props.fetchUsers(this.state);
		// this.setState(this.state);
		// this.setState({}, () => {
		// 	console.log(this.state);
		// 	debugger;
		// });
		// console.log(this.state);
		// debugger;
		// this.setState({});
		// console.log(this.props);
	};

	render() {
		console.log(this.props.user);
		return (
			<div>
				<SecondNav />
				<h1>Log In</h1>
				<form onSubmit={this.handleSubmit}>
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
					<button type="submit">Log In</button>
				</form>
				<p>
					Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

const mapDispatchToProps = (dispatch) => {
	return { fetchUsers: (login_info) => dispatch(fetchUsers(login_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
