import React, { Component } from "react";

export default class CodeChallenge extends Component {
	state = {
		word: "",
		count: 0
	};

	handleChange = (e) => {
		this.setState({ word: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { word } = this.state;
		// console.log(word);
		this.setState({ count: this.state.count + word.length });
	};

	render() {
		return (
			<div>
				React Code Challenge
				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} />
					<input type="submit" value="Click me" />
				</form>
				{this.state.count}
			</div>
		);
	}
}
