import React from "react";
import ProductGrid from "./ProductGrid";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Button onClick={console.log("clicked")}>
        {/* <Link to="/reviews"></Link> */}
        Click for reviews
      </Button>
      <ProductGrid />
    </>
  );
}
