import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand and toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Rods & Reels
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Baits & Lures
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Line, Hooks & Terminal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Equipment & Gear
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Electronics & Boating
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Wading & Apparel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fly Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ice Fishing
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">
                Sales
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
