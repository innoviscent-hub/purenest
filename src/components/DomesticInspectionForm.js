import React, { useState } from 'react';

// ============================================================
// DomesticInspectionForm
// Independent form for domestic cleaning inspection enquiries.
// Submits to Netlify Forms as "domestic-inspection".
// Does NOT use or modify the existing "contact" form.
// ============================================================

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const validateDomesticForm = (fields) => {
  const errors = {};
  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.phone || fields.phone.trim().length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!fields.propertySize) {
    errors.propertySize = 'Please select your property size.';
  }
  if (!fields.propertyAddress || fields.propertyAddress.trim().length < 5) {
    errors.propertyAddress = 'Please enter your property address.';
  }
  if (!fields.cleaningRequirement) {
    errors.cleaningRequirement = 'Please select a cleaning type.';
  }
  if (!fields.preferredDate) {
    errors.preferredDate = 'Please select a preferred inspection date.';
  }
  if (!fields.preferredTime) {
    errors.preferredTime = 'Please select a preferred time window.';
  }
  return errors;
};

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '0.95rem 1.2rem',
  borderRadius: '14px',
  border: `1.5px solid ${hasError ? '#ef4444' : 'rgba(0,104,55,0.12)'}`,
  background: '#f8faf8',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.95rem',
  color: '#002818',
  outline: 'none',
  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  boxSizing: 'border-box',
});

const labelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  marginBottom: '0.55rem',
  fontFamily: 'Sora, sans-serif',
  fontWeight: 700,
  fontSize: '0.78rem',
  color: '#002818',
  textTransform: 'uppercase',
  letterSpacing: '0.6px',
};

const errorStyle = {
  color: '#ef4444',
  fontSize: '0.8rem',
  marginTop: '0.4rem',
  display: 'block',
  fontWeight: 500,
};

const sectionTitleStyle = {
  fontFamily: 'Playfair Display, serif',
  fontSize: '1.15rem',
  color: '#002818',
  fontWeight: 700,
  marginBottom: '1.25rem',
  paddingBottom: '0.6rem',
  borderBottom: '1px solid rgba(0,104,55,0.08)',
};

const PROPERTY_SIZES = [
  'Studio Apartment',
  '1 Bedroom Apartment / House',
  '2 Bedroom Apartment / House',
  '3 Bedroom Apartment / House',
  '4 Bedroom Apartment / House',
  '5 Bedroom Apartment / House',
  '6 Bedroom Apartment / House',
];

const PROPERTY_TYPES = [
  'Apartment',
  'Townhouse',
  'House',
  'Unit',
  'Other',
];

const CLEANING_OPTIONS = [
  { value: 'Standard Clean', label: 'Standard Clean', desc: 'Regular upkeep — kitchens, bathrooms, floors, living areas.' },
  { value: 'Deep Clean', label: 'Deep Clean', desc: 'Top-to-bottom, all-inclusive — recommended for first-time bookings.' },
  { value: 'Not Sure', label: 'Not Sure', desc: 'Our supervisor will advise the best option during inspection.' },
];

const TIME_OPTIONS = [
  { value: 'Morning (8am–12pm)', label: 'Morning (8am – 12pm)' },
  { value: 'Afternoon (12pm–5pm)', label: 'Afternoon (12pm – 5pm)' },
  { value: 'Flexible', label: 'Flexible — any time suits' },
];

const EMPTY_FIELDS = {
  name: '',
  email: '',
  phone: '',
  propertyType: '',
  propertySize: '',
  propertyAddress: '',
  cleaningRequirement: '',
  preferredDate: '',
  preferredTime: '',
  additionalNotes: '',
  enquiryType: 'Domestic Cleaning Inspection',
};

