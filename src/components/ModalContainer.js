import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import NewTripForm from "./NewTripForm";

class ModalContainer extends Component {
	closeModal = () => {
		this.props.hideModal();
	};

	render() {
		if (!this.props.isOpen) return null;

		return (
			<div>
				<ReactModal isOpen={this.props.isOpen}>
					<button onClick={this.closeModal}>CLOSE</button>
					<div>Example Text</div>
				</ReactModal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isOpen: state.modal.isOpen
});

const mapDispatchToProps = (dispatch) => {
	return { hideModal: () => dispatch({ type: "HIDE_MODAL" }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
