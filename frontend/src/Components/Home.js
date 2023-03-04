import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import HomeCarousel from "./HomeCarousel";
import Subtitle from "./Subtitle";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Subtitle subtitle={"Home"} />
        <Card>
          <Card.Body>
            <div className="other-info-container">
              <div className="other-info">
                <h4 className="other-info-title">
                  PyShop - a better way to shop
                </h4>
                <h6 className="other-info-text">PyShop Mobile</h6>
                <div>
                  Enquire now about our special deals on mobile phones and
                  contracts - our lowest ever prices! Available while stocks
                  last, offer ends on 28/02/2023.
                </div>
                <h6 className="mt-10">Need more inspiration?</h6>
                <div>
                  Explore our latest food ideas, ingredients and recipes by
                  subscribing to our monthly newsletter. Taste the finer things
                  in life.
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="mt-2">
          <Card.Body>
            <HomeCarousel />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
