import React, { useState } from "react";

export default function Basket(props) {
  const [price, setPrice] = useState(0);

  return <div>{price}</div>;
}
