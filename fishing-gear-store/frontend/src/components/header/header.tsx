import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Navbar from "../navbar/navbar";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-100">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <div className="logo text-primary fs-4 fw-bold">Fishing Gear</div>

          {/* Searching bar */}
          <div className="flex-grow-1 mx-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search item..."
            />
          </div>

          {/* Login and shopping card */}
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-primary me-3">Login</button>
            <button className="btn btn-primary">🛒 Shopping Cart</button>
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
