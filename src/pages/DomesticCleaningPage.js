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
// DomesticCleaningPage
// Route: /domestic-cleaning
// Full domestic cleaning experience — pricing, inclusions,
// conditions, how it works, and inspection enquiry form.
// ============================================================

const deepCleanCategoryIcons = ['🏠', '🪟', '🍳', '🚿', '🛏️', '🛋️', '🚪', '🧹', '✋', '✨'];

const deepCleanCategories = allInclusiveDeepClean.sections.map((section, index) => ({
  ...section,
  icon: deepCleanCategoryIcons[index] || '✓',
  count: section.items.length,
}));

// ── Main page ──
const DomesticCleaningPage = () => {
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

  const scrollToInspection = () => {
    const el = document.getElementById('inspection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookCTA = (serviceType = '') => {
    setPrefillService(serviceType);
    scrollToInspection();
  };

  return (
    <div className="fade-in" style={{ background: '#ffffff' }}>
      <SEO
        title="Domestic Cleaning"
        description="PureNest domestic cleaning services for Auckland homes and apartments. Standard Clean and All-Inclusive Deep Clean. Starts with a free, no-obligation on-site inspection."
        path="/domestic-cleaning"
      />

      {/* ────────────────────────────────────────────────── */}
      {/* 1. HERO                                           */}
      {/* ────────────────────────────────────────────────── */}
      <header
        style={{
          minHeight: '72vh',
          background: 'linear-gradient(160deg, #001a0e 0%, #003020 50%, #004d2a 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'calc(var(--navbar-height, 90px) + clamp(4rem, 10vw, 7rem))',
          paddingBottom: '3rem',
        }}
      >
        {/* Decorative orbs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-8%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,166,81,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-8%', left: '-8%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,166,81,0.4), rgba(201,168,76,0.4), transparent)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="label-badge label-badge-gold" style={{ marginBottom: '1.75rem', display: 'inline-flex' }}>
              Domestic Cleaning
            </span>

            <h1
              className="fade-in-2"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.8rem, 6.5vw, 5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
              }}
            >
              Your Home,{' '}
              <span style={{ color: '#dfc074' }}>Professionally</span>
              {' '}Clean
            </h1>

            <p
              className="fade-in-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.75,
                maxWidth: '580px',
                margin: '0 auto 2rem',
              }}
            >
              Standard Clean and All-Inclusive Deep Clean for Auckland homes and apartments.
              Every booking starts with a <strong style={{ color: 'rgba(255,255,255,0.85)' }}>free, no-obligation on-site inspection.</strong>
            </p>

            <div
              className="fade-in-3"
              style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <button
                className="btn btn-gold hero-cta-btn"
                onClick={() => handleBookCTA()}
                style={{
                  padding: '1rem clamp(1rem, 4vw, 2rem)',
                  fontSize: 'clamp(0.72rem, 3vw, 0.92rem)',
                  whiteSpace: 'nowrap',
                }}
              >
                BOOK CLEANING INSPECTION NOW
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <a
                href="#pricing"
                className="btn btn-outline-white hero-cta-btn"
                style={{
                  padding: '1rem clamp(1rem, 4vw, 2rem)',
                  fontSize: 'clamp(0.72rem, 3vw, 0.92rem)',
                }}
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────────── */}
      {/* 2. PRICING                                        */}
      {/* ────────────────────────────────────────────────── */}
      <div id="services" />
      <section id="pricing" style={{ background: '#f8faf8', padding: 'clamp(4rem, 10vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '1rem' }}>
            <span className="label-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Indicative Pricing</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
              Cleaning Rates
            </h2>
            <p style={{ color: '#5a7060', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {domesticPricing.disclaimer}
            </p>
          </div>

          {/* Pricing grid: Standard + Deep Clean side by side */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: 'clamp(1.25rem, 3vw, 2rem)',
              marginTop: '2.5rem',
            }}
          >
            {/* Standard Clean */}
            <div
              style={{
                background: 'white',
                borderRadius: '24px',
                border: '1px solid rgba(0,104,55,0.1)',
                boxShadow: '0 16px 48px rgba(0,40,24,0.08)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '1.5rem clamp(1rem, 3vw, 1.75rem)', borderBottom: '1px solid rgba(0,104,55,0.08)' }}>
                <span className="label-badge" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>Standard Clean</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#002818', marginBottom: '0.5rem' }}>
                  Regular Upkeep
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#5a7060', lineHeight: 1.6 }}>
                  {domesticPricing.standardClean.description}
                </p>
              </div>

              <div style={{ overflow: 'hidden' }}>
                {/* Table header */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.5rem', padding: '0.65rem clamp(1rem, 3vw, 1.75rem)', background: '#f8faf8', borderBottom: '1px solid rgba(0,104,55,0.06)' }}>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#006837' }}>Property Size</span>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#006837', textAlign: 'right' }}>ex. GST</span>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#006837', textAlign: 'right' }}>incl. GST</span>
                </div>
                {domesticPricing.standardClean.rows.map((row, i) => (
                  <div
                    key={row.size}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto auto',
                      gap: '0.5rem',
                      padding: '0.75rem clamp(1rem, 3vw, 1.75rem)',
                      borderBottom: i < domesticPricing.standardClean.rows.length - 1 ? '1px solid rgba(0,104,55,0.05)' : 'none',
                      background: i % 2 === 0 ? 'white' : '#fafcfa',
                    }}
                  >
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', color: '#002818', fontWeight: 500 }}>{row.size}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', color: '#5a7060', textAlign: 'right' }}>{row.base}</span>
                    <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.87rem', color: '#002818', fontWeight: 700, textAlign: 'right' }}>{row.total}</span>
                  </div>
                ))}
              </div>

              {/* Discounts */}
              <div style={{ padding: '1.25rem clamp(1rem, 3vw, 1.75rem)', borderTop: '1px solid rgba(0,104,55,0.08)', background: '#f0fdf4' }}>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#006837', marginBottom: '0.6rem' }}>
                  Recurring Discounts
                </p>
                {domesticPricing.standardClean.discounts.map((d) => (
                  <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#006837', fontWeight: 900, fontSize: '0.7rem', marginTop: '0.25rem', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.85rem', color: '#2d4a37', lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: '1rem clamp(1rem, 3vw, 1.75rem) 1.5rem' }}>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', borderRadius: '12px', padding: '0.9rem' }}
                  onClick={() => handleBookCTA('Standard Clean')}
                >
                  Book Standard Clean Inspection
                </button>
              </div>
            </div>

            {/* Deep Clean */}
            <div
              style={{
                background: 'linear-gradient(180deg, #002818 0%, #003d20 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 24px 64px rgba(0,40,24,0.25)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Recommended badge */}
              <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                <span style={{ padding: '0.35rem 0.85rem', background: 'linear-gradient(135deg, #b07d12, #dfc074)', borderRadius: '9999px', fontFamily: 'Sora, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#1a0e00', letterSpacing: '0.5px' }}>
                  RECOMMENDED
                </span>
              </div>

              <div style={{ padding: '1.5rem clamp(1rem, 3vw, 1.75rem)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="label-badge label-badge-gold" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>Deep Clean</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>
                  All-Inclusive Deep Clean
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  {domesticPricing.deepClean.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0.5rem', padding: '0.65rem clamp(1rem, 3vw, 1.75rem)', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#dfc074' }}>Property Size</span>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#dfc074', textAlign: 'right' }}>ex. GST</span>
                  <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#dfc074', textAlign: 'right' }}>incl. GST</span>
                </div>
                {domesticPricing.deepClean.rows.map((row, i) => (
                  <div
                    key={row.size}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto auto',
                      gap: '0.5rem',
                      padding: '0.75rem clamp(1rem, 3vw, 1.75rem)',
                      borderBottom: i < domesticPricing.deepClean.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}
                  >
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', color: 'rgba(255,255,255,0.82)', fontWeight: 500 }}>{row.size}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', color: 'rgba(255,255,255,0.45)', textAlign: 'right' }}>{row.base}</span>
                    <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.87rem', color: '#dfc074', fontWeight: 700, textAlign: 'right' }}>{row.total}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: '1.25rem clamp(1rem, 3vw, 1.75rem)', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(201,168,76,0.07)' }}>
                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#dfc074', marginBottom: '0.6rem' }}>
                  All add-on services included
                </p>
                {domesticDeepCleanAdditional.slice(0, 4).map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#dfc074', fontWeight: 900, fontSize: '0.7rem', marginTop: '0.25rem', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}>+ more included below</p>
              </div>

              <div style={{ padding: '1rem clamp(1rem, 3vw, 1.75rem) 1.5rem' }}>
                <button
                  className="btn btn-gold"
                  style={{ width: '100%', borderRadius: '12px', padding: '0.9rem' }}
                  onClick={() => handleBookCTA('Deep Clean')}
                >
                  Book Deep Clean Inspection
                </button>
              </div>
            </div>
          </div>

          {/* Pricing disclaimer note */}
          <div
            style={{
              marginTop: '2rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '16px',
              background: 'white',
              border: '1px solid rgba(0,104,55,0.08)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem',
            }}
          >
            <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>ℹ️</span>
            <p style={{ fontSize: '0.88rem', color: '#3c5949', lineHeight: 1.7, margin: 0 }}>
              <strong>All rates are indicative starting prices.</strong> Final pricing is confirmed following your complimentary on-site inspection and reflects your property&apos;s actual size, condition, and scope of work. Every booking begins with a free inspection — no commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── */}
      {/* 3. ALL-INCLUSIVE DEEP CLEAN — WHAT'S INCLUDED     */}
      {/* ────────────────────────────────────────────────── */}
      <section id="deep-clean" style={{ background: 'white', padding: 'clamp(4rem, 10vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              {allInclusiveDeepClean.subtitle}
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
              {allInclusiveDeepClean.title}
            </h2>
            <p style={{ color: '#5a7060', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              A comprehensive deep clean covering all standard accessible areas of your property, organised by coverage area. Tap any category to view every included item.
            </p>
          </div>

          {/* Coverage area categories card grid */}
          <div className="deep-clean-category-grid" style={{ marginBottom: '2.5rem' }}>
            {deepCleanCategories.map((category) => (
              <button
                key={category.title}
                type="button"
                className="deep-clean-category-card"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setSelectedCategory(category);
                }}
                aria-label={`View details for ${category.title}`}
              >
                <div className="deep-clean-category-icon" aria-hidden="true">
                  {category.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 className="deep-clean-category-title">{category.title}</h3>
                  <p className="deep-clean-category-count">{category.count} inclusions</p>
                </div>
                <span
                  className="deep-clean-category-action"
                  style={{ display: 'inline-block' }}
                  aria-hidden="true"
                >
                  View details →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── */}
      {/* 4. SERVICE CONDITIONS                             */}
      {/* ────────────────────────────────────────────────── */}
      <section style={{ background: '#f8faf8', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              background: 'white',
              borderRadius: '24px',
              border: '1px solid rgba(0,104,55,0.08)',
              boxShadow: '0 12px 36px rgba(0,40,24,0.07)',
              padding: 'clamp(1.75rem, 5vw, 2.75rem)',
            }}
          >
            <span className="label-badge" style={{ marginBottom: '1.1rem', display: 'inline-flex' }}>Service Conditions</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', color: '#002818', marginBottom: '1.25rem' }}>
              What&apos;s Included in the Rate
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
              {allInclusiveDeepClean.serviceConditions.map((cond) => (
                <li
                  key={cond}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#2d4a37', lineHeight: 1.7 }}
                >
                  <span style={{ color: '#006837', fontWeight: 900, fontSize: '0.7rem', marginTop: '0.45rem', flexShrink: 0 }} aria-hidden="true">✓</span>
                  {cond}
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: '1.25rem',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                background: '#f8faf8',
                border: '1px solid rgba(0,104,55,0.08)',
                fontSize: '0.88rem',
                color: '#3c5949',
                lineHeight: 1.7,
              }}
            >
              {allInclusiveDeepClean.additionalChargeConditions[1]}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── */}
      {/* 5. ADD-ONS & SPECIALIST SERVICES                  */}
      {/* ────────────────────────────────────────────────── */}
      <section style={{ background: 'white', padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Add-On Services</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
              Optional Extras &amp; Specialist Work
            </h2>
            <p style={{ color: '#5a7060', fontSize: '1.05rem', lineHeight: 1.7 }}>
              The add-on services below are <strong>included free</strong> with every Deep Clean booking.
              For Standard Clean bookings, they are optional extras priced separately.
              Some specialist services may require an additional quote regardless of cleaning type.
            </p>
          </div>

          {/* Add-ons table */}
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0,104,55,0.1)',
              boxShadow: '0 8px 32px rgba(0,40,24,0.06)',
              overflow: 'hidden',
              marginBottom: '2.5rem',
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto auto',
                gap: 'clamp(0.5rem, 2vw, 1rem)',
                padding: '0.85rem clamp(0.75rem, 3vw, 1.5rem)',
                background: '#f8faf8',
                borderBottom: '1px solid rgba(0,104,55,0.08)',
              }}
            >
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#006837' }}>Service</span>
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#006837', textAlign: 'right', whiteSpace: 'nowrap' }}>Standard Rate</span>
              <span style={{ fontFamily: 'Sora, sans-serif', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#006837', textAlign: 'right', whiteSpace: 'nowrap' }}>Deep Clean</span>
            </div>
            {domesticAddOns.map((row, i) => (
              <div
                key={row.service}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto auto',
                  gap: 'clamp(0.5rem, 2vw, 1rem)',
                  padding: '0.8rem clamp(0.75rem, 3vw, 1.5rem)',
                  borderBottom: i < domesticAddOns.length - 1 ? '1px solid rgba(0,104,55,0.05)' : 'none',
                  background: i % 2 === 0 ? 'white' : '#fafcfa',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#002818' }}>{row.service}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#5a7060', textAlign: 'right', whiteSpace: 'nowrap' }}>{row.standardRate}</span>
                <span
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#006837',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                    padding: '0.2rem 0.65rem',
                    background: '#f0fdf4',
                    borderRadius: '9999px',
                    border: '1px solid rgba(0,104,55,0.15)',
                  }}
                >
                  {row.deepClean}
                </span>
              </div>
            ))}
          </div>

          {/* Specialist / additional-charge services */}
          <div
            style={{
              background: 'linear-gradient(160deg, #001a0e 0%, #003520 100%)',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            }}
          >
            <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              Specialist Services
            </span>
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                color: 'white',
                marginBottom: '0.75rem',
              }}
            >
              May Require Additional Charges
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              {allInclusiveDeepClean.additionalChargeConditions[0]}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '0.55rem',
              }}
            >
              {[
                'Carpet steam cleaning',
                'Blinds and curtains',
                'Upholstery cleaning',
                'Exterior / high-level window cleaning',
                'Mould remediation',
                'Heavy rubbish removal',
                'Pest treatment',
                'Biohazard cleaning',
                'Paint removal',
                'Heavily soiled restoration work',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.72)',
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: '#dfc074', fontWeight: 900, fontSize: '0.65rem', marginTop: '0.3rem', flexShrink: 0 }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
              All specialist requirements are identified and quoted during your free inspection. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── */}
      {/* 6. HOW IT WORKS                                   */}
      {/* ────────────────────────────────────────────────── */}
      <section id="how-it-works" style={{ background: '#f8faf8', padding: 'clamp(4rem, 10vw, 6rem) 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="label-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>The Process</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
              How It Works
            </h2>
            <p style={{ color: '#5a7060', fontSize: '1.05rem', lineHeight: 1.7 }}>
              From your first enquiry through to a spotless home — here&apos;s exactly what to expect.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 'clamp(1rem, 2.5vw, 1.5rem)',
            }}
          >
            {domesticBookingProcess.map((step) => (
              <div
                key={step.step}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  border: '1px solid rgba(0,104,55,0.08)',
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  boxShadow: '0 8px 24px rgba(0,40,24,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Step number watermark */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    right: '1rem',
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '5rem',
                    fontWeight: 800,
                    color: 'rgba(0,104,55,0.18)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {String(step.step).padStart(2, '0')}
                </div>

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(0,104,55,0.1), rgba(201,168,76,0.08))',
                    border: '1px solid rgba(0,104,55,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    marginBottom: '1rem',
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.05rem',
                    color: '#002818',
                    marginBottom: '0.6rem',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.87rem', color: '#5a7060', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── */}
      {/* 7. CTA SECTION                                    */}
      {/* ────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(160deg, #001a0e 0%, #003520 60%, #005228 100%)',
          padding: 'clamp(4rem, 10vw, 6rem) 0',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-badge label-badge-gold" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
            Free Inspection
          </span>
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Ready for a Cleaner Home?
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75,
              maxWidth: '540px',
              margin: '0 auto 2.5rem',
            }}
          >
            Request your free cleaning inspection today. A PureNest supervisor will visit your property, assess the scope, and provide a fixed written quote. No commitment required.
          </p>
          <button
            className="btn btn-gold"
            onClick={() => handleBookCTA()}
            style={{ padding: '1.1rem 2.5rem', fontSize: '1rem', letterSpacing: '0.03em' }}
          >
            BOOK CLEANING INSPECTION NOW
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
          <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
            Complimentary inspection · Written quote within 24 hours · No obligation
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── */}
      {/* 8. DOMESTIC INSPECTION FORM                       */}
      {/* ────────────────────────────────────────────────── */}
      <section id="inspection" style={{ background: '#f8faf8', padding: 'clamp(4rem, 10vw, 6rem) 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                Book Inspection
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#002818', marginBottom: '1rem' }}>
                Request Your Free Inspection
              </h2>
              <p style={{ color: '#5a7060', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
                Complete the form below. Our team will contact you to arrange a convenient inspection time — typically within 24–48 hours of your enquiry.
              </p>
            </div>

            <DomesticInspectionForm prefillService={prefillService} />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── */}
      {/* 9. FOOTER                                         */}
      {/* ────────────────────────────────────────────────── */}
      <Footer />

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

export default DomesticCleaningPage;
