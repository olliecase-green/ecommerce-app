import React from "react";
import "../main.css";
import Button from "react-bootstrap/Button";

export default function ProductCard(props) {
  function createProductCard() {
    const { name, image, price, stock } = props;
    return (
      <div className="product-card">
        <img src={image} alt="product" className="product-image" />
        <div>
          <h4>{name}</h4>
          <div>£{price}</div>
          <div className="product-quantity">Quantity in stock: {stock}</div>
          <Button variant="light">Add to bag</Button>
        </div>
      </div>
    );
  }

  return <>{createProductCard()}</>;
}
