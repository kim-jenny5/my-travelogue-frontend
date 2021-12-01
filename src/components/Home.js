import React, { Component } from "react";
import { MainNav } from "./MainNav";
import { RFooter } from "./RFooter";

export default class Home extends Component {
	render() {
		return (
			<div>
				<MainNav />
				<h1>
					What's on my bucket list? <br /> <i>Everywhere.</i>
				</h1>
				<RFooter />
			</div>
		);
	}
}
