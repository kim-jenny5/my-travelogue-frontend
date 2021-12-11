import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import NewTripFormCont from "./NewTripFormCont";
import Modals from "./Modals";
import Button from "@mui/material/Button";
// import { Cross } from "akar-icons";

class ModalContainer extends Component {
	closeModal = () => {
		this.props.hideModal();
		this.props.clearFetchedTrip();
	};

	render() {
		if (!this.props.isOpen) return null;

		return (
			<div className="modal-container">
				{/* <ReactModal isOpen={this.props.isOpen} style={styles.modalContainer}> */}
				<ReactModal isOpen={this.props.isOpen}>
					<Button
						onClick={this.closeModal}
						variant="contained"
						// variant="outlined"
						className="hide-modal btn"
					>
						Close
					</Button>
					<Modals
						type={this.props.type}
						// trip={this.props.trip ? this.props.trip : !this.props.trip}
					/>
				</ReactModal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isOpen: state.modal.isOpen,
	type: state.modal.type
});

const mapDispatchToProps = (dispatch) => {
	return {
		hideModal: () => dispatch({ type: "HIDE_MODAL" }),
		clearFetchedTrip: () => {
			dispatch({ type: "CLEAR_FETCHED_TRIP" });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
