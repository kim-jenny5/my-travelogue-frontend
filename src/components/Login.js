import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser } from "../actions/userActions";
import DashboardContainer from "./DashboardContainer";
import NewTripFormCont from "./NewTripFormCont";
import { MainFooter } from "./MainFooter";

// TODO: IMPORT ACTION FOR USER INTO HERE SO THAT HANDLESUBMIT CAN DISPATCH ACTIONS TO THE REDUCER

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
		// console.log(this.props);
		this.props.logInUser(this.state);
	};

	render() {
		// console.log(this.props);
		// if (this.props.isLoggedIn) {
		// 	// debugger;
		// 	return <Redirect to="/dashboard" />;
		// }
		// if (this.props.isLoggedIn)
		// 	return <Route to="/dashboard" component={DashboardContainer} />;

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

// export default connect(mapStateToProps)(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(null, { logInUser })(Login);
// export default Login;
