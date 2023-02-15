import React, { useState, useEffect } from "react";
import "../css/ProductGrid.css";
import Network from "./Network";
import ProductCard from "./ProductCard";

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
    <>
      <h1>Products</h1>
      <div className="product-grid">{displayProducts()}</div>
    </>
  );
}
