import React, { Component } from "react";
import { Route } from "react-router";
// import Home from "./components/Home";
import HomeContainer from "./containers/HomeContainer";
// import UserContainer from "./containers/UserContainer";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Route exact path="/" component={HomeContainer}></Route>
			</div>
		);
	}
}
