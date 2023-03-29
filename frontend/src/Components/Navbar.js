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
        <div className="d-flex flex-row">
          <DropdownButton
            id="dropdown-basic-button"
            variant="light"
            title="Menu"
            className="ms-2"
          >
            <Dropdown.Item as={Link} to="/">
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="../products">
              Products
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="../reviews">
              Reviews
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </h1>
  );
}
