import React from "react";
import { useNavigate } from "react-router-dom";
import { company, navLinks } from "../models/dataModel";
import { handleNavClick } from "../controllers/appController";
import Logo from "./Logo";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

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
              Delivering world-class cleaning, landscaping, and pest control services
              to institutional and commercial facilities across New Zealand.
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
              {navLinks.map((link) => (
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
              <li><span>Custodial &amp; Cleaning</span></li>
              <li><span>Landscaping &amp; Gardening</span></li>
              <li><span>Pest Control</span></li>
              <li><span>Snow &amp; Ice Removal</span></li>
              <li><span>Drain &amp; Sewer Cleaning</span></li>
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
