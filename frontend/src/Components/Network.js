import { Component } from "react";

export default class Network extends Component {
  async makeFetch(path) {
    try {
      const response = await fetch(`/${path}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  getProducts() {
    return this.makeFetch("products");
  }

  getReviews() {
    return this.makeFetch("reviews");
  }

  async postReview(productName, reviewText, stars) {
    console.log(productName, reviewText, stars);
    const response = await fetch(`/reviews/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: productName,
        review: reviewText,
        stars: stars,
      }),
    });
    return response;
  }
}
