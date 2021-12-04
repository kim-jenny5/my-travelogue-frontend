import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// import { fetchUsers } from "../actions/fetchUsers";
// import { fetchUsers } from "../api/fetchUser";
// import { Redirect } from "react-router";
import { logInUser } from "../actions/userActions";

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
		console.log(this.props);
		this.props.logInUser(this.state);
		// if
		// logInUser(this.state);
	};

	render() {
		console.log(this.props);
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
	user: state.user,
	isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
	return { logInUser: (login_info) => dispatch(logInUser(login_info)) };
};

// export default connect(mapStateToProps)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(null, { logInUser })(Login);
// export default Login;
