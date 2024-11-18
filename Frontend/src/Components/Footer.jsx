// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Sections */}
        <div className="footer-grid">
          {/* About Section */}
          <div>
            <h3 className="footer-title">About PICT OLX</h3>
            <p className="footer-text">
              PICT OLX is a platform for college students to buy and sell items seamlessly. Empowering connections and transactions within the campus community.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/profile" className="footer-link">Profile</a></li>
              <li><a href="/items" className="footer-link">Items</a></li>
              <li><a href="/buy" className="footer-link">Buy</a></li>
              <li><a href="/sell" className="footer-link">Sell</a></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-text">
              <li>Email: <a href="mailto:support@pictolx.com" className="footer-link">support@pictolx.com</a></li>
              <li>Phone: +91-1234567890</li>
              <li>Address: Pune Institute of Computer Technology</li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="footer-divider"></div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 PICT OLX. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
