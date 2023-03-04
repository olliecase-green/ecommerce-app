import React from "react";
import Card from "react-bootstrap/Card";

export default function Subtitle(props) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <h3 className="m-0">{props.subtitle}</h3>
      </Card.Body>
    </Card>
  );
}
