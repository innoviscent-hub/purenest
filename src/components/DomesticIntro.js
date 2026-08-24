import React from 'react';

// ============================================================
// DomesticIntro — Value proposition & service philosophy
// Editorial split-composition replacing heavy boxed cards with
// sophisticated typography, whitespace, and clear hierarchy.
// ============================================================

const features = [
  {
    icon: '🏠',
    title: 'Every home is different',
    desc: 'Before we clean a single surface, a supervisor visits your property, walks through every area, and photographs each room to confirm exact scope.',
  },
  {
    icon: '📋',
    title: 'Checklist-driven quality',
    desc: 'Our teams follow structured room-by-room checklists across every area of your home — the same uncompromising standard applied every time.',
  },
  {
    icon: '💬',
    title: 'Transparent written pricing',
    desc: 'You receive a fixed written quote from our current rate card after the inspection. No surprise charges, no ambiguous estimates.',
  },
  {
    icon: '📸',
    title: 'Before & after documentation',
    desc: 'Post-clean photos are taken from the exact same angles as the before set and delivered within 24 hours so you can inspect the results.',
  },
];

const DomesticIntro = () => {
  return (
    <section style={{ background: '#ffffff', padding: 'clamp(4.5rem, 9vw, 6.5rem) 0' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Statement */}
          <div>
            <span
              className="label-badge"
              style={{ marginBottom: '1.25rem', display: 'inline-flex' }}
            >
              Our Philosophy
            </span>
            <div className="divider-gold divider-gold-left" style={{ margin: '0 0 1.5rem 0' }} />
            
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: '#002818',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Your home deserves more than a quick surface clean.
            </h2>
            
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
              }}
            >
              We bring the precision and accountability of commercial facility management to residential care. We take the time to assess your space in detail before we begin — ensuring what we deliver matches your property, your standards, and your lifestyle.
            </p>

            <div
              style={{
                padding: '1.25rem 1.5rem',
                background: '#f0fdf4',
                borderLeft: '4px solid #006837',
                borderRadius: '0 16px 16px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#003d20',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                "Every clean is verified against a strict photographic record — ensuring consistent, high-standard results every visit."
              </p>
            </div>
          </div>

          {/* Right Column: 4 Supporting Value Points in Clean Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {features.map((item, idx) => (
              <div
                key={item.title}
                style={{
                  padding: '1.5rem',
                  background: '#f8faf8',
                  borderRadius: '20px',
                  border: '1px solid rgba(0,104,55,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: idx % 2 === 0
                      ? 'linear-gradient(135deg, rgba(0,104,55,0.12), rgba(0,166,81,0.06))'
                      : 'linear-gradient(135deg, rgba(201,168,76,0.14), rgba(223,192,116,0.07))',
                    border: '1px solid rgba(0,104,55,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#002818',
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomesticIntro;
