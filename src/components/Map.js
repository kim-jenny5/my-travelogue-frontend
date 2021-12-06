import React, { Component } from "react";
import { connect } from "react-redux";

class Map extends Component {
	render() {
		return (
			<div style={{ width: "815px", height: "815px" }}>
				<GoogleMapReact></GoogleMapReact>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
