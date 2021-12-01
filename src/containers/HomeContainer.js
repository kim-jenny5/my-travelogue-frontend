import React, { Component } from "react";
import { MainNav } from "../components/MainNav";

export default class HomeContainer extends Component {
	render() {
		return (
			<div>
				<MainNav />
				<h1>
					What's on my bucket list? <br /> <i>Everywhere.</i>
				</h1>
			</div>
		);
	}
}
