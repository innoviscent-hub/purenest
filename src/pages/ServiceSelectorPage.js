import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import SEO from '../components/SEO';

const ServiceSelectorPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #001a0e 0%, #002d18 50%, #004020 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <SEO
        title="Choose Your Service"
        description="PureNest offers professional Commercial Cleaning and Domestic Cleaning services across New Zealand. Select your service to get started."
        path="/"
      />

      {/* Decorative background elements */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0,166,81,0.1) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-12%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
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

      {/* Top border accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #006837, #c9a84c, #006837, transparent)',
        }}
      />

      {/* Logo / header */}
      <header
        style={{
          padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 5vw, 3rem)',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Logo light={true} height={48} />
      </header>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(2rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2.5rem)',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        {/* Eyebrow badge */}
        <span
          className="label-badge label-badge-gold"
          style={{ marginBottom: '1.75rem', animation: 'fadeIn 0.6s ease-out' }}
        >
          Welcome to PureNest
        </span>

        {/* Headline */}
        <h1
          className="fade-in-2"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            maxWidth: '800px',
          }}
        >
          Precision Cleaning.{' '}
          <span style={{ color: '#dfc074' }}>Pristine Spaces.</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="fade-in-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.75,
            maxWidth: '560px',
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
          }}
        >
          New Zealand&apos;s trusted cleaning specialists.
          <br />
          Select your service to get started.
        </p>

        {/* Service selector cards */}
        <div
          className="fade-in-3"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 3vw, 1.75rem)',
            width: '100%',
            maxWidth: '820px',
          }}
        >
          {/* Commercial Cleaning Card */}
          <button
            onClick={() => {
              sessionStorage.setItem('serviceContext', 'commercial');
              navigate('/commercial');
            }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 2.75rem) clamp(1.5rem, 4vw, 2.5rem)',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,104,55,0.18)';
              e.currentTarget.style.borderColor = 'rgba(0,166,81,0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,40,24,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            aria-label="Commercial Cleaning — explore our commercial facility management services"
          >
            {/* Subtle card glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #006837, #00a651)',
                borderRadius: '28px 28px 0 0',
              }}
            />

            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, rgba(0,104,55,0.25), rgba(0,166,81,0.15))',
                border: '1px solid rgba(0,166,81,0.25)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
              }}
            >
              🏢
            </div>

            <span
              style={{
                display: 'block',
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#00a651',
                marginBottom: '0.6rem',
              }}
            >
              Facilities &amp; Institutions
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              Commercial Cleaning
            </h2>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              Custodial services, landscaping and pest control for offices, schools,
              hotels and institutional facilities across New Zealand.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(0,104,55,0.2)',
                border: '1px solid rgba(0,166,81,0.3)',
                borderRadius: '9999px',
                color: '#00d468',
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Explore Commercial Services
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Domestic Cleaning Card */}
          <button
            onClick={() => {
              sessionStorage.setItem('serviceContext', 'domestic');
              navigate('/domestic-cleaning');
            }}
            style={{
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 2.75rem) clamp(1.5rem, 4vw, 2.5rem)',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.12)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,40,24,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.04)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            aria-label="Domestic Cleaning — residential cleaning and inspection services"
          >
            {/* Gold card accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #b07d12, #dfc074)',
                borderRadius: '28px 28px 0 0',
              }}
            />

            <div
              style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.22), rgba(223,192,116,0.12))',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
              }}
            >
              🏠
            </div>

            <span
              style={{
                display: 'block',
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#dfc074',
                marginBottom: '0.6rem',
              }}
            >
              Residential
            </span>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.01em',
              }}
            >
              Domestic Cleaning
            </h2>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
              }}
            >
              Standard Clean and All-Inclusive Deep Clean for homes and apartments.
              Starts with a free, no-obligation on-site inspection.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #b07d12, #c9a84c)',
                borderRadius: '9999px',
                color: '#1a0e00',
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.02em',
                boxShadow: '0 8px 24px rgba(201,168,76,0.25)',
              }}
            >
              Explore Domestic Services
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Trust strip */}
        <div
          className="fade-in-3"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.75rem, 2vw, 1.5rem)',
            justifyContent: 'center',
            marginTop: 'clamp(2.5rem, 6vw, 4rem)',
          }}
        >
          {['✓ NZ Licensed', '✓ Compliance Certified', '✓ 10+ Years Experience', '✓ Free Inspection'].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.5px',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </main>

      {/* Footer strip */}
      <footer
        style={{
          padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 5vw, 3rem)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <p
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          &copy; {new Date().getFullYear()} PureNest Facility Services. Auckland, New Zealand.
        </p>
      </footer>
    </div>
  );
};

export default ServiceSelectorPage;