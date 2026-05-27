import React from 'react';
import { testimonials } from '../models/dataModel';

const Testimonials = () => {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #001a0e 0%, #002d18 50%, #001a0e 100%)',
      padding: '7rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,166,81,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
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
            ★ Client Testimonials
          </span>
          <div style={{ width: '50px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #dfc074)', borderRadius: '9999px', margin: '1rem auto 1.25rem' }} />
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            color: 'white',
            marginBottom: '0.75rem',
          }}>
            Commitment to Excellence
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
            Trusted by corporate, institutional, and high-end clients across Auckland.
          </p>
        </div>

        {/* Cards */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-in"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '28px',
                padding: '2.5rem',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Large quote mark */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '2rem',
                fontFamily: 'Playfair Display, serif',
                fontSize: '5rem',
                lineHeight: 1,
                color: 'rgba(201,168,76,0.15)',
                fontWeight: 700,
                userSelect: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ marginBottom: '1.25rem', display: 'flex', gap: '3px' }}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} style={{ color: '#dfc074', fontSize: '0.85rem' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.98rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}>
                {/* Avatar */}
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #006837, #00a651)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'white',
                  flexShrink: 0,
                  border: '2px solid rgba(201,168,76,0.3)',
                }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'white',
                  }}>
                    {t.author}
                  </div>
                  <div style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '0.78rem',
                    color: '#dfc074',
                    marginTop: '2px',
                  }}>
                    {t.client}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
