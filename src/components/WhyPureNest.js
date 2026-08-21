import React from 'react';

// ============================================================
// WhyPureNest — Differentiators & Trust Factors
// Asymmetric layout balancing high-emphasis pillars with
// compact supporting standards. Avoids repetitive dashboard boxes.
// ============================================================

const primaryReasons = [
  {
    icon: '🔍',
    title: 'On-Site Inspection First',
    highlight: 'Before we quote or clean',
    desc: 'A PureNest supervisor visits your property in person, maps out every room, and records photo documentation before any quote is issued. No guesswork.',
    badge: 'Standard SOP',
  },
  {
    icon: '📸',
    title: 'Photographic Handover',
    highlight: 'Delivered within 24 hours',
    desc: 'After-clean photos are captured from the exact same angles as your inspection photos. You review verifiable proof of work completed across every room.',
    badge: 'Accountability',
  },
];

const secondaryReasons = [
  {
    icon: '📋',
    title: 'Checklist-Driven Execution',
    desc: 'Every clean follows exhaustive room-by-room protocols with zero shortcuts.',
  },
  {
    icon: '💰',
    title: 'Guaranteed Written Rates',
    desc: 'Fixed quotes generated directly from our published rate card. What we quote is what you pay.',
  },
  {
    icon: '🛡️',
    title: 'NZ Licensed & Insured',
    desc: 'Operating in strict compliance with New Zealand workplace and chemical safety regulations.',
  },
  {
    icon: '🤝',
    title: 'Zero Obligation',
    desc: 'Your inspection and quote are 100% complimentary. You decide if and when to proceed.',
  },
];

const WhyPureNest = () => {
  return (
    <section style={{ background: '#f8faf8', padding: 'clamp(4.5rem, 9vw, 6.5rem) 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <span
            className="label-badge label-badge-gold"
            style={{ marginBottom: '1rem', display: 'inline-flex' }}
          >
            Why PureNest
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#002818', marginBottom: '1rem' }}>
            The standard your home deserves.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
            Every step — from pre-clean inspection to your final photo report — is designed to provide complete transparency and institutional-grade reliability.
          </p>
        </div>

        {/* Primary 2-Card Row (Featured Pillars) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {primaryReasons.map((r, i) => (
            <div
              key={r.title}
              style={{
                background: i === 0 ? 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' : 'linear-gradient(135deg, #ffffff 0%, #fdfbf3 100%)',
                borderRadius: '24px',
                border: `1px solid ${i === 0 ? 'rgba(0,104,55,0.15)' : 'rgba(201,168,76,0.25)'}`,
                boxShadow: '0 12px 36px rgba(0,40,24,0.06)',
                padding: 'clamp(1.75rem, 4vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: i === 0 ? 'rgba(0,104,55,0.1)' : 'rgba(201,168,76,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                  aria-hidden="true"
                >
                  {r.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                    background: i === 0 ? '#006837' : '#92660a',
                    color: 'white',
                  }}
                >
                  {r.badge}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  color: '#002818',
                  marginBottom: '0.35rem',
                  lineHeight: 1.25,
                }}
              >
                {r.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: i === 0 ? '#006837' : '#92660a',
                  marginBottom: '0.85rem',
                }}
              >
                {r.highlight}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.94rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary 4-Card Grid (Compact Supporting Standards) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {secondaryReasons.map((r) => (
            <div
              key={r.title}
              style={{
                background: 'white',
                borderRadius: '20px',
                border: '1px solid rgba(0,104,55,0.08)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#f8faf8',
                  border: '1px solid rgba(0,104,55,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {r.icon}
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#002818',
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {r.title}
              </h4>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyPureNest;
