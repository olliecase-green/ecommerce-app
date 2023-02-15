import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ListGroup>
        <ListGroup.Item>
          <Link to="reviews">Click to see reviews</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="products">Click to see products</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
