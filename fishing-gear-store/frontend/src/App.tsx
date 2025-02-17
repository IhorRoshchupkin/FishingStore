import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import ProductCard from "../src/components/productCard/productCard";
import ProductsPage from "./components/productsPage/productsPage";
import ProductDetailPage from "./components/productDetailPage/productDetailPage";
import React from "react";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<h1>Welcome to Fishing Gear Store!</h1>} />

            {/* Products Page */}
            <Route path="/products" element={<ProductsPage />} />

            {/* Products Page */}
            <Route path="/products/:id" element={<ProductDetailPage />} />

            {/* 404 Page */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
