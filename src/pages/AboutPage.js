import React from 'react';
import { company, stats } from '../models/dataModel';

const AboutPage = () => {
  return (
    <div className="fade-in">

      {/* Hero */}
      <header className="hero-header">
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'absolute', top: '-150px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,166,81,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
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
            marginBottom: '1.5rem',
            display: 'inline-flex',
          }}>
            Est. {company.founded}
          </span>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            About PureNest
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: '580px', margin: '0 auto' }}>
            Precision facility management with a legacy of excellence in New Zealand.
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section style={{ padding: '4.5rem 0', background: '#f8faf8' }}>
        <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <span className="label-badge" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Our Story</span>
              <div className="divider-gold" style={{ margin: '1rem auto 1.75rem' }} />
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: '#002818',
                marginBottom: '1.75rem',
                lineHeight: 1.3,
              }}>
                Auckland's Premier<br />
                <span style={{ color: '#006837' }}>Institutional Partner</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#5a7060', lineHeight: 1.7, marginBottom: '1rem' }}>
                Founded in {company.founded}, PureNest has grown from a local cleaning service to Auckland's premier facility management partner for corporate and institutional clients. We understand that prestigious grounds are more than just buildings — they are environments that require the highest level of care, security, and aesthetic perfection.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#5a7060', lineHeight: 1.6 }}>
                Our team of <strong style={{ color: '#002818' }}>{company.staffCount} professionals</strong> is certified, vetted, and trained in specialized protocols ranging from chandelier restoration to high-security perimeter landscaping.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['NZ Licensed', 'Compliance Certified', 'ISO Compliant', 'Security Vetted'].map((badge, i) => (
                  <span key={i} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.45rem 1rem',
                    background: '#f0fdf4',
                    border: '1px solid rgba(0,104,55,0.2)',
                    color: '#006837',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                  }}>
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Grid — Restored with 3 columns */}
            <div style={{ marginTop: '5rem' }}>
              <div className="grid-3">
                {stats.map((stat, i) => (
                  <div key={i} className="glass" style={{
                    padding: '2.5rem 2rem',
                    borderRadius: '24px',
                    textAlign: 'center',
                    border: '1px solid rgba(0,104,55,0.08)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'var(--transition)',
                  }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                      e.currentTarget.style.borderColor = 'rgba(0,104,55,0.08)';
                    }}
                  >
                    <div style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '3rem',
                      fontWeight: 800,
                      color: '#002818',
                      marginBottom: '0.5rem',
                      lineHeight: 1,
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontFamily: 'Sora, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: '#c9a84c',
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
