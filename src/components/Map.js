import React, { Component } from "react";
import { connect } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends Component {
	render() {
		return (
			<div>
				<MapContainer
					center={[51.505, -0.09]}
					zoom={13}
					scrollWheelZoom={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[51.505, -0.09]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>{" "}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
