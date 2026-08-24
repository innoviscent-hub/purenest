import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import DomesticInspectionForm from '../components/DomesticInspectionForm';
import {
  domesticPricing,
  domesticAddOns,
  domesticDeepCleanAdditional,
  allInclusiveDeepClean,
  domesticBookingProcess,
} from '../models/dataModel';

// ============================================================
// DomesticServicesPage
// Route: /domestic-cleaning/services
// Dedicated Domestic Services, Pricing & Inclusions Reference.
// Mobile-polished responsive layout:
// - Non-colliding flex header badge layout on Deep Clean card
// - Consistent, proportional pricing table columns with fluid padding
// - Coherent, balanced Add-Ons table with natural wrapping
// - Seamless, responsive Specialist Services panel
// - Zero horizontal page overflow at all viewport widths (320px–1440px)
// ============================================================

const deepCleanCategoryIcons = ['🏠', '🪟', '🍳', '🚿', '🛏️', '🛋️', '🚪', '🧹', '✋', '✨'];

const deepCleanCategories = allInclusiveDeepClean.sections.map((section, index) => ({
  ...section,
  icon: deepCleanCategoryIcons[index] || '✓',
  count: section.items.length,
}));

const DomesticServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [prefillService, setPrefillService] = useState('');
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  useEffect(() => {
    if (selectedCategory === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setSelectedCategory(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;

      if (lastTriggerRef.current) {
        window.requestAnimationFrame(() => {
          lastTriggerRef.current?.focus({ preventScroll: true });
        });
      }
    };
  }, [selectedCategory]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookCTA = (serviceType = '') => {
    setPrefillService(serviceType);
    scrollToSection('inspection');
  };

  return (
    <div className="fade-in" style={{ background: '#ffffff', width: '100%', overflowX: 'hidden' }}>
      <SEO
        title="Domestic Cleaning Services & Pricing"
        description="Detailed domestic cleaning rates and service inclusions for Auckland homes and apartments. Standard Clean and All-Inclusive Deep Clean starting with a free inspection."
        path="/domestic-cleaning/services"
      />

      {/* ── 1. Compact Service Header ── */}
      <header
        className="hero-header"
        style={{
          paddingTop: 'calc(var(--navbar-height, 90px) + clamp(2rem, 5vw, 4rem))',
          paddingBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
          background: 'linear-gradient(160deg, #001a0e 0%, #003020 50%, #004d2a 100%)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span
            className="label-badge label-badge-gold"
            style={{ marginBottom: '1.25rem', display: 'inline-flex' }}
          >
            Rate Card &amp; Specifications
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Domestic Rates &amp; Inclusions
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'rgba(255,255,255,0.75)',
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              maxWidth: '620px',
              margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
              lineHeight: 1.7,
            }}
          >
            Transparent pricing, room checklists, and complete service coverage for Auckland homes. Every clean begins with a complimentary on-site inspection.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-gold hero-cta-btn"
              onClick={() => handleBookCTA()}
              style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem' }}
            >
              Book Free Inspection ↓
            </button>
            <button
              className="btn btn-outline-white hero-cta-btn"
              onClick={() => scrollToSection('pricing')}
              style={{ padding: '0.85rem 1.75rem', fontSize: '0.9rem' }}
            >
              View Rate Card ↓
            </button>
          </div>
        </div>
      </header>

      {/* ── 2. Indicative Pricing Section ── */}
      <section id="pricing" style={{ background: '#f8faf8', padding: 'clamp(3.5rem, 7vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="label-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              Published Rate Card
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 3rem)', color: '#002818', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Cleaning Rates &amp; Tiers
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
              Transparent starting rates based on property size. All prices include GST. Final quote is confirmed during your free on-site inspection.
            </p>
          </div>

          {/* Pricing Grid: Standard Clean vs Deep Clean side-by-side */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '2.5rem',
            }}
          >
            {/* ── Standard Clean Card ── */}
            <div
              id="standard-clean-rates"
              style={{
                background: 'white',
                borderRadius: '24px',
                border: '1px solid rgba(0,104,55,0.12)',
                boxShadow: '0 12px 36px rgba(0,40,24,0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ padding: 'clamp(1.25rem, 3.5vw, 1.75rem) clamp(1.25rem, 4vw, 2rem)', borderBottom: '1px solid rgba(0,104,55,0.08)' }}>
                <span className="label-badge" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
                  Standard Clean
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.35rem, 3vw, 1.6rem)', color: '#002818', marginBottom: '0.4rem', lineHeight: 1.25 }}>
                  Regular Upkeep Plan
                </h3>
                <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {domesticPricing.standardClean.description}
                </p>
              </div>

              {/* Rate Table */}
              <div style={{ overflowX: 'auto', width: '100%' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', tableLayout: 'auto' }}>
                  <thead>
                    <tr style={{ background: '#f0fdf4', borderBottom: '1px solid rgba(0,104,55,0.1)' }}>
                      <th style={{ padding: 'clamp(0.65rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', width: '46%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#006837' }}>
                        Property Size
                      </th>
                      <th style={{ padding: 'clamp(0.65rem, 2vw, 0.85rem) clamp(0.5rem, 2vw, 1rem)', width: '27%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#006837', textAlign: 'right', whiteSpace: 'nowrap' }}>
                        ex. GST
                      </th>
                      <th style={{ padding: 'clamp(0.65rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', width: '27%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#006837', textAlign: 'right', whiteSpace: 'nowrap' }}>
                        incl. GST
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {domesticPricing.standardClean.rows.map((row, i) => (
                      <tr
                        key={row.size}
                        style={{
                          borderBottom: i < domesticPricing.standardClean.rows.length - 1 ? '1px solid rgba(0,104,55,0.06)' : 'none',
                          background: i % 2 === 0 ? '#ffffff' : '#fafcfa',
                        }}
                      >
                        <td style={{ padding: 'clamp(0.7rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.82rem, 2.2vw, 0.9rem)', color: '#002818', fontWeight: 500, lineHeight: 1.35 }}>
                          {row.size}
                        </td>
                        <td style={{ padding: 'clamp(0.7rem, 2vw, 0.85rem) clamp(0.5rem, 2vw, 1rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.82rem, 2.2vw, 0.9rem)', color: 'var(--text-muted)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                          {row.base}
                        </td>
                        <td style={{ padding: 'clamp(0.7rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', fontFamily: 'var(--font-ui)', fontSize: 'clamp(0.84rem, 2.2vw, 0.92rem)', color: '#006837', fontWeight: 700, textAlign: 'right', whiteSpace: 'nowrap' }}>
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Recurring Discounts Callout */}
              <div style={{ padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1.25rem, 4vw, 2rem)', borderTop: '1px solid rgba(0,104,55,0.08)', background: '#f0fdf4' }}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#006837', marginBottom: '0.5rem' }}>
                  Recurring Booking Discounts
                </p>
                {domesticPricing.standardClean.discounts.map((d) => (
                  <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#006837', fontWeight: 900, fontSize: '0.75rem', marginTop: '0.15rem', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 'clamp(0.82rem, 2vw, 0.88rem)', color: '#003d20', fontWeight: 500, lineHeight: 1.45 }}>{d}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: 'clamp(1.1rem, 3vw, 1.35rem) clamp(1.25rem, 4vw, 2rem)', marginTop: 'auto' }}>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', borderRadius: '12px', padding: '0.9rem 1rem', fontSize: 'clamp(0.82rem, 2.8vw, 0.92rem)' }}
                  onClick={() => handleBookCTA('Standard Clean')}
                >
                  Book Standard Clean Inspection
                </button>
              </div>
            </div>

            {/* ── Deep Clean Card ── */}
            <div
              id="deep-clean-rates"
              style={{
                background: 'linear-gradient(180deg, #001f12 0%, #003820 100%)',
                borderRadius: '24px',
                border: '1.5px solid rgba(201,168,76,0.3)',
                boxShadow: '0 20px 60px rgba(0,40,24,0.22)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Flexible Non-Colliding Header Row */}
              <div style={{ padding: 'clamp(1.25rem, 3.5vw, 1.75rem) clamp(1.25rem, 4vw, 2rem)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span className="label-badge label-badge-gold" style={{ display: 'inline-flex' }}>
                    Deep Clean
                  </span>
                  <span
                    style={{
                      padding: '0.35rem 0.85rem',
                      background: 'linear-gradient(135deg, #b07d12, #dfc074)',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: '#1a0e00',
                      letterSpacing: '0.5px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ★ RECOMMENDED RESET
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.35rem, 3vw, 1.6rem)', color: '#ffffff', marginBottom: '0.4rem', lineHeight: 1.25 }}>
                  All-Inclusive Deep Clean
                </h3>
                <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                  {domesticPricing.deepClean.description}
                </p>
              </div>

              {/* Rate Table */}
              <div style={{ overflowX: 'auto', width: '100%' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', tableLayout: 'auto' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <th style={{ padding: 'clamp(0.65rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', width: '46%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#dfc074' }}>
                        Property Size
                      </th>
                      <th style={{ padding: 'clamp(0.65rem, 2vw, 0.85rem) clamp(0.5rem, 2vw, 1rem)', width: '27%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#dfc074', textAlign: 'right', whiteSpace: 'nowrap' }}>
                        ex. GST
                      </th>
                      <th style={{ padding: 'clamp(0.65rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', width: '27%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#dfc074', textAlign: 'right', whiteSpace: 'nowrap' }}>
                        incl. GST
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {domesticPricing.deepClean.rows.map((row, i) => (
                      <tr
                        key={row.size}
                        style={{
                          borderBottom: i < domesticPricing.deepClean.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                        }}
                      >
                        <td style={{ padding: 'clamp(0.7rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.82rem, 2.2vw, 0.9rem)', color: 'rgba(255,255,255,0.9)', fontWeight: 500, lineHeight: 1.35 }}>
                          {row.size}
                        </td>
                        <td style={{ padding: 'clamp(0.7rem, 2vw, 0.85rem) clamp(0.5rem, 2vw, 1rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.82rem, 2.2vw, 0.9rem)', color: 'rgba(255,255,255,0.5)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                          {row.base}
                        </td>
                        <td style={{ padding: 'clamp(0.7rem, 2vw, 0.85rem) clamp(0.75rem, 2.5vw, 1.25rem)', fontFamily: 'var(--font-ui)', fontSize: 'clamp(0.84rem, 2.2vw, 0.92rem)', color: '#dfc074', fontWeight: 700, textAlign: 'right', whiteSpace: 'nowrap' }}>
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add-ons Included Callout */}
              <div style={{ padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1.25rem, 4vw, 2rem)', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(201,168,76,0.08)' }}>
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#dfc074', marginBottom: '0.5rem' }}>
                  All Standard Add-Ons Included Free
                </p>
                {domesticDeepCleanAdditional.slice(0, 3).map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#dfc074', fontWeight: 900, fontSize: '0.75rem', marginTop: '0.15rem', flexShrink: 0 }}>★</span>
                    <span style={{ fontSize: 'clamp(0.82rem, 2vw, 0.88rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: 'clamp(1.1rem, 3vw, 1.35rem) clamp(1.25rem, 4vw, 2rem)', marginTop: 'auto' }}>
                <button
                  className="btn btn-gold"
                  style={{ width: '100%', borderRadius: '12px', padding: '0.9rem 1rem', fontSize: 'clamp(0.82rem, 2.8vw, 0.92rem)' }}
                  onClick={() => handleBookCTA('Deep Clean')}
                >
                  Book Deep Clean Inspection
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Disclaimer Callout */}
          <div
            style={{
              padding: 'clamp(1rem, 3vw, 1.25rem) clamp(1.25rem, 4vw, 1.75rem)',
              borderRadius: '16px',
              background: 'white',
              border: '1px solid rgba(0,104,55,0.1)',
              boxShadow: '0 4px 16px rgba(0,40,24,0.04)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem',
            }}
          >
            <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '0.1rem' }}>💡</span>
            <p style={{ fontSize: 'clamp(0.84rem, 2vw, 0.9rem)', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: '#002818' }}>How pricing is confirmed:</strong> {domesticPricing.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Deep Clean Inclusions Index ── */}
      <section id="deep-clean" style={{ background: '#ffffff', padding: 'clamp(3.5rem, 7vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              Coverage Index
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 3rem)', color: '#002818', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              All-Inclusive Deep Clean Checklist
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
              A systematic room-by-room reset covering 10 major areas. Click any card to inspect the exact checklist items for that area.
            </p>
          </div>

          {/* 10-Category Index Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              marginBottom: '2.5rem',
            }}
          >
            {deepCleanCategories.map((category) => (
              <button
                key={category.title}
                type="button"
                className="deep-clean-category-card"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setSelectedCategory(category);
                }}
                style={{
                  minHeight: '105px',
                  padding: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                }}
                aria-label={`View checklist for ${category.title}`}
              >
                <div
                  className="deep-clean-category-icon"
                  style={{ width: '44px', height: '44px', fontSize: '1.25rem' }}
                  aria-hidden="true"
                >
                  {category.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                  <h3
                    className="deep-clean-category-title"
                    style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}
                  >
                    {category.title}
                  </h3>
                  <p
                    className="deep-clean-category-count"
                    style={{ fontSize: '0.78rem', margin: 0 }}
                  >
                    {category.count} items <span style={{ color: '#006837', fontWeight: 800 }}>→</span>
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Service Conditions ── */}
      <section id="conditions" style={{ background: '#f8faf8', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'white',
              borderRadius: '24px',
              border: '1px solid rgba(0,104,55,0.08)',
              boxShadow: '0 12px 36px rgba(0,40,24,0.06)',
              padding: 'clamp(1.25rem, 4vw, 2.75rem)',
            }}
          >
            <span className="label-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              Service Inclusions
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.35rem, 3vw, 2rem)',
                color: '#002818',
                marginBottom: '1.25rem',
                lineHeight: 1.25,
              }}
            >
              Standard Rate Inclusions &amp; Conditions
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'grid', gap: '0.85rem' }}>
              {allInclusiveDeepClean.serviceConditions.map((cond) => (
                <li
                  key={cond}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    color: '#2d4a37',
                    lineHeight: 1.65,
                  }}
                >
                  <span style={{ color: '#006837', fontWeight: 900, fontSize: '0.75rem', marginTop: '0.35rem', flexShrink: 0 }} aria-hidden="true">✓</span>
                  {cond}
                </li>
              ))}
            </ul>

            <div
              style={{
                padding: '0.9rem 1.15rem',
                borderRadius: '14px',
                background: '#f8faf8',
                border: '1px solid rgba(0,104,55,0.08)',
                fontSize: 'clamp(0.82rem, 2vw, 0.88rem)',
                color: '#3c5949',
                lineHeight: 1.65,
              }}
            >
              ℹ️ {allInclusiveDeepClean.additionalChargeConditions[1]}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Add-Ons & Specialist Services ── */}
      <section id="addons" style={{ background: '#ffffff', padding: 'clamp(3.5rem, 7vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              Add-Ons &amp; Specialist Work
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 3rem)', color: '#002818', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Optional Extras &amp; Custom Work
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
              Standard add-ons are <strong>included free</strong> with Deep Clean bookings, and optional extras for Standard Clean bookings.
            </p>
          </div>

          {/* 10-Row Add-ons Table */}
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0,104,55,0.1)',
              boxShadow: '0 8px 32px rgba(0,40,24,0.05)',
              overflowX: 'auto',
              marginBottom: '2.5rem',
              width: '100%',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', tableLayout: 'auto' }}>
              <thead>
                <tr style={{ background: '#f8faf8', borderBottom: '1px solid rgba(0,104,55,0.1)' }}>
                  <th style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(0.75rem, 2.5vw, 1.5rem)', width: '46%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#006837' }}>
                    Add-On Service
                  </th>
                  <th style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(0.5rem, 2vw, 1rem)', width: '26%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#006837', textAlign: 'right', whiteSpace: 'nowrap' }}>
                    Standard Rate
                  </th>
                  <th style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(0.75rem, 2.5vw, 1.5rem)', width: '28%', fontFamily: 'var(--font-ui)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: '#006837', textAlign: 'right', whiteSpace: 'nowrap' }}>
                    Deep Clean
                  </th>
                </tr>
              </thead>
              <tbody>
                {domesticAddOns.map((row, i) => (
                  <tr
                    key={row.service}
                    style={{
                      borderBottom: i < domesticAddOns.length - 1 ? '1px solid rgba(0,104,55,0.05)' : 'none',
                      background: i % 2 === 0 ? '#ffffff' : '#fafcfa',
                    }}
                  >
                    <td style={{ padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(0.75rem, 2.5vw, 1.5rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.82rem, 2.2vw, 0.9rem)', color: '#002818', fontWeight: 500, lineHeight: 1.4 }}>
                      {row.service}
                    </td>
                    <td style={{ padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(0.5rem, 2vw, 1rem)', fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.82rem, 2.2vw, 0.9rem)', color: 'var(--text-muted)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                      {row.standardRate}
                    </td>
                    <td style={{ padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(0.75rem, 2.5vw, 1.5rem)', textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: 'clamp(0.7rem, 2vw, 0.78rem)',
                          fontWeight: 700,
                          color: '#006837',
                          padding: '0.22rem 0.6rem',
                          background: '#f0fdf4',
                          borderRadius: '9999px',
                          border: '1px solid rgba(0,104,55,0.15)',
                          display: 'inline-block',
                        }}
                      >
                        ✓ {row.deepClean}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Distinct Specialist Work Panel */}
          <div
            style={{
              background: 'linear-gradient(160deg, #001a0e 0%, #003020 100%)',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: 'white',
            }}
          >
            <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              Specialist Capabilities
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)',
                color: 'white',
                marginBottom: '0.75rem',
                lineHeight: 1.25,
              }}
            >
              Specialist Services (Priced on Inspection)
            </h3>
            <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '750px' }}>
              {allInclusiveDeepClean.additionalChargeConditions[0]}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
                gap: '0.65rem',
              }}
            >
              {[
                'Carpet steam extraction',
                'Blinds & curtain treatment',
                'Upholstery steam cleaning',
                'Exterior / high window cleaning',
                'Mould remediation',
                'Heavy rubbish removal',
                'Pest control treatment',
                'Biohazard cleaning',
                'Paint & plaster removal',
                'Restoration cleaning',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: 'clamp(0.8rem, 2vw, 0.85rem)',
                    color: 'rgba(255,255,255,0.85)',
                    padding: '0.35rem 0',
                  }}
                >
                  <span style={{ color: '#dfc074', fontWeight: 900, fontSize: '0.7rem', flexShrink: 0 }}>◆</span>
                  {item}
                </div>
              ))}
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', margin: '1.5rem 0 0 0' }}>
              All specialist requirements are identified and priced clearly during your complimentary on-site inspection.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Detailed 7-Step SOP Process ── */}
      <section id="how-it-works" style={{ background: '#f8faf8', padding: 'clamp(3.5rem, 7vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="label-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              The Full Process
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 3rem)', color: '#002818', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              How PureNest Operates
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
              Our standardized 7-step operational procedure ensures complete transparency from initial enquiry to final photographic sign-off.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 'clamp(1rem, 2.5vw, 1.25rem)',
            }}
          >
            {domesticBookingProcess.map((step) => (
              <div
                key={step.step}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  border: '1px solid rgba(0,104,55,0.08)',
                  padding: 'clamp(1.25rem, 3.5vw, 1.5rem)',
                  boxShadow: '0 8px 24px rgba(0,40,24,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-0.3rem',
                    right: '1rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '4.5rem',
                    fontWeight: 800,
                    color: '#006837',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {String(step.step).padStart(2, '0')}
                </div>

                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(0,104,55,0.1), rgba(201,168,76,0.08))',
                    border: '1px solid rgba(0,104,55,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                  }}
                >
                  {step.icon}
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#002818',
                    marginBottom: '0.45rem',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h4>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Domestic Inspection Form (Protected) ── */}
      <section id="inspection" style={{ background: '#ffffff', padding: 'clamp(3.5rem, 8vw, 6.5rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                Book Inspection
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem, 4vw, 3rem)', color: '#002818', marginBottom: '1rem', lineHeight: 1.2 }}>
                Request Your Free Inspection
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                Complete the request form below. A PureNest representative will reach out within 24–48 hours to confirm your on-site inspection time.
              </p>
            </div>

            <DomesticInspectionForm prefillService={prefillService} />
          </div>
        </div>
      </section>

      {/* ── 8. Footer ── */}
      <Footer />

      {/* Detail Modal Portal */}
      {selectedCategory && typeof document !== 'undefined'
        ? createPortal(
            <div className="deep-clean-modal-overlay" role="presentation" onMouseDown={() => setSelectedCategory(null)}>
              <div
                className="deep-clean-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="deep-clean-modal-title"
                aria-describedby="deep-clean-modal-description"
                onMouseDown={(event) => event.stopPropagation()}
              >
                <div className="deep-clean-modal__header">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span className="label-badge label-badge-gold" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>
                      Coverage Area
                    </span>
                    <h3 id="deep-clean-modal-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span aria-hidden="true">{selectedCategory.icon}</span>
                      <span>{selectedCategory.title}</span>
                    </h3>
                    <p id="deep-clean-modal-description">{selectedCategory.count} inclusions in this coverage area.</p>
                  </div>

                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="deep-clean-modal__close"
                    onClick={() => setSelectedCategory(null)}
                    aria-label={`Close details for ${selectedCategory.title}`}
                  >
                    Close
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div className="deep-clean-modal__body">
                  <ul className="deep-clean-detail-list deep-clean-detail-list--dialog">
                    {selectedCategory.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedCategory.note && <div className="deep-clean-detail-note">{selectedCategory.note}</div>}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
};

export default DomesticServicesPage;
