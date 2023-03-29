import React, { useState, useEffect } from "react";
import "../main.css";
import Navbar from "./Navbar";
import Network from "./Network";
import Subtitle from "./Subtitle";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const network = new Network();

  useEffect(() => {
    returnReviews();
  }, []);

  async function returnReviews() {
    const returnedReviews = await network.getReviews();
    setReviews(returnedReviews);
  }

  function displayReviews() {
    return reviews.map((reviewItem) => {
      const { user, product, review } = reviewItem;
      return (
        <ListGroup key={review} as="ol">
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                {user} reviewing {product}
              </div>
              {review}
            </div>
            <Badge bg="secondary" pill>
              ⭐⭐⭐
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      );
    });
  }

  return (
    <div>
      <Navbar />
      <div className="content">
        <Subtitle subtitle={"Product Reviews"} />
        <div className="reviews-content">{displayReviews()}</div>
      </div>
    </div>
  );
}
