import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { company } from "../models/dataModel";
import { handleNavClick } from "../controllers/appController";
import Logo from "./Logo";
import "./Footer.css";

const commercialLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const domesticLinks = [
  { label: "Main Site", path: "/" },
  { label: "Domestic Cleaning", path: "/domestic-cleaning" },
  { label: "Pricing", path: "/domestic-cleaning#pricing" },
  { label: "Deep Clean", path: "/domestic-cleaning#deep-clean" },
  { label: "How It Works", path: "/domestic-cleaning#how-it-works" },
  { label: "Book Inspection", path: "/domestic-cleaning#inspection" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const year = new Date().getFullYear();

  React.useEffect(() => {
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

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">

          {/* ── Brand ── */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Logo light={true} height={44} />
            </div>
            <p className="footer__brand-desc">
              {isDomestic
                ? "Premium residential cleaning services for homes and apartments in Auckland. Standard Clean and All-Inclusive Deep Clean starting with a free inspection."
                : "Delivering world-class cleaning, landscaping, and pest control services to institutional and commercial facilities across New Zealand."}
            </p>
            <div className="footer__badges">
              <span className="footer__badge">✓ NZ Licensed</span>
              <span className="footer__badge">✓ Compliance Certified</span>
              <span className="footer__badge">✓ ISO Compliant</span>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="footer__col">
            <span className="footer__col-title">Navigation</span>
            <ul className="footer__col-links">
              {links.map((link) => (
                <li key={link.path}>
                  <button onClick={() => handleNavClick(navigate, link.path, null)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="footer__col">
            <span className="footer__col-title">Services</span>
            <ul className="footer__col-links">
              {isDomestic ? (
                <>
                  <li><span>Standard Clean</span></li>
                  <li><span>Deep Clean</span></li>
                  <li><span>Oven &amp; Fridge Cleaning</span></li>
                  <li><span>Carpet Steam Clean</span></li>
                  <li><span>Window Cleaning</span></li>
                </>
              ) : (
                <>
                  <li><span>Custodial &amp; Cleaning</span></li>
                  <li><span>Landscaping &amp; Gardening</span></li>
                  <li><span>Pest Control</span></li>
                  <li><span>Snow &amp; Ice Removal</span></li>
                  <li><span>Drain &amp; Sewer Cleaning</span></li>
                </>
              )}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer__col">
            <span className="footer__col-title">Contact</span>
            <ul className="footer__col-info">
              <li>
                <span className="footer__info-icon">📍</span>
                <span>{company.address}</span>
              </li>
              <li>
                <span className="footer__info-icon">📞</span>
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </li>
              <li>
                <span className="footer__info-icon">✉️</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <span className="footer__info-icon">🌐</span>
                <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">{company.website}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} PureNest Facility Services. All rights reserved.</span>
          <span>Auckland, New Zealand · NZBN Registered</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
