import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaBars, FaTimes, FaPhoneVolume } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { LINKS } from "../../constants";
import { toggleMobileMenu, closeMobileMenu } from "../../redux/navbarSlice";
import "../../../css/index.css";

const Navbar = ({ toggleCart }) => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.navbar.isMobileMenuOpen);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    dispatch(closeMobileMenu());
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

        <div className="menu-toggle" onClick={() => dispatch(toggleMobileMenu())}>
          {isMobileMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <FaTimes className="mobile-close-icon" onClick={() => dispatch(toggleMobileMenu())} />

        {LINKS.map((link, index) => (
          <a
            key={index}
            href={`#${link.targetId}`}
            className="mobile-nav-link"
            onClick={(e) => handleScroll(e, link.targetId)}
          >
            {link.text}
          </a>
        ))}
        <FaShoppingCart className="mobile-nav-icon" onClick={toggleCart} />
        <a href="/contacto" target="_blank" rel="noopener noreferrer" className="mobile-nav-icon">
          <FaPhoneVolume />
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default Navbar;

