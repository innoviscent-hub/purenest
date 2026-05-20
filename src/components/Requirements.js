import React from 'react';
import { requirements } from '../models/dataModel';

const Requirements = () => {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(160deg, #001a0e 0%, #002d18 100%)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, #c9a84c 40%, #006837 80%, transparent 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="section-header fade-in" style={{ marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 1.2rem',
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#dfc074',
            borderRadius: '9999px',
            fontSize: '0.7rem',
            fontFamily: 'Sora, sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            Our Standards
          </span>
          <div style={{ width: '50px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #dfc074)', borderRadius: '9999px', margin: '1rem auto 1.25rem' }} />
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: 'white',
            marginBottom: '0.75rem',
          }}>
            Compliance &amp; Standards
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
            We maintain full legal compliance with New Zealand authorities and follow strict institutional security protocols.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {requirements.map((req, idx) => (
            <div
              key={idx}
              className="fade-in"
              style={{
                flex: '0 1 340px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '2.25rem',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'default',
                animationDelay: `${idx * 0.08}s`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '58px',
                height: '58px',
                background: 'linear-gradient(135deg, rgba(0,104,55,0.3), rgba(0,166,81,0.2))',
                border: '1px solid rgba(0,168,81,0.25)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
              }}>
                {req.icon}
              </div>

              <h4 style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>
                {req.title}
              </h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {req.desc}
              </p>

              {/* Bottom accent */}
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: '#00a651',
                  boxShadow: '0 0 8px rgba(0,166,81,0.6)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '0.7rem',
                  color: '#6ee7b7',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                }}>
                  Verified &amp; Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
