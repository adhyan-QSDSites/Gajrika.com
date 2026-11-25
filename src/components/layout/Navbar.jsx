
import { useState } from "react";
import { navigationLinks } from "../../data/navigation";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="gajrika-navbar">
      <div className="gajrika-nav-container">

        {/* LOGO */}
        <a
          href="#home"
          className="gajrika-logo"
          onClick={closeMenu}
        >
          GAJRIKA<span>.</span>
        </a>

        {/* NAVIGATION LINKS */}
        <nav
          id="gajrika-navigation"
          className={`gajrika-nav-links ${menuOpen ? "active" : ""}`}
        >
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          {/* MOBILE CTA */}
          <a
            href="#contact"
            className="gajrika-mobile-cta"
            onClick={closeMenu}
          >
            Let's Talk <span>↗</span>
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <a href="#contact" className="gajrika-nav-cta">
          Let's Talk <span>↗</span>
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className={`gajrika-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="gajrika-navigation"
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
