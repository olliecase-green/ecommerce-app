import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
import HomeCarousel from "./HomeCarousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h3 className="subtitle">Home</h3>
        <Button variant="light">
          <Link to="products">Products</Link>
        </Button>
        <div className="other-info-container">
          <div className="other-info">
            <h4 className="other-info-title">PyShop - a better way to shop</h4>
            <h6 className="other-info-text">PyShop Mobile</h6>
            <div>
              Enquire now about our special deals on mobile phones and contracts
              - our lowest ever prices! Available while stocks last, offer ends
              on 28/02/2023.
            </div>
            <h6 style={{ "margin-top": "10px" }}>Need more inspiration?</h6>
            <div>
              Explore our latest food ideas, ingredients and recipes by
              subscribing to our monthly newsletter. Taste the finer things in
              life.
            </div>
          </div>
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
}
