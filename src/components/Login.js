import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser } from "../actions/userActions";
import { MainFooter } from "./MainFooter";

class Login extends Component {
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
		this.props.logInUser(this.state);
	};

	render() {
		return (
			<div className="login-page">
				<SecondNav />
				<div className="login-signup">
					<div className="login-signup-container">
						<div className="title">Log In</div>
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
						<div className="alt">
							Don't have an account?{" "}
							<NavLink to="/signup" className="link">
								Sign Up
							</NavLink>
						</div>
					</div>
				</div>
				<MainFooter />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user.user,
	isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
	return { logInUser: (user_info) => dispatch(logInUser(user_info)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
