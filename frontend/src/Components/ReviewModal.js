import React from "react";
import ReviewForm from "./ReviewForm";
import Modal from "react-bootstrap/Modal";

export default function ReviewModal(props) {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a review for {[props.product]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReviewForm product={props.product} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
}
