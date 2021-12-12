import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions/userActions";
import { MainFooter } from "./MainFooter";

class Signup extends Component {
	state = {
		first_name: "",
		last_name: "",
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
		this.props.createUser(this.state);
		this.setState({ first_name: "", last_name: "", email: "", password: "" });
	};

	render() {
		return (
			<div className="signup-page">
				<SecondNav />
				<div className="login-signup">
					<div className="login-signup-container">
						<div className="title">Sign Up</div>
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								placeholder="First Name"
								name="first_name"
								onChange={this.handleChange}
								value={this.state.first_name}
							/>
							<input
								type="text"
								placeholder="Last Name"
								name="last_name"
								onChange={this.handleChange}
								value={this.state.last_name}
							/>
							<input
								type="text"
								placeholder="Email Address"
								name="email"
								onChange={this.handleChange}
								value={this.state.email}
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={this.handleChange}
								value={this.state.password}
							/>
							<button type="submit">Sign Up</button>
						</form>
						<div className="alt">
							Already have an account?{" "}
							<NavLink to="/login" className="link">
								Log in
							</NavLink>
						</div>
					</div>
				</div>
				<MainFooter />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return { createUser: (userInfo) => dispatch(createUser(userInfo)) };
};

export default connect(null, mapDispatchToProps)(Signup);
