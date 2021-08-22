import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="footer-container">
      <div className="container justify-content-center mt-5 mb-5">
        <div className="row">
          <div className="col-4 col-lg-6">
            <div className="h2">Brand Image</div>
          </div>
          <div className="col-4 col-lg-3">
            <div className="h3">Contact</div>
            <hr className="hr-4" />
            <ul className="list-unstyled">
              <li className="mb-2">email@example.com</li>
              <li className="mb-2">+30 1234 567 890</li>
              <li className="mb-2">Adress Street 123, Athens, Greece</li>
            </ul>
          </div>
          <div className="col-4 col-lg-3">
            <div className="h3">Links</div>
            <hr className="hr-5" />
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
