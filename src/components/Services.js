import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../models/dataModel';
import { handleNavClick } from '../controllers/appController';
import custodialImg from '../assets/custodial.png';
import landscapingImg from '../assets/landscaping.png';
import pestImg from '../assets/pestcontrol.png';

const serviceImages = {
  cleaning: custodialImg,
  deepclean: custodialImg,
  landscaping: landscapingImg,
  pest: pestImg
};

const serviceAccents = {
  cleaning:    { color: '#006837', light: '#f0fdf4', badge: 'Cleaning' },
  deepclean:   { color: '#0b6b44', light: '#ecfdf3', badge: 'Deep Clean' },
  landscaping: { color: '#005228', light: '#f0fdf4', badge: 'Landscaping' },
  pest:        { color: '#003d20', light: '#f0fdf4', badge: 'Pest Control' },
};

const Services = () => {
  const navigate = useNavigate();
  const deepCleanService = services.find((service) => service.id === 'deepclean');
  const homepageServices = [
    ...services.filter((service) => service.id !== 'deepclean'),
    deepCleanService,
  ].filter(Boolean);

  return (
    <section id="services" className="section-padding" style={{
      background: '#f8faf8',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,168,81,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header Row */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div className="fade-in" style={{ textAlign: 'left', maxWidth: '640px', margin: 0 }}>
            <span className="label-badge">What We Do</span>
            <div className="divider-gold divider-gold-left" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#002818', marginBottom: '1rem' }}>
              Specialized Facility Services
            </h2>
            <p style={{ color: '#5a7060', margin: 0 }}>
              World-class facility management tailored to the unique security and
              aesthetic requirements of commercial and institutional spaces across New Zealand.
            </p>
          </div>
          
          <button 
            className="btn btn-outline"
            onClick={() => handleNavClick(navigate, '/services', null)}
            style={{ 
              animation: 'fadeIn 1s ease-out both',
              padding: '0.7rem 1.5rem',
              fontSize: '0.8rem'
            }}
          >
            Explore All Services →
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid-3 services-grid-balanced">
          {homepageServices.map((service, index) => {
            const accent = serviceAccents[service.id] || { color: '#006837', light: '#f0fdf4', badge: service.title };
            return (
              <div
                key={service.id}
                className="fade-in"
                style={{
                  background: 'white',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,104,55,0.1)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: 'default',
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 70px rgba(0,40,24,0.18)';
                  e.currentTarget.style.borderColor = accent.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0,104,55,0.1)';
                }}
              >
                {/* Image */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={serviceImages[service.id]}
                    alt={service.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,28,14,0.6) 0%, transparent 60%)',
                  }} />
                  {/* Badge */}
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(0,0,0,0.45)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                    padding: '0.3rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                  }}>
                    {accent.badge}
                  </span>
                  {/* Icon chip */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '1.75rem',
                    fontSize: '1.8rem',
                    width: '52px', height: '52px',
                    background: 'white',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,40,24,0.15)',
                    border: '2px solid rgba(0,104,55,0.1)',
                    zIndex: 2,
                  }}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '3rem 1.75rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    color: accent.color,
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#5a7060', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {service.shortDesc}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '0', flex: 1 }}>
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        borderBottom: i === 3 ? 'none' : '1px solid rgba(0,104,55,0.06)',
                        fontSize: '0.9rem',
                        color: '#2d4a37',
                      }}>
                        <span style={{
                          flexShrink: 0,
                          width: '18px', height: '18px',
                          borderRadius: '50%',
                          background: accent.light,
                          border: `1.5px solid ${accent.color}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.6rem',
                          color: accent.color,
                          fontWeight: 900,
                          marginTop: '2px',
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
