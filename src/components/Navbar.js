import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { handleNavClick } from "../controllers/appController";
import Logo from "./Logo";
import "./Navbar.css";

const commercialLinks = [
  { label: "Home", path: "/commercial" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const domesticLinks = [
  { label: "Home", path: "/domestic-cleaning" },
  { label: "Services", path: "/domestic-cleaning/services" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = ({ dark = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/domestic-cleaning")) {
      sessionStorage.setItem("serviceContext", "domestic");
    } else if (
      location.pathname.startsWith("/commercial") ||
      location.pathname.startsWith("/services")
    ) {
      sessionStorage.setItem("serviceContext", "commercial");
    }
  }, [location.pathname]);

  const getServiceContext = () => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("serviceContext");
      if (stored) return stored;
    }
    if (location.pathname.startsWith("/domestic-cleaning")) {
      return "domestic";
    }
    return "commercial";
  };

  const isDomestic = getServiceContext() === "domestic";
  const links = isDomestic ? domesticLinks : commercialLinks;

  const isLinkActive = (linkPath) => {
    const currentPath = location.pathname;
    const currentHash = location.hash;

    if (linkPath.includes('#')) {
      const [path, hash] = linkPath.split('#');
      return currentPath === path && currentHash === `#${hash}`;
    }

    return currentPath === linkPath && !currentHash;
  };

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
          {/* Logo — Universal return to global ServiceSelectorPage */}
          <button
            className="navbar__logo"
            onClick={() => handleNavClick(navigate, "/", null)}
          >
            <Logo light={!scrolled && !dark && !menuOpen} height={44} />
          </button>

          {/* Desktop Links */}
          <div className="navbar__center">
            <ul className="navbar__links">
              {links.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                  <li key={link.path}>
                    <button
                      className={`navbar__link ${isActive ? "active" : ""}`}
                      onClick={() => handleNavClick(navigate, link.path, null)}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA */}
          <button
            className="navbar__cta"
            onClick={() => handleNavClick(navigate, isDomestic ? "/domestic-cleaning/services#inspection" : "/contact", null)}
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
        {links.map((link) => {
          const isActive = isLinkActive(link.path);
          return (
            <button
              key={link.path}
              className={`navbar__mobile-link ${isActive ? "active" : ""}`}
              onClick={() => handleNavClick(navigate, link.path, setMenuOpen)}
            >
              {link.label}
            </button>
          );
        })}
        <button
          className="navbar__mobile-cta"
          onClick={() => handleNavClick(navigate, isDomestic ? "/domestic-cleaning/services#inspection" : "/contact", setMenuOpen)}
        >
          Get a Quote →
        </button>
      </div>
    </>
  );
};

export default Navbar;
