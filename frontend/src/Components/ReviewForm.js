import React, { useState, useEffect } from "react";
import Network from "./Network";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ReviewForm(props) {
  const [reviewText, setReviewText] = useState("");
  const [numStars, setNumStars] = useState(5);
  const network = new Network();

  const handleStarsChange = (event) => {
    setNumStars(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (!reviewText) {
      window.alert("Enter review text to submit!");
    } else {
      const response = await network.postReview(
        props.product,
        reviewText,
        numStars
      );
      let json = await response.json();
      if (response.status !== 200) throw new Error(json.error);
      else setReviewText("");
    }
  };

  function displayStars() {
    const stars = [5, 4, 3, 2, 1];
    return stars.map((star) => <option key={star}>{star}</option>);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="productsList">
        <Form.Label>Number of stars</Form.Label>
        {/* Sort out dropdown for number of stars */}
        <Form.Select onChange={handleStarsChange}>{displayStars()}</Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="reviewText">
        <Form.Label>Share your product review!</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={reviewText}
          onChange={handleReviewTextChange}
        />
      </Form.Group>
      <Button type="submit" variant="dark">
        Submit review
      </Button>
      <Button variant="light" onClick={props.handleClose}>
        Close
      </Button>
    </Form>
  );
}
