import PropTypes from "prop-types";
import { FaShoppingCart, FaBars, FaTimes, FaPhoneVolume } from "react-icons/fa";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { useState } from "react";
import "../../src/index.css";

const Navbar = ({ toggleCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="restaura" width={80} height={22} />
        <div className="nav-links">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`nav-link ${index !== 0 ? "nav-border" : ""}`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
          <FaShoppingCart className="nav-icon" onClick={toggleCart} />
          <a href="/contacto" target="_blank" rel="noopener noreferrer" className="nav-icon">
            <FaPhoneVolume />
          </a>
        </div>
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default Navbar;

