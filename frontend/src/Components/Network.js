import { Component } from "react";

export default class Network extends Component {
  async getProducts() {
    try {
      const response = await fetch("/products");
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getOffers() {
    const response = await fetch("/offers");
    const json = await response.json();
    return json;
  }

  async getReviews() {
    const response = await fetch("/reviews");
    const json = await response.json();
    return json;
  }

  async postReview(productName, reviewText) {
    console.log(productName, reviewText);
    const response = await fetch(`/reviews/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: "Test user",
        product: productName,
        review: reviewText,
      }),
    });
    return response;
  }
}
