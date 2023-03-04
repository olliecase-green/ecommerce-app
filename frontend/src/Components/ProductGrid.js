import React, { useState, useEffect } from "react";
import "../main.css";
import Network from "./Network";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import ErrorMessage from "./ErrorMessage";
import Subtitle from "./Subtitle";
import Card from "react-bootstrap/Card";

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
        <Subtitle subtitle={"Products"} />
        <Card>
          <Card.Body>
            <div className="product-grid">{displayProducts()}</div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
