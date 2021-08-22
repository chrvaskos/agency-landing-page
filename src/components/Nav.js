import React from "react";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { Icon } from "react-icons-kit";
import { navicon } from "react-icons-kit/fa/navicon";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light p-0 container">
      <Link to="/" className="navbar-brand">
        <span className="brand-text">Brand Image</span>
      </Link>
      <button
        className="navbar-toggler mr-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Icon size="32" icon={navicon} />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto text-dark text-uppercase">
          <NavLink to="/" className=" nav-item navlink">
            Home
          </NavLink>
          <NavLink to="/" className="navlink">
            About Us
          </NavLink>
          <NavLink to="/" className="navlink">
            Services
          </NavLink>
          <NavLink to="/" className="navlink">
            Portfolio
          </NavLink>
          <NavLink to="/" className="navlink">
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
