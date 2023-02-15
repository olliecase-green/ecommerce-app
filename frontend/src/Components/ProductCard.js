import React from "react";
import "../main.css";
import Button from "react-bootstrap/Button";

export default function ProductCard(props) {
  function createProductCard() {
    return (
      <div className="product-card">
        <img src={props.image} alt="product" className="product-image" />
        <div>
          <h4>{props.name}</h4>
          <div>£{props.price}</div>
          <div className="product-quantity">
            Quantity in stock: {props.stock}
          </div>
          <Button variant="primary">Add to bag</Button>
        </div>
      </div>
    );
  }

  return <>{createProductCard()}</>;
}
