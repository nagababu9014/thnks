import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["work", "services", "approach", "industries", "about", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label="Thinksphere Home"
        >
          <img src={logo} alt="Thinksphere" className="brand-logo" />
          <span className="brand-name">Thinksphere</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.replace("#", "") ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="navbar-cta-btn"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Start a Project
            <span className="cta-arrow" aria-hidden="true">→</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-list">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.href.replace("#", "") ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-cta-btn"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Start a Project →
          </a>
        </nav>
      </div>
    </header>
  );
}

