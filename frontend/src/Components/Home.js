import React from "react";
import ProductGrid from "./ProductGrid";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <Button>
        <Link to="/reviews">Click for reviews</Link>
      </Button> */}
      <ProductGrid />
    </>
  );
}
