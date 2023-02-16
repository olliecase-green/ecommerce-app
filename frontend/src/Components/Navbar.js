import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <h1 className="title">
      <div className="title-container">
        <Link className="main-link" to="/">
          PyShop
        </Link>
      </div>
    </h1>
  );
}
