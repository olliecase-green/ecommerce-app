import { Component } from "react";

export default class Network extends Component {
  async getProducts() {
    const response = await fetch("http://127.0.0.1:8000/products/products/");
    const json = await response.json();
    return json;
  }

  async getOffers() {
    const response = await fetch("http://127.0.0.1:8000/products/offers/");
    const json = await response.json();
    return json;
  }
}
