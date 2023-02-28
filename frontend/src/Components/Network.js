import { Component } from "react";

export default class Network extends Component {
  async getProducts() {
    const response = await fetch("/products");
    const json = await response.json();
    return json;
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
}
