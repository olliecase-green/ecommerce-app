import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductGrid() {
  const [products, setProducts] = useState("products should be here");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get("/products/products/");
      const data = response.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>This is the products page</h1>
    </div>
  );
}
