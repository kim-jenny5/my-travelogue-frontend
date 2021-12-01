import React, { Component } from "react";
import { Route } from "react-router";
// import HomeContainer from "./containers/HomeContainer";
import Home from "./components/Home";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Route exact path="/" component={Home}></Route>
			</div>
		);
	}
}
