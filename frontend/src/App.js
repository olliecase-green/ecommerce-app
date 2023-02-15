import Home from "./components/Home";
import ProductGrid from "./components/ProductGrid";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="products" element={<ProductGrid />} />
      </Routes>
    </div>
  );
}
