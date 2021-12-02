import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";

export default class Signup extends Component {
	render() {
		return (
			<div>
				<SecondNav />
				<h1>Sign Up</h1>
				<form>
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
					<input type="text" placeholder="Email Address" />
					<input type="password" placeholder="Password" />
					<button type="submit">Sign Up</button>
				</form>
				<p>
					Already have an account? <NavLink to="/login">Log in</NavLink>
				</p>
			</div>
		);
	}
}
