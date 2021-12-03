import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default class UserContainer extends Component {
	state = {
		users: []
	};

	render() {
		// console.log(this.props.url);
		console.log(this.props);
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

	// componentDidMount() {
	// 	fetch("http://localhost:3000/users")
	// 		.then((resp) => resp.json())
	// 		.then((data) => this.setState({ users: data }, console.log(this.state)));
	// }
}
