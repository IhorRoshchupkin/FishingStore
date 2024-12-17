import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ProductCard from "./components/productCard/productCard";
import React from "react";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {/* Product Grid */}
      <ProductCard />
      <Footer />
    </div>
  );
};

export default App;
