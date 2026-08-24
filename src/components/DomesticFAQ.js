import React, { useState } from 'react';

// ============================================================
// DomesticFAQ — Accessible accordion FAQ
// Questions grounded exclusively in confirmed project data.
// Polished interactive accordion with subtle open/close animation,
// clean separators, and keyboard accessibility.
// ============================================================

const faqs = [
  {
    q: 'How does the free inspection work?',
    a: 'A PureNest supervisor visits your property, walks through every area you want cleaned, photographs each room, and confirms the scope of work. This inspection is completely free and carries no obligation to proceed with any service.',
  },
  {
    q: 'Are the prices on the website final?',
    a: 'The rates shown on our website are indicative starting prices from our published rate card. Your fixed, written quote is issued after the on-site inspection and reflects your property\'s actual size, condition, and scope of work. There are no hidden extras — the written quote is the price you pay.',
  },
  {
    q: 'What is the difference between a Standard Clean and a Deep Clean?',
    a: 'A Standard Clean covers regular upkeep — kitchens, bathrooms, living areas, bedrooms, floors, and interior windows. A Deep Clean is a comprehensive, top-to-bottom service that includes oven interiors, fridge and freezer interiors, full cabinet interiors, limescale treatment in bathrooms, and all 10 standard add-on services at no extra charge. It is recommended for first-time bookings and full property resets.',
  },
  {
    q: 'Do you bring your own equipment and cleaning products?',
    a: 'Yes. All rates include professional cleaning labour, standard equipment, and commercial-grade cleaning chemicals. Any specialist requirements (such as carpet steam extraction) will be identified and quoted separately during the inspection if needed.',
  },
  {
    q: 'How quickly can I get an inspection appointment?',
    a: 'Our office aims to offer an inspection slot within 24–48 hours of receiving your enquiry, subject to availability.',
  },
  {
    q: 'What areas of New Zealand do you service?',
    a: 'PureNest is based in Auckland, New Zealand and services residential properties across the Auckland region. Our inspection request form includes all local districts.',
  },
  {
    q: 'What happens after I submit the inspection request?',
    a: 'Our team reviews your property details and contacts you to arrange a convenient inspection time. Following the inspection, a fixed written quote — including room photos — is emailed to you, normally within 24 hours. You approve the quote at your own pace.',
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const regionId = `faq-${question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 40)}`;

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(0, 104, 55, 0.08)',
        transition: 'background 0.2s ease',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={regionId}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.35rem 0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.25rem',
          cursor: 'pointer',
          textAlign: 'left',
          outline: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.02rem, 2vw, 1.15rem)',
            color: open ? '#006837' : '#002818',
            fontWeight: 700,
            lineHeight: 1.35,
            flex: 1,
            transition: 'color 0.2s ease',
          }}
        >
          {question}
        </span>

        {/* Toggle Indicator */}
        <div
          aria-hidden="true"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: open
              ? 'linear-gradient(135deg, #006837, #00a651)'
              : 'rgba(0,104,55,0.06)',
            border: `1px solid ${open ? 'transparent' : 'rgba(0,104,55,0.1)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.25s ease',
            color: open ? 'white' : '#006837',
            fontSize: '1.1rem',
            fontWeight: 700,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {open ? '−' : '+'}
        </div>
      </button>

      {/* Answer panel */}
      <div
        id={regionId}
        role="region"
        aria-labelledby={regionId}
        style={{
          maxHeight: open ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.94rem',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            padding: '0 0.5rem 1.35rem',
            margin: 0,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

const DomesticFAQ = () => {
  return (
    <section style={{ background: '#f8faf8', padding: 'clamp(4.5rem, 9vw, 6.5rem) 0' }}>
      <div className="container">

        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="label-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            FAQs
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#002818', marginBottom: '1rem' }}>
            Common questions, answered.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to know before booking your domestic cleaning inspection.
          </p>
        </div>

        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '24px',
            border: '1px solid rgba(0,104,55,0.08)',
            boxShadow: '0 12px 36px rgba(0,40,24,0.05)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DomesticFAQ;
