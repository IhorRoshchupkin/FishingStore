import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import ProductsPage from "./components/productsPage/productsPage";
import ProductPage from "./components/productPage/productPage"; // Import ProductPage
import React from "react";
import LoginPage from "./components/loginPage/loginPage";
import RegisterPage from "./components/registerPage/registerPage";
import { Provider } from "react-redux";
import { store } from "./app/store"; // Import store

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={<h1>Welcome to Fishing Gear Store!</h1>}
              />

              {/* Login Page */}
              <Route path="/login" element={<LoginPage />} />

              {/* Register Page */}
              <Route path="/register" element={<RegisterPage />} />

              {/* Products Page */}
              <Route path="/products" element={<ProductsPage />} />

              {/* Product Details Page */}
              <Route path="/products/:id" element={<ProductPage />} />

              {/* 404 Page */}
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
