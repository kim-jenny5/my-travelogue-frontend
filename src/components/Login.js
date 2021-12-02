import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";

export default class Login extends Component {
	render() {
		// console.log(this.props);
		return (
			<div>
				<SecondNav />
				<h1>Log In</h1>
				<form>
					<input type="text" placeholder="Email Address" />
					<input type="password" placeholder="Password" />
					<button type="submit">Log In</button>
				</form>
				<p>
					Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
				</p>
			</div>
		);
	}
}
