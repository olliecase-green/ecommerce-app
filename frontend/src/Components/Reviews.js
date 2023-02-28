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
        <div key={user}>
          {review} about {product} written by {user}
        </div>
      );
    });
  }

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>TEST REVIEWS PAGE</h1>
        <div>{displayReviews()}</div>
      </div>
    </div>
  );
}
