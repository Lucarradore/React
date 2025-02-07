import { SOCIAL_MEDIA_LINKS } from "../../constants";
import "../../src/index.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social-links">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="footer-text">
        &copy;RestauraTab. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

