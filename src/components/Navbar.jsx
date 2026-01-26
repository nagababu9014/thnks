import { useRef } from "react";
import PillNav from "./PillNav/PillNav";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const pillNavRef = useRef(null);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-center">
        <PillNav
          ref={pillNavRef}
          logo={logo}
          logoAlt="ThinkSphere"
          items={[
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Reviews", href: "#reviews" },
            { label: "Contact", href: "#contact" },
          ]}
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          onMobileMenuClick={() => {
            // force close after navigation
            document.activeElement?.blur();
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
