import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../models/dataModel";
import { handleNavClick } from "../controllers/appController";
import Logo from "./Logo";
import "./Navbar.css";

const Navbar = ({ dark = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navElement = document.querySelector(".navbar");
      if (navElement) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${navElement.offsetHeight}px`
        );
      }
    };

    updateNavbarHeight();

    // Use resize listener and standard animation frames/timeouts to capture exact height changes
    window.addEventListener("resize", updateNavbarHeight);
    const timeoutId = setTimeout(updateNavbarHeight, 100);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      clearTimeout(timeoutId);
    };
  }, [scrolled, menuOpen, location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${dark ? "navbar--dark" : ""} ${menuOpen ? "navbar--open" : ""}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <button className="navbar__logo" onClick={() => handleNavClick(navigate, "/", null)}>
            <Logo light={!scrolled && !dark && !menuOpen} height={44} />
          </button>

          {/* Desktop Links */}
          <div className="navbar__center">
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    className={`navbar__link ${location.pathname === link.path ? "active" : ""}`}
                    onClick={() => handleNavClick(navigate, link.path, null)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            className="navbar__cta"
            onClick={() => handleNavClick(navigate, "/contact", null)}
          >
            Get a Quote →
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`navbar__overlay ${menuOpen ? "navbar__overlay--visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.path}
            className={`navbar__mobile-link ${location.pathname === link.path ? "active" : ""}`}
            onClick={() => handleNavClick(navigate, link.path, setMenuOpen)}
          >
            {link.label}
          </button>
        ))}
        <button
          className="navbar__mobile-cta"
          onClick={() => handleNavClick(navigate, "/contact", setMenuOpen)}
        >
          Get a Quote →
        </button>
      </div>
    </>
  );
};

export default Navbar;
