import React, { Component } from "react";
import { MainNav } from "./MainNav";
import { MainFooter } from "./MainFooter";

export default class Home extends Component {
	render() {
		return (
			<div>
				<MainNav />
				<div className="subtitle">
					<div>What's on my bucket list?</div>
					<div className="emphasis">Everywhere.</div>
				</div>
				<MainFooter />
			</div>
		);
	}
}
