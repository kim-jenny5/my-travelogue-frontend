import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { currentUser } from "../api/fetchUser";
import { connect } from "react-redux";
import Home from "../components/Home";

import LoginForm from "./LoginForm";
import Signup from "../components/Signup";

// export default class UserContainer extends Component {
class UserContainer extends Component {
	state = {
		user: {}
	};

	componentDidMount() {
		// debugger;
		// console.log(localStorage);
		let token = localStorage.token;
		if (token) {
			// currentUser();
			// debugger;
			currentUser().then((user) => {
				console.log(user);
				debugger;
				this.setState({ user: { user } });
			});
			// debugger;
		}
		// 	console.log(localStorage);
		// 	console.log(localStorage.getItem("token"));
		// 	// const token =
	}

	render() {
		// console.log(this.props.url);
		console.log(this.props);
		return (
			<div>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route
							path="/login"
							// component={LoginForm}
							render={(props) => {
								// debugger;
								return <LoginForm user={this.props.user} />;
							}}
						/>
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

const mapStateToProps = (state) => ({
	user: state.user
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(UserContainer);
