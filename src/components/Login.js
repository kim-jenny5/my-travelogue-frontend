import React, { Component } from "react";
import { SecondNav } from "./SecondNav";

export default class Login extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<SecondNav />
				<h1>Log In</h1>
			</div>
		);
	}
}
