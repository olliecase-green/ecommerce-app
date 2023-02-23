import React, { useState } from "react";
import "../main.css";
import Button from "react-bootstrap/Button";
import ReviewModal from "./ReviewModal";

export default function ProductCard(props) {
  const [show, setShow] = useState(false);
  const { name, image, price, stock } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAddToBag() {
    window.alert(`${name} added to bag!`);
  }

  function createProductCard() {
    return (
      <div className="product-card">
        <img src={image} alt="product" className="product-image" />
        <div>
          <h4>{name}</h4>
          <div>£{price}</div>
          <div className="product-quantity">Quantity in stock: {stock}</div>
          <Button onClick={handleAddToBag} className="btn" variant="dark">
            Add to bag
          </Button>
          <Button onClick={handleShow} className="btn" variant="light">
            Add review
          </Button>
          <ReviewModal show={show} handleClose={handleClose} />
        </div>
      </div>
    );
  }

  return <>{createProductCard()}</>;
}
