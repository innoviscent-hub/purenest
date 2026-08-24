import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleNavClick } from '../controllers/appController';

// ============================================================
// DomesticHowItWorks — 4-Step Journey Preview on Home
// Visual journey (01 → 02 → 03 → 04) showing a clear progression.
// Full 7-step operational detail lives on Services.
// ============================================================

const steps = [
  {
    num: '01',
    icon: '📝',
    title: 'Submit Enquiry',
    desc: 'Share your property size and preferred times. We reach out within 24–48 hours.',
  },
  {
    num: '02',
    icon: '🏠',
    title: 'Free On-Site Inspection',
    desc: 'A supervisor walks through your home, confirms the scope, and photographs each room.',
  },
  {
    num: '03',
    icon: '📋',
    title: 'Fixed Written Quote',
    desc: 'You receive a clear, fixed quote based on our rate card within 24 hours. No obligation.',
  },
  {
    num: '04',
    icon: '✨',
    title: 'Clean & Photo Handover',
    desc: 'Our team executes the checklist. After-photos and satisfaction sign-off delivered within 24h.',
  },
];

const DomesticHowItWorks = ({ onViewFullProcess }) => {
  return (
    <section style={{ background: '#ffffff', padding: 'clamp(3.5rem, 7vw, 5.5rem) 0' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center' }}>
          <span
            className="label-badge"
            style={{ marginBottom: '0.85rem', display: 'inline-flex' }}
          >
            The Process
          </span>
          <h2 style={{ fontSize: 'clamp(1.85rem, 4vw, 3rem)', color: '#002818', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            A structured path to a pristine home.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.92rem, 2vw, 1.05rem)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
            From your first enquiry to photographic sign-off — here's how we deliver consistent quality.
          </p>
        </div>

        {/* 4-Step Visual Journey Stepper */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
            marginBottom: '3rem',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.num}
              style={{
                background: '#f8faf8',
                borderRadius: '24px',
                border: '1px solid rgba(0,104,55,0.08)',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Step indicator header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(0,104,55,0.12), rgba(201,168,76,0.1))',
                    border: '1px solid rgba(0,104,55,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                  }}
                  aria-hidden="true"
                >
                  {step.icon}
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: '#006837',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#002818',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                {step.title}
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
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stepper Footer Reassurance & Link */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            padding: '1.25rem 2rem',
            background: '#f0fdf4',
            borderRadius: '20px',
            border: '1px solid rgba(0, 104, 55, 0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.25rem' }}>ℹ️</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: '#003d20', fontWeight: 600 }}>
              Want to see all 7 steps of our complete operational SOP?
            </span>
          </div>

          <button
            type="button"
            className="btn btn-outline"
            onClick={onViewFullProcess}
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
          >
            View Full 7-Step Process →
          </button>
        </div>

      </div>
    </section>
  );
};

const DomesticHowItWorksWrapper = (props) => {
  const navigate = useNavigate();
  const handleViewFull = props.onViewFullProcess || (() => {
    handleNavClick(navigate, '/domestic-cleaning/services#how-it-works', null);
  });
  return <DomesticHowItWorks {...props} onViewFullProcess={handleViewFull} />;
};

export default DomesticHowItWorksWrapper;
