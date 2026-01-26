import { FiMail } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h3>Thinksphere</h3>
          <p>
            A premium digital studio crafting refined, scalable, and
            high-performance digital products for modern brands.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#approach">Our Approach</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="footer-icons">
            <a href="mailto:ballanagababu29@gmail.com" aria-label="Email">
              <FiMail />
            </a>
            <a href="https://www.instagram.com/thinksphere.ai?igsh=YjNlY3ZrMGxzbW40" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919014884200" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Thinksphere. All rights reserved.
      </div>
    </footer>
  );
}
