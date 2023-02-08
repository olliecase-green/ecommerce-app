import React, { useState, useEffect } from "react";
import Network from "./Network";
import Button from "react-bootstrap/Button";
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

  function displayProducts() {
    return (
      <div
        style={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {products.map((product) => {
          return ProductCard(product);
        })}
      </div>
    );
  }

  function ProductCard(product) {
    return (
      <Card style={{ margin: "5px" }}>
        <Card.Img variant="top" src={product.image_url} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Product info here</Card.Text>
          <Button variant="primary">Product link here</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      <h1>Products</h1>
      {displayProducts()}
    </>
  );
}
