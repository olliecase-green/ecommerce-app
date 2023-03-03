import React, { useState, useEffect } from "react";
import "../main.css";
import Navbar from "./Navbar";
import Network from "./Network";

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
        <div key={review}>
          {review} about {product} written by {user}
        </div>
      );
    });
  }

  return (
    <div>
      <Navbar />
      <div className="content">
        <h3 className="subtitle">Product Reviews</h3>
        <div className="reviews-content">{displayReviews()}</div>
      </div>
    </div>
  );
}
