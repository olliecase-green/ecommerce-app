import React from "react";
import Basket from "./Basket";
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
        <div className="d-flex flex-row">
          <Basket />
          <DropdownButton
            id="dropdown-basic-button"
            variant="light"
            title="Menu"
            className="ms-2"
          >
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
      </div>
    </h1>
  );
}
