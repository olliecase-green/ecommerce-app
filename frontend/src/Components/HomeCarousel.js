import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import roastDinner from "frontendsrcimages\roast-dinner.jpg";
import roastDinner from "../images/roast-dinner.jpg";
import houses from "../images/houses.jpg";

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={roastDinner} alt="First slide" />
          <Carousel.Caption>
            <h3>Get your ingredients this Easter</h3>
            <p>Try our new roast dinner meats, potatoes and vegetables.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={houses} alt="Second slide" />
          <Carousel.Caption>
            <h3>Make sure your house is covered</h3>
            <p>Feel safer at home with our comprehensive home insurance.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
