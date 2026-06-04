import React from 'react';
import SEO from '../components/SEO';
import { services } from '../models/dataModel';
import custodialImg from '../assets/custodial.png';
import landscapingImg from '../assets/landscaping.png';
import pestImg from '../assets/pestcontrol.png';

const serviceImages = {
  cleaning: custodialImg,
  landscaping: landscapingImg,
  pest: pestImg
};

const serviceColors = {
  cleaning:    '#006837',
  landscaping: '#005228',
  pest:        '#003d20',
};

const ServicesPage = () => {
  return (
    <div className="fade-in">
      <SEO 
        title="Our Services" 
        description="Comprehensive facility management and cleaning solutions tailored for commercial and institutional environments." 
        path="/services" 
      />

      {/* Hero Header */}
      <header className="hero-header">
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'absolute', top: '-150px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />
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
          }}>
            What We Offer
          </span>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            Our Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive facility management solutions tailored for commercial and institutional environments.
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
      </header>

      {/* Services Detail */}
      <section style={{ background: '#f8faf8', padding: '5rem 0' }}>
        <div className="container">
          {services.map((service, idx) => {
            const color = serviceColors[service.id] || '#006837';
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className="service-row"
                style={{
                  marginBottom: idx < services.length - 1 ? '5rem' : 0,
                }}
              >
                {/* Text — alternating order on desktop, bottom on mobile */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  {/* Icon */}
                  <div style={{
                    width: '64px', height: '64px',
                    background: `linear-gradient(135deg, ${color}22, ${color}44)`,
                    border: `1.5px solid ${color}44`,
                    borderRadius: '18px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.8rem',
                    marginBottom: '1.5rem',
                  }}>
                    {service.icon}
                  </div>

                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    color: color,
                    marginBottom: '1rem',
                    lineHeight: 1.15,
                  }}>
                    {service.title}
                  </h2>
                  <p style={{ color: '#5a7060', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                    {service.shortDesc}
                  </p>

                  {/* Features grid */}
                  <div className="features-grid">
                    {service.features.map((feature, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        padding: '0.6rem 0.75rem',
                        background: 'white',
                        borderRadius: '10px',
                        border: '1px solid rgba(0,104,55,0.08)',
                        fontSize: '0.85rem',
                        color: '#2d4a37',
                        lineHeight: 1.4,
                      }}>
                        <span style={{
                          color: color,
                          fontWeight: 900,
                          fontSize: '0.7rem',
                          marginTop: '2px',
                          flexShrink: 0,
                        }}>✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>


                </div>

                {/* Image — alternating order on desktop, top on mobile */}
                <div 
                  className="service-image-container"
                  style={{
                    order: isEven ? 2 : 1,
                  }}
                >
                  <img
                    src={serviceImages[service.id]}
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,28,14,0.4) 0%, transparent 60%)',
                  }} />
                  {/* Number badge */}
                  <div style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    width: '44px', height: '44px',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: '#dfc074',
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
