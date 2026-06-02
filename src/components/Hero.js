import React from 'react';
import { useNavigate } from 'react-router-dom';
import { company } from '../models/dataModel';
import { handleNavClick } from '../controllers/appController';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section" style={{
      minHeight: '82vh',
      background: 'linear-gradient(160deg, #001a0e 0%, #003520 45%, #005228 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'calc(var(--navbar-height, 90px) + clamp(5.5rem, 12vw, 8rem))',
      paddingBottom: '2rem', 
      width: '100%',
      maxWidth: '100%',
    }}>

      {/* ── Decorative Orbs ── */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-8%',
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(0,166,81,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* ── Subtle Grid ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* ── Glowing border line ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,166,81,0.5) 30%, rgba(201,168,76,0.5) 70%, transparent 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>



          {/* ── Headline ── */}
          <h1 className="fade-in-2" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            marginBottom: '1.25rem',
          }}>
            {company.tagline.split(' ').map((word, i, arr) => {
              const highlighted = ['Excellence', 'Cleaning', 'Pristine', 'World‑Class', 'Premium', 'Facility'];
              return highlighted.includes(word)
                ? <span key={i} style={{ color: '#dfc074' }}>{word} </span>
                : <span key={i}>{word} </span>;
            })}
          </h1>

          {/* ── Subheadline ── */}
          <p className="fade-in-2" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.75,
            maxWidth: '640px',
            margin: '0 auto 1.5rem',
          }}>
            {company.subTagline}
          </p>

          {/* ── CTA Buttons ── */}
          <div className="fade-in-3" style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '0',
            flexWrap: 'wrap',
          }}>
            <button
              className="btn btn-gold"
              onClick={() => handleNavClick(navigate, '/services', null)}
            >
              Explore Services
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              className="btn btn-outline-white"
              onClick={() => handleNavClick(navigate, '/projects', null)}
            >
              Completed Projects
            </button>
          </div>



        </div>
      </div>

    </section>
  );
};

export default Hero;
