import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { MainNav } from "./MainNav";
// import MainNav from "./MainNav";
import { RFooter } from "./RFooter";
import Login from "./Login";
import Signup from "./Signup";

export default class Home extends Component {
	render() {
		return (
			<div>
				<MainNav />
				<div>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
					</Switch>
				</div>

				<h1>
					What's on my bucket list? <br /> <i>Everywhere.</i>
				</h1>

				<RFooter />
			</div>
		);
	}
}
