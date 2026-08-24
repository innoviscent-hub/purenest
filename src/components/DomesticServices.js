import React from 'react';
import { domesticPricing } from '../models/dataModel';

// ============================================================
// DomesticServices — Homepage Services Overview
// Deep contrasting theme providing strong visual pacing on Home.
// Mobile-polished responsive layout:
// - Non-colliding metadata rows (badge + price) with nowrap badges
// - Fluid internal padding for comfortable left alignment
// - Natural multi-line wrapping and aligned emoji callout
// - Smooth vertical rhythm into rates disclaimer and Process section
// ============================================================

const DomesticServices = ({ onExploreServices, onStandardCleanRates, onDeepCleanRates }) => {
  return (
    <section
      id="services"
      style={{
        background: 'linear-gradient(160deg, #001a0e 0%, #002c19 50%, #00170c 100%)',
        padding: 'clamp(3.5rem, 7vw, 5.5rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(0,166,81,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              className="label-badge label-badge-gold"
              style={{ marginBottom: '1rem', display: 'inline-flex' }}
            >
              Our Services
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 4vw, 3.2rem)',
                color: '#ffffff',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Two services, tailored to your home.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(255,255,255,0.72)',
                fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Whether you need regular upkeep or a thorough top-to-bottom reset, PureNest provides a transparent, checklist-driven service.
            </p>
          </div>

          <div style={{ width: 'auto' }}>
            <button
              type="button"
              className="btn btn-outline-white"
              onClick={onExploreServices}
              style={{
                padding: '0.85rem 1.65rem',
                fontSize: 'clamp(0.82rem, 2.5vw, 0.88rem)',
                whiteSpace: 'nowrap',
              }}
            >
              Explore All Services &amp; Rates →
            </button>
          </div>
        </div>

        {/* 2 Service Showcase Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '2rem',
          }}
        >
          {/* ── 1. Standard Clean ── */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: 'clamp(1.35rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
          >
            {/* Top Metadata Row: Non-colliding Flex Wrap */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(0, 166, 81, 0.2)',
                  border: '1px solid rgba(0, 166, 81, 0.4)',
                  color: '#6ee7b7',
                  whiteSpace: 'nowrap',
                }}
              >
                Regular Upkeep
              </span>
              
              <div
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(0.84rem, 2.2vw, 0.92rem)',
                  fontWeight: 700,
                  color: '#dfc074',
                  whiteSpace: 'nowrap',
                }}
              >
                From $224.25 <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>incl. GST</span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 1.8rem)',
                color: '#ffffff',
                marginBottom: '0.6rem',
                lineHeight: 1.2,
              }}
            >
              Standard Clean
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                color: 'rgba(255, 255, 255, 0.72)',
                lineHeight: 1.65,
                marginBottom: '1.35rem',
              }}
            >
              {domesticPricing.standardClean.description}
            </p>

            {/* Scope highlights */}
            <div style={{ marginBottom: '1.35rem', flex: 1 }}>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '0.75rem',
                }}
              >
                Core Scope Includes:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.55rem' }}>
                {[
                  'Kitchen benchtops, sink, stovetop & appliance exteriors',
                  'Bathrooms, showers, baths, toilets & tiles',
                  'Dusting of accessible surfaces & skirting boards',
                  'Floors vacuumed & mopped throughout',
                  'Interior window glass & sills',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: 'clamp(0.82rem, 2vw, 0.88rem)',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: '#00a651', fontWeight: 900, fontSize: '0.85rem', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recurring perk */}
            <div
              style={{
                padding: '0.85rem 1.15rem',
                background: 'rgba(0, 104, 55, 0.25)',
                border: '1px solid rgba(0, 166, 81, 0.2)',
                borderRadius: '14px',
                marginBottom: '1.5rem',
                fontSize: 'clamp(0.8rem, 2vw, 0.84rem)',
                color: '#6ee7b7',
                lineHeight: 1.5,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.55rem',
              }}
            >
              <span style={{ flexShrink: 0, marginTop: '0.1rem' }}>💡</span>
              <span><strong>Save 10%–15%</strong> with recurring weekly or fortnightly booking plans.</span>
            </div>

            <button
              type="button"
              className="btn btn-outline-white"
              onClick={onStandardCleanRates || onExploreServices}
              style={{ width: '100%', borderRadius: '14px', padding: '0.9rem 1rem', fontSize: 'clamp(0.82rem, 2.8vw, 0.92rem)' }}
            >
              View Standard Clean Rates →
            </button>
          </div>

          {/* ── 2. All-Inclusive Deep Clean ── */}
          <div
            style={{
              background: 'linear-gradient(180deg, rgba(201,168,76,0.08) 0%, rgba(0,40,24,0.6) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '28px',
              border: '1.5px solid rgba(201,168,76,0.35)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              padding: 'clamp(1.35rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
          >
            {/* Top Metadata Row: Non-colliding Flex Wrap */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #b07d12, #dfc074)',
                  color: '#1a0e00',
                  whiteSpace: 'nowrap',
                }}
              >
                ★ RECOMMENDED RESET
              </span>

              <div
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 'clamp(0.84rem, 2.2vw, 0.92rem)',
                  fontWeight: 700,
                  color: '#dfc074',
                  whiteSpace: 'nowrap',
                }}
              >
                From $345.00 <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>incl. GST</span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 1.8rem)',
                color: '#ffffff',
                marginBottom: '0.6rem',
                lineHeight: 1.2,
              }}
            >
              All-Inclusive Deep Clean
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.65,
                marginBottom: '1.35rem',
              }}
            >
              {domesticPricing.deepClean.description}
            </p>

            {/* Scope highlights */}
            <div style={{ marginBottom: '1.35rem', flex: 1 }}>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: '#dfc074',
                  marginBottom: '0.75rem',
                }}
              >
                Includes Everything in Standard Plus:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.55rem' }}>
                {[
                  '10 comprehensive room-by-room coverage categories',
                  'Full interior oven & interior fridge/freezer cleaning',
                  'Complete interior & exterior cabinet cleaning',
                  'Limescale & grout treatment in all bathrooms',
                  'All 10 standard add-on services bundled free of charge',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: 'clamp(0.82rem, 2vw, 0.88rem)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: '#dfc074', fontWeight: 900, fontSize: '0.85rem', flexShrink: 0, marginTop: '0.1rem' }}>★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reset perk */}
            <div
              style={{
                padding: '0.85rem 1.15rem',
                background: 'rgba(201, 168, 76, 0.12)',
                border: '1px solid rgba(201, 168, 76, 0.25)',
                borderRadius: '14px',
                marginBottom: '1.5rem',
                fontSize: 'clamp(0.8rem, 2vw, 0.84rem)',
                color: '#dfc074',
                lineHeight: 1.5,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.55rem',
              }}
            >
              <span style={{ flexShrink: 0, marginTop: '0.1rem' }}>✨</span>
              <span>Ideal for first-time bookings, post-renovation, and move-in/move-out resets.</span>
            </div>

            <button
              type="button"
              className="btn btn-gold"
              onClick={onDeepCleanRates || onExploreServices}
              style={{ width: '100%', borderRadius: '14px', padding: '0.9rem 1rem', fontSize: 'clamp(0.82rem, 2.8vw, 0.92rem)' }}
            >
              View Deep Clean Rates &amp; Checklists →
            </button>
          </div>
        </div>

        {/* Bottom context reassurance / rates disclaimer */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 'clamp(0.84rem, 2vw, 0.92rem)',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.65,
              maxWidth: '580px',
              margin: '0 auto',
            }}
          >
            All rates are indicative starting prices. Exact quotes are finalized during your complimentary on-site inspection.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DomesticServices;
