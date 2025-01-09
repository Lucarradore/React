import PropTypes from "prop-types";
import { FaShoppingCart, FaBars, FaTimes, FaPhoneVolume } from "react-icons/fa"; // Importación única
import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { useState } from "react";

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
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <img src={logo} alt="restaura" width={80} height={22} />
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm text-gray-500 hover:text-gray-200 opacity-50 ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              }`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}
          <FaShoppingCart
            size={24}
            className="text-gray-600 hover:text-gray-400 cursor-pointer transition duration-300"
            onClick={toggleCart}
          />
          {/* Icono de contacto */}
          <a
            href="/contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-400 transition duration-300"
          >
            <FaPhoneVolume size={24} />
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default Navbar;
