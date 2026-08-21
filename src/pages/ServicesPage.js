import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import SEO from '../components/SEO';
import { allInclusiveDeepClean, services } from '../models/dataModel';
import custodialImg from '../assets/custodial.png';
import landscapingImg from '../assets/landscaping.png';
import pestImg from '../assets/pestcontrol.png';

const serviceImages = {
  cleaning: custodialImg,
  landscaping: landscapingImg,
  pest: pestImg,
};

const serviceColors = {
  cleaning: '#006837',
  landscaping: '#005228',
  pest: '#003d20',
};

const commercialServices = services.filter((service) => service.id !== 'deepclean');

const deepCleanCategoryIcons = ['🏠', '🪟', '🍳', '🚿', '🛏️', '🛋️', '🚪', '🧹', '✋', '✨'];

const deepCleanCategories = allInclusiveDeepClean.sections.map((section, index) => ({
  ...section,
  icon: deepCleanCategoryIcons[index] || '✓',
  count: section.items.length,
}));

const ServicesPage = () => {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const selectedSection =
    selectedSectionIndex === null ? null : deepCleanCategories[selectedSectionIndex];

  const closeSelectedSection = () => {
    setSelectedSectionIndex(null);
  };

  useEffect(() => {
    if (selectedSectionIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeSelectedSection();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;

      if (lastTriggerRef.current) {
        window.requestAnimationFrame(() => {
          lastTriggerRef.current?.focus({ preventScroll: true });
        });
      }
    };
  }, [selectedSectionIndex]);

  return (
    <div className="fade-in">
      <SEO
        title="Our Services"
        description="Comprehensive facility management and cleaning solutions tailored for commercial and institutional environments."
        path="/services"
      />

      <header className="hero-header">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span
            style={{
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
              marginBottom: '1.5rem',
            }}
          >
            What We Offer
          </span>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            Our Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive facility management solutions tailored for commercial and institutional environments.
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
          }}
        />
      </header>

      <section style={{ background: '#f8faf8', padding: '5rem 0' }}>
        <div className="container">
          {commercialServices.map((service, idx) => {
            const color = serviceColors[service.id] || '#006837';
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                className="service-row"
                style={{
                  marginBottom: idx < commercialServices.length - 1 ? '5rem' : 0,
                }}
              >
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      background: `linear-gradient(135deg, ${color}22, ${color}44)`,
                      border: `1.5px solid ${color}44`,
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {service.icon}
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      color: color,
                      marginBottom: '1rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ color: '#5a7060', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                    {service.shortDesc}
                  </p>

                  <div className="features-grid">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        style={{
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
                        }}
                      >
                        <span
                          style={{
                            color: color,
                            fontWeight: 900,
                            fontSize: '0.7rem',
                            marginTop: '2px',
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

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
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,28,14,0.4) 0%, transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      width: '44px',
                      height: '44px',
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      color: '#dfc074',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}

          <section id="deep-clean-rates" className="deep-clean-featured-panel" style={{ marginTop: '2.5rem' }}>
            <span className="label-badge label-badge-gold">FEATURED CLEANING SERVICE</span>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 3.4vw, 3rem)',
                color: '#002818',
                marginTop: '1rem',
              }}
            >
              {allInclusiveDeepClean.title}
            </h2>
            <p style={{ color: '#5a7060', fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '760px', marginTop: '0.9rem' }}>
              A comprehensive deep clean covering all standard accessible areas of your property.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <span className="label-badge">10 Coverage Areas</span>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                {allInclusiveDeepClean.subtitle}
              </span>
              <div className="deep-clean-category-grid">
                {deepCleanCategories.map((section, index) => (
                  <button
                    key={section.title}
                    type="button"
                    className="deep-clean-category-card"
                    onClick={(event) => {
                      lastTriggerRef.current = event.currentTarget;
                      setSelectedSectionIndex(index);
                    }}
                    aria-label={`View details for ${section.title}`}
                  >
                    <div className="deep-clean-category-icon" aria-hidden="true">
                      {section.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 className="deep-clean-category-title">{section.title}</h3>
                      <p className="deep-clean-category-count">{section.count} inclusions</p>
                    </div>
                    <span className="deep-clean-category-action" aria-hidden="true">
                      View details →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="deep-clean-conditions-grid">
              <div className="deep-clean-condition-card">
                <span className="label-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                  Service Conditions
                </span>
                <ul className="deep-clean-detail-list">
                  {allInclusiveDeepClean.serviceConditions.map((condition) => (
                    <li key={condition}>
                      <span aria-hidden="true">✓</span>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="deep-clean-condition-card deep-clean-condition-card--dark">
                <span className="label-badge label-badge-gold" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                  Additional Charges & Accessibility
                </span>
                <ul className="deep-clean-detail-list deep-clean-detail-list--light">
                  {allInclusiveDeepClean.additionalChargeConditions.map((condition) => (
                    <li key={condition}>
                      <span aria-hidden="true">✓</span>
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      {selectedSection && typeof document !== 'undefined'
        ? createPortal(
            <div className="deep-clean-modal-overlay" role="presentation" onMouseDown={closeSelectedSection}>
              <div
                className="deep-clean-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="deep-clean-modal-title"
                aria-describedby="deep-clean-modal-description"
                onMouseDown={(event) => event.stopPropagation()}
              >
                <div className="deep-clean-modal__header">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span className="label-badge label-badge-gold" style={{ marginBottom: '0.85rem', display: 'inline-flex' }}>
                      Coverage Area
                    </span>
                    <h3 id="deep-clean-modal-title">{selectedSection.title}</h3>
                    <p id="deep-clean-modal-description">{selectedSection.count} inclusions in this coverage area.</p>
                  </div>

                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="deep-clean-modal__close"
                    onClick={closeSelectedSection}
                    aria-label={`Close details for ${selectedSection.title}`}
                  >
                    Close
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div className="deep-clean-modal__body">
                  <ul className="deep-clean-detail-list deep-clean-detail-list--dialog">
                    {selectedSection.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedSection.note && <div className="deep-clean-detail-note">{selectedSection.note}</div>}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
};

export default ServicesPage;
