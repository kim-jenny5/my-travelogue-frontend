import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import NewTripForm from "./NewTripForm";
import Modals from "./Modals";
import Button from "@mui/material/Button";
import { Cross } from "akar-icons";

class ModalContainer extends Component {
	closeModal = () => {
		this.props.hideModal();
	};

	render() {
		if (!this.props.isOpen) return null;

		return (
			<div>
				<ReactModal isOpen={this.props.isOpen}>
					<Button
						onClick={this.closeModal}
						variant="contained"
						className="hide-modal btn"
					>
						Close
					</Button>
					<Modals type={this.props.type} />
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
	return { hideModal: () => dispatch({ type: "HIDE_MODAL" }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
