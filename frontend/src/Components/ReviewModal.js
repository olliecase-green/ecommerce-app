import React from "react";
import ReviewForm from "./ReviewForm";
import Modal from "react-bootstrap/Modal";

export default function ReviewModal(props) {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Review Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReviewForm handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
}
