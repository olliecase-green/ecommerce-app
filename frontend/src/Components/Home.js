import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
      <h1 className="title">Home</h1>
      <Button variant="light">
        <Link to="reviews">Click to see reviews</Link>
      </Button>
      <Button variant="light">
        <Link to="products">Click to see products</Link>
      </Button>
    </div>
  );
}
