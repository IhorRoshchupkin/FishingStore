import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        {/* Copyright text */}
        <p>© 2024 Fishing Gear. All rights reserved.</p>

        {/* Footer links */}
        <div className="footer-links">
          <a href="#" className="text-white">
            Do Not Sell My Personal Information
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-white">
            Sales & Security Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-white">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
