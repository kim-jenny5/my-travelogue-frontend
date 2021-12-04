import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { currentUser } from "../api/fetchUser";
import { connect } from "react-redux";
import Home from "../components/Home";

import LoginForm from "../components/Login";
import Signup from "../components/Signup";

export default class UserContainer extends Component {
	render() {
		console.log(this.props);

		return <div>Test profile.</div>;
	}
}
