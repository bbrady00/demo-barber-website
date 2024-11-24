import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InstagramIcon, PhoneIcon, MapIcon, GlobeIcon } from "../Icon";
import "../../assets/styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={menuOpen ? "menu-active" : ""}>
      {/* Logo - links to the homepage */}
      <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        <img
          src={require("../../assets/images/Logo/logoMain.png")}
          alt="Logo Barber"
        />
      </Link>

      {/* Hamburger icon for toggling menu on small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navbar links */}
      <ul className="navbar-links">
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
        <li className="book-now button-container">
          <a
            href="r"
            className="navbar-book-now btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </li>
        <li className="icons">
          <InstagramIcon />
          <PhoneIcon />
          <GlobeIcon />
          <MapIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
