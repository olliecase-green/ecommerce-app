import Home from "./components/Home";
import "./css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Reviews from "./components/Reviews";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/reviews" component={Reviews} />
          <Navigate to="/" />
        </Routes>
      </Router> */}
      <Home />
    </div>
  );
}