const DomesticInspectionForm = ({ prefillService = '' }) => {
  const [fields, setFields] = useState({
    ...EMPTY_FIELDS,
    cleaningRequirement: prefillService || '',
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const focusStyle = (field) =>
    focused === field
      ? { borderColor: '#006837', background: 'white', boxShadow: '0 6px 16px rgba(0,104,55,0.08)' }
      : {};

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateDomesticForm(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus the first error field
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.querySelector(`[name="${firstErrorKey}"]`);
      if (el) el.focus({ preventScroll: true });
      return;
    }
    setErrors({});
    setIsLoading(true);
    setSubmitError('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'domestic-inspection',
          'bot-field': '',
          ...fields,
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed (Status ${response.status}). Please try again.`);
      }

      setSubmitted(true);
      setFields({ ...EMPTY_FIELDS });
    } catch (error) {
      console.error('Domestic inspection form submission error:', error);
      setSubmitError(
        error.message || 'Something went wrong. Please check your connection and try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: 'center',
          background: 'white',
          borderRadius: '28px',
          padding: 'clamp(2.5rem, 8vw, 4rem) clamp(1.5rem, 5vw, 3rem)',
          border: '1px solid rgba(0,104,55,0.1)',
          boxShadow: '0 20px 60px rgba(0,40,24,0.1)',
        }}
      >
        <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>✨</div>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#002818',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '1rem',
          }}
        >
          Inspection request received
        </h3>
        <p style={{ color: '#5a7060', fontSize: '1rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 2rem' }}>
          Thank you for contacting PureNest. We&apos;ve received your domestic cleaning inspection request.
          Our team will review your details and contact you to arrange a suitable inspection time.
        </p>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.85rem 1.5rem',
            background: '#f0fdf4',
            border: '1px solid rgba(0,104,55,0.15)',
            borderRadius: '12px',
            color: '#006837',
            fontFamily: 'Sora, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '2rem',
          }}
        >
          <span>📅</span>
          We aim to offer an inspection slot within 24–48 hours
        </div>
        <div>
          <button
            className="btn btn-outline"
            style={{ padding: '0.85rem 2rem' }}
            onClick={() => setSubmitted(false)}
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      name="domestic-inspection"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
      style={{
        background: 'white',
        borderRadius: 'clamp(16px, 4vw, 28px)',
        padding: 'clamp(1.5rem, 5vw, 2.75rem)',
        border: '1px solid rgba(0,104,55,0.08)',
        boxShadow: '0 24px 64px rgba(0,40,24,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #006837, #c9a84c, #006837)',
        }}
      />

      {/* Hidden Netlify fields */}
      <input type="hidden" name="form-name" value="domestic-inspection" />
      <input type="hidden" name="enquiryType" value="Domestic Cleaning Inspection" />
      <p hidden><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

      {/* Form header */}
      <div style={{ marginBottom: '2rem' }}>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.5rem, 3vw, 1.85rem)',
            color: '#002818',
            marginBottom: '0.4rem',
          }}
        >
          Request a Free Inspection
        </h3>
        <p style={{ fontSize: '0.92rem', color: '#5a7060', lineHeight: 1.65 }}>
          Complete the form below and our team will contact you to arrange a complimentary on-site inspection.
        </p>
      </div>

      {/* ── Section: Your Details ── */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={sectionTitleStyle}>Your Details</p>

        {/* Full Name */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label htmlFor="di-name" style={labelStyle}>
            Full Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="di-name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused('')}
            placeholder="Jane Smith"
            autoComplete="name"
            style={{ ...inputStyle(errors.name), ...focusStyle('name') }}
            aria-describedby={errors.name ? 'di-name-error' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span id="di-name-error" style={errorStyle}>{errors.name}</span>}
        </div>

        {/* Email + Phone side by side on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <div>
            <label htmlFor="di-email" style={labelStyle}>
              Email Address <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              id="di-email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
              placeholder="jane@example.co.nz"
              autoComplete="email"
              style={{ ...inputStyle(errors.email), ...focusStyle('email') }}
              aria-describedby={errors.email ? 'di-email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span id="di-email-error" style={errorStyle}>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="di-phone" style={labelStyle}>
              Phone Number <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              id="di-phone"
              type="tel"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
              placeholder="+64 21 123 4567"
              autoComplete="tel"
              style={{ ...inputStyle(errors.phone), ...focusStyle('phone') }}
              aria-describedby={errors.phone ? 'di-phone-error' : undefined}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <span id="di-phone-error" style={errorStyle}>{errors.phone}</span>}
          </div>
        </div>
      </div>

      {/* ── Section: Your Property ── */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={sectionTitleStyle}>Your Property</p>

        {/* Property Type + Property Size side by side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1.25rem',
          }}
        >
          <div>
            <label htmlFor="di-propertyType" style={labelStyle}>
              Property Type
            </label>
            <select
              id="di-propertyType"
              name="propertyType"
              value={fields.propertyType}
              onChange={handleChange}
              onFocus={() => setFocused('propertyType')}
              onBlur={() => setFocused('')}
              style={{
                ...inputStyle(false),
                ...focusStyle('propertyType'),
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23006837' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
                cursor: 'pointer',
              }}
            >
              <option value="">Select type (optional)</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="di-propertySize" style={labelStyle}>
              Property Size <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <select
              id="di-propertySize"
              name="propertySize"
              value={fields.propertySize}
              onChange={handleChange}
              onFocus={() => setFocused('propertySize')}
              onBlur={() => setFocused('')}
              style={{
                ...inputStyle(errors.propertySize),
                ...focusStyle('propertySize'),
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23006837' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
                cursor: 'pointer',
              }}
              aria-describedby={errors.propertySize ? 'di-propertySize-error' : undefined}
              aria-invalid={!!errors.propertySize}
            >
              <option value="">Select size</option>
              {PROPERTY_SIZES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.propertySize && (
              <span id="di-propertySize-error" style={errorStyle}>{errors.propertySize}</span>
            )}
          </div>
        </div>

        {/* Property Address */}
        <div>
          <label htmlFor="di-propertyAddress" style={labelStyle}>
            Property Address <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="di-propertyAddress"
            type="text"
            name="propertyAddress"
            value={fields.propertyAddress}
            onChange={handleChange}
            onFocus={() => setFocused('propertyAddress')}
            onBlur={() => setFocused('')}
            placeholder="123 Example Street, Auckland"
            autoComplete="street-address"
            style={{ ...inputStyle(errors.propertyAddress), ...focusStyle('propertyAddress') }}
            aria-describedby={errors.propertyAddress ? 'di-propertyAddress-error' : undefined}
            aria-invalid={!!errors.propertyAddress}
          />
          {errors.propertyAddress && (
            <span id="di-propertyAddress-error" style={errorStyle}>{errors.propertyAddress}</span>
          )}
        </div>
      </div>

      {/* ── Section: Cleaning Requirement ── */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={sectionTitleStyle}>
          Cleaning Requirement <span style={{ color: '#ef4444', fontSize: '0.9em' }}>*</span>
        </p>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}
          role="group"
          aria-labelledby="cleaning-req-label"
        >
          {CLEANING_OPTIONS.map((opt) => {
            const checked = fields.cleaningRequirement === opt.value;
            return (
              <label
                key={opt.value}
                htmlFor={`di-cleaning-${opt.value.replace(/\s/g, '-')}`}
                style={{
                  display: 'block',
                  padding: '1rem 1.1rem',
                  borderRadius: '14px',
                  border: `1.5px solid ${
                    errors.cleaningRequirement
                      ? '#ef4444'
                      : checked
                      ? '#006837'
                      : 'rgba(0,104,55,0.12)'
                  }`,
                  background: checked ? '#f0fdf4' : '#f8faf8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: checked ? '0 4px 12px rgba(0,104,55,0.1)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                  <input
                    id={`di-cleaning-${opt.value.replace(/\s/g, '-')}`}
                    type="radio"
                    name="cleaningRequirement"
                    value={opt.value}
                    checked={checked}
                    onChange={handleChange}
                    style={{ accentColor: '#006837', width: '16px', height: '16px', flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      color: checked ? '#002818' : '#3c5949',
                    }}
                  >
                    {opt.label}
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#5a7060', lineHeight: 1.5, margin: '0 0 0 1.6rem' }}>
                  {opt.desc}
                </p>
              </label>
            );
          })}
        </div>
        {errors.cleaningRequirement && (
          <span style={{ ...errorStyle, marginTop: '0.6rem' }}>{errors.cleaningRequirement}</span>
        )}
      </div>

      {/* ── Section: Inspection Preference ── */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={sectionTitleStyle}>Inspection Preference</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <div>
            <label htmlFor="di-preferredDate" style={labelStyle}>
              Preferred Inspection Date <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              id="di-preferredDate"
              type="date"
              name="preferredDate"
              value={fields.preferredDate}
              onChange={handleChange}
              onFocus={() => setFocused('preferredDate')}
              onBlur={() => setFocused('')}
              min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
              style={{ ...inputStyle(errors.preferredDate), ...focusStyle('preferredDate'), cursor: 'pointer' }}
              aria-describedby={errors.preferredDate ? 'di-preferredDate-error' : undefined}
              aria-invalid={!!errors.preferredDate}
            />
            {errors.preferredDate && (
              <span id="di-preferredDate-error" style={errorStyle}>{errors.preferredDate}</span>
            )}
          </div>

          <div>
            <label htmlFor="di-preferredTime" style={labelStyle}>
              Preferred Time Window <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <select
              id="di-preferredTime"
              name="preferredTime"
              value={fields.preferredTime}
              onChange={handleChange}
              onFocus={() => setFocused('preferredTime')}
              onBlur={() => setFocused('')}
              style={{
                ...inputStyle(errors.preferredTime),
                ...focusStyle('preferredTime'),
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23006837' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
                cursor: 'pointer',
              }}
              aria-describedby={errors.preferredTime ? 'di-preferredTime-error' : undefined}
              aria-invalid={!!errors.preferredTime}
            >
              <option value="">Select a time window</option>
              {TIME_OPTIONS.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            {errors.preferredTime && (
              <span id="di-preferredTime-error" style={errorStyle}>{errors.preferredTime}</span>
            )}
          </div>
        </div>

        <p style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: '#5a7060', lineHeight: 1.6 }}>
          Your preferred date and time are used as a guide. Our office will confirm a specific inspection slot based on availability when they contact you.
        </p>
      </div>

      {/* ── Section: Additional Information ── */}
      <div style={{ marginBottom: '2rem' }}>
        <p style={sectionTitleStyle}>Additional Information</p>

        <label htmlFor="di-additionalNotes" style={labelStyle}>
          Additional Notes / Access Information
          <span style={{ fontWeight: 400, fontSize: '0.75em', color: '#5a7060', marginLeft: '4px', textTransform: 'none', letterSpacing: 0 }}>
            (optional)
          </span>
        </label>
        <textarea
          id="di-additionalNotes"
          name="additionalNotes"
          value={fields.additionalNotes}
          onChange={handleChange}
          onFocus={() => setFocused('additionalNotes')}
          onBlur={() => setFocused('')}
          rows={4}
          placeholder="e.g. property has pets, parking available on street, gate code, areas of particular concern..."
          style={{
            ...inputStyle(false),
            ...focusStyle('additionalNotes'),
            resize: 'vertical',
            minHeight: '100px',
          }}
        />
      </div>

      {/* Submission error */}
      {submitError && (
        <div
          style={{
            marginBottom: '1.5rem',
            padding: '1rem 1.25rem',
            borderRadius: '12px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            fontSize: '0.9rem',
          }}
        >
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary"
        style={{
          width: '100%',
          padding: '1.1rem',
          fontSize: '1rem',
          borderRadius: '14px',
          opacity: isLoading ? 0.7 : 1,
          cursor: isLoading ? 'not-allowed' : 'pointer',
          letterSpacing: '0.03em',
        }}
      >
        {isLoading ? (
          'Submitting...'
        ) : (
          <>
            BOOK CLEANING INSPECTION NOW
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      {/* Privacy note */}
      <div
        style={{
          marginTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          color: '#5a7060',
          fontSize: '0.82rem',
        }}
      >
        <span>🛡️</span>
        <span>Your information is handled with strict confidentiality.</span>
      </div>
    </form>
  );
};

export default DomesticInspectionForm;