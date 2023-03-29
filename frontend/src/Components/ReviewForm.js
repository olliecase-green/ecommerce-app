import React, { useState, useEffect } from "react";
import Network from "./Network";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ReviewForm(props) {
  const [products, setProducts] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [productName, setProductName] = useState(props.product);
  const network = new Network();

  useEffect(() => {
    returnProducts();
  }, []);

  async function returnProducts() {
    const returnedProducts = await network.getProducts();
    setProducts(returnedProducts);
  }

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleStarsChange = (event) => {
    setProductName(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (reviewText) {
      event.preventDefault();
      const response = await network.postReview(productName, reviewText);
      let json = await response.json();
      if (response.status === 200) {
        setReviewText("");
      } else {
        throw new Error(json.error);
      }
    } else {
      window.alert("Enter review text to submit!");
    }
  };

  function displayProductOptions() {
    return products.map((product) => {
      const { name } = product;
      return <option key={name}>{name}</option>;
    });
  }

  function displayStars() {
    const stars = [1, 2, 3, 4, 5];
    return stars.map((star) => <option key={star}>{star}</option>);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="productsList">
        <Form.Label>Product</Form.Label>
        <Form.Select value={productName} onChange={handleProductNameChange}>
          {displayProductOptions()}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="productsList">
        <Form.Label>Number of stars</Form.Label>
        <Form.Select value={productName} onChange={handleStarsChange}>
          {displayStars()}
        </Form.Select>
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
