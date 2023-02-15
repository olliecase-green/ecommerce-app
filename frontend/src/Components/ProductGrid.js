import React, { useState, useEffect } from "react";
import "../main.css";
import Network from "./Network";
import ProductCard from "./ProductCard";
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
      <h1 className="title">Products</h1>
      <Button variant="light">
        <Link to="../reviews">Click for reviews</Link>
      </Button>
      <Button variant="light">
        <Link to="/">Click for home page</Link>
      </Button>
      <div className="product-grid">{displayProducts()}</div>
    </div>
  );
}
