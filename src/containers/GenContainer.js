import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default class GenContainer extends Component {
	render() {
		return (
			<div>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
					</Switch>
				</div>
			</div>
		);
	}
}
