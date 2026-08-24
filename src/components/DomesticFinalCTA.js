import React from 'react';

// ============================================================
// DomesticFinalCTA — Closing conversion section before Footer
// Navigates to the #inspection anchor via the onBook callback.
// ============================================================

const DomesticFinalCTA = ({ onBook }) => {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #001a0e 0%, #003520 60%, #005228 100%)',
        padding: 'clamp(4rem, 10vw, 6rem) 0',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Decorative orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0,166,81,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-8%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span
          className="label-badge label-badge-gold"
          style={{ marginBottom: '1.5rem', display: 'inline-flex' }}
        >
          Get Started Today
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Ready for a cleaner home?
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.75,
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
          }}
        >
          Request your free cleaning inspection today. No commitment required.
        </p>

        <button
          className="btn btn-gold"
          onClick={onBook}
          style={{ padding: '1.1rem 2.5rem', fontSize: '1rem', letterSpacing: '0.03em' }}
          aria-label="Book your free cleaning inspection"
        >
          Book Your Inspection →
        </button>

        <p
          style={{
            marginTop: '1.25rem',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Complimentary inspection · No obligation
        </p>
      </div>
    </section>
  );
};

export default DomesticFinalCTA;
