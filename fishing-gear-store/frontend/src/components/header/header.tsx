import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Navbar from "../navbar/navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

const Header = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <header className="bg-white shadow-sm w-100">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <Link className="nav-link" to="/">
            <div className="logo text-primary fs-4 fw-bold">Fishing Gear</div>
          </Link>

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
            {isAuthenticated ? (
              <div>
                <Link className="nav-link" to="/userAccount">
                  <button className="btn btn-outline-primary me-3">
                    Account
                  </button>
                </Link>
              </div>
            ) : (
              <Link className="nav-link" to="/login">
                <button className="btn btn-outline-primary me-3">Login</button>
              </Link>
            )}
            <button className="btn btn-primary">🛒 Shopping Cart</button>
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
