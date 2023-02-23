import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ReviewForm(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product</Form.Label>
        <Form.Control type="text" placeholder="Enter product" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Share your product review!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit review
      </Button>
      <Button variant="light" onClick={props.handleClose}>
        Close
      </Button>
    </Form>
  );
}
