import { FiMail } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Footer.css";

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        {/* Brand Col */}
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <img src={logo} alt="Thinksphere" className="footer-logo" />
            <span className="footer-brand-name">Thinksphere</span>
          </div>
          <p className="footer-brand-desc">
            Independent software and digital product studio. We engineer custom web applications, 
            enterprise ERP systems, and scalable SaaS platforms for ambitious businesses.
          </p>
          <div className="footer-location-tag">
            <span>Andhra Pradesh & Telangana, India • Global Client Delivery</span>
          </div>
        </div>

        {/* Navigation Col */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#work" onClick={(e) => scrollTo(e, "work")}>Featured Work</a></li>
            <li><a href="#services" onClick={(e) => scrollTo(e, "services")}>Core Capabilities</a></li>
            <li><a href="#approach" onClick={(e) => scrollTo(e, "approach")}>Our Approach</a></li>
            <li><a href="#industries" onClick={(e) => scrollTo(e, "industries")}>Industry Verticals</a></li>
            <li><a href="#about" onClick={(e) => scrollTo(e, "about")}>About Studio</a></li>
            <li><a href="#contact" onClick={(e) => scrollTo(e, "contact")}>Start a Project</a></li>
          </ul>
        </div>

        {/* Channels Col */}
        <div className="footer-channels-col">
          <h4 className="footer-col-title">Direct Connect</h4>
          <ul className="footer-channels-list">
            <li>
              <a href="https://wa.me/919014884200" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91 9014884200
              </a>
            </li>
            <li>
              <a href="mailto:ballanagababu29@gmail.com">
                ballanagababu29@gmail.com
              </a>
            </li>
          </ul>

          <div className="footer-social-icons">
            <a
              href="https://wa.me/919014884200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-icon-btn"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:ballanagababu29@gmail.com"
              aria-label="Email"
              className="footer-icon-btn"
            >
              <FiMail />
            </a>
            <a
              href="https://www.instagram.com/flashcoders_?igsh=aGQxZWJ3OG1taTR5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-icon-btn"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-icon-btn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} Thinksphere. All rights reserved.
          </p>
          <p className="footer-tagline">
            Engineered with modern standards & architectural discipline.
          </p>
        </div>
      </div>
    </footer>
  );
}

