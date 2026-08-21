import React from 'react';

// ============================================================
// DomesticInspectionCTA — Mid-page inspection call to action
// Navigates to the #inspection anchor which hosts the
// DomesticInspectionForm (the form itself is not modified).
// ============================================================

const DomesticInspectionCTA = ({ onBook }) => {
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
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      {/* Subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span
          className="label-badge label-badge-gold"
          style={{ marginBottom: '1.5rem', display: 'inline-flex' }}
        >
          Free Inspection
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Let's understand your home first.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.75,
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}
        >
          A PureNest supervisor will visit your property, assess the scope, and provide a
          fixed written quote — at no cost and with no obligation to proceed.
        </p>

        <button
          className="btn btn-gold"
          onClick={onBook}
          style={{ padding: '1.1rem 2.5rem', fontSize: '1rem', letterSpacing: '0.03em' }}
          aria-label="Start your free cleaning inspection"
        >
          Start Your Inspection →
        </button>

        <p
          style={{
            marginTop: '1.25rem',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Complimentary inspection · Written quote within 24 hours · No obligation
        </p>
      </div>
    </section>
  );
};

export default DomesticInspectionCTA;
