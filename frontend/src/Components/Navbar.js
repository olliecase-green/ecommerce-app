import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <h1 className="title">
      <div className="title-container">
        <Link className="main-link" to="/">
          PyShop
        </Link>
        <DropdownButton id="dropdown-basic-button" variant="light" title="Menu">
          <Dropdown.Item>
            <Link to="/">Home</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="../products">Products</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="../reviews">Reviews</Link>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </h1>
  );
}
