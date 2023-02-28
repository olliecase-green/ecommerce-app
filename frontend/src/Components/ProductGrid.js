import React, { useState, useEffect } from "react";
import "../main.css";
import Network from "./Network";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const network = new Network();

  useEffect(() => {
    returnProducts();
  }, []);

  async function returnProducts() {
    const returnedProducts = await network.getProducts();
    setProducts(returnedProducts);
  }

  async function returnOffers() {
    const offers = await network.getOffers();
    window.alert(`Available offers: ${offers[0].description}`);
  }

  function displayProducts() {
    return products.map((product) => {
      const { name, image_url, price, stock } = product;
      return (
        <ProductCard
          key={name}
          name={name}
          image={image_url}
          price={price}
          stock={stock}
        />
      );
    });
  }

  return (
    <div>
      <Navbar />
      <div className="content">
        <h3 className="subtitle">Products</h3>
        <Button variant="light">
          <Link to="../reviews">Reviews</Link>
        </Button>
        <Button variant="light">
          <Link to="/">Back to home page</Link>
        </Button>
        <Button onClick={returnOffers} variant="light">
          Click for available offers
        </Button>
        <div className="product-grid">{displayProducts()}</div>
      </div>
    </div>
  );
}
