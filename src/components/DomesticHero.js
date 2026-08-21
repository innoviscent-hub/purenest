import React from 'react';

// ============================================================
// DomesticHero
// Homepage hero for the /domestic-cleaning route.
// Visual refinement: elevated typography, glowing brand depth,
// refined trust badges, and clear dual CTAs.
// ============================================================

const DomesticHero = ({ onBookInspection, onExploreServices }) => {
  return (
    <header
      className="hero-section"
      style={{
        minHeight: '84vh',
        background: 'linear-gradient(160deg, #001a0e 0%, #003020 45%, #004d2a 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--navbar-height, 90px) + clamp(3.5rem, 8vw, 6rem))',
        paddingBottom: 'clamp(3rem, 6vw, 4.5rem)',
        width: '100%',
      }}
    >
      {/* ── Decorative glowing orbs ── */}
      <div
        style={{
          position: 'absolute',
          top: '-12%',
          right: '-6%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(0,166,81,0.14) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-8%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* ── Subtle structural grid ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      {/* ── Bottom glow line ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,166,81,0.5) 30%, rgba(201,168,76,0.5) 70%, transparent 100%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>

          {/* Eyebrow badge */}
          <div style={{ marginBottom: '1.75rem' }}>
            <span
              className="label-badge label-badge-gold"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              <span style={{ fontSize: '0.85rem' }}>✨</span>
              PureNest Domestic Cleaning
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-in-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 6.5vw, 4.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            A cleaner home.{' '}
            <span style={{ color: '#dfc074' }}>A better way</span>{' '}
            to live.
          </h1>

          {/* Supporting copy */}
          <p
            className="fade-in-2"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 2vw, 1.22rem)',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              maxWidth: '620px',
              margin: '0 auto clamp(2rem, 4vw, 2.75rem)',
            }}
          >
            Professional residential cleaning tailored to your property, your standards, and your routine.
            Every service begins with a{' '}
            <strong style={{ color: '#ffffff', fontWeight: 600 }}>
              complimentary on-site inspection.
            </strong>
          </p>

          {/* Dual CTAs */}
          <div
            className="fade-in-3"
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              className="btn btn-gold hero-cta-btn"
              onClick={onBookInspection}
              style={{
                padding: '1.05rem clamp(1.4rem, 4vw, 2.2rem)',
                fontSize: 'clamp(0.85rem, 2.5vw, 0.96rem)',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 30px rgba(201,168,76,0.3)',
              }}
              aria-label="Book a free cleaning inspection"
            >
              Book an Inspection
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                style={{ flexShrink: 0 }}
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="btn btn-outline-white hero-cta-btn"
              onClick={onExploreServices}
              style={{
                padding: '1.05rem clamp(1.4rem, 4vw, 2.2rem)',
                fontSize: 'clamp(0.85rem, 2.5vw, 0.96rem)',
                whiteSpace: 'nowrap',
              }}
              aria-label="Explore domestic cleaning services and rates"
            >
              Explore Services &amp; Rates →
            </button>
          </div>

          {/* Trust strip */}
          <div
            className="fade-in-3"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(0.75rem, 2vw, 1.5rem)',
              justifyContent: 'center',
              marginTop: 'clamp(2.5rem, 5vw, 3.5rem)',
              padding: '0.85rem 1.5rem',
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.08)',
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {[
              'Free on-site inspection',
              'Fixed written quote',
              'NZ licensed & compliant',
              'Auckland-wide coverage',
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.75)',
                  letterSpacing: '0.4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span style={{ color: '#00a651', fontWeight: 900 }}>✓</span>
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
};

export default DomesticHero;
