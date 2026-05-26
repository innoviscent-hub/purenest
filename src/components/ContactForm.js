import React, { useState } from 'react';
import { handleFormSubmit } from '../controllers/appController';

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '1rem 1.25rem',
  borderRadius: '16px',
  border: `1.5px solid ${hasError ? '#ef4444' : 'rgba(0,104,55,0.1)'}`,
  background: '#f8faf8',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.95rem',
  color: '#002818',
  outline: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

const ContactForm = () => {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await handleFormSubmit(fields, setErrors, setSubmitted, setIsLoading, setSubmitError);
    if (success) {
      setFields({ name: '', email: '', phone: '', company: '', message: '' });
    }
  };

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        background: 'white',
        borderRadius: '32px',
        padding: '4rem 2rem',
        border: '1px solid rgba(0,104,55,0.12)',
        boxShadow: '0 20px 60px rgba(0,40,24,0.1)',
        animation: 'fadeUp 0.6s ease-out forwards'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✨</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#002818', marginBottom: '1rem', fontSize: '2rem' }}>
          Inquiry submitted successfully
        </h2>
        <p style={{ color: '#5a7060', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Thank you for reaching out. A PureNest representative will be in touch with you shortly.
        </p>
        <button
          className="btn btn-primary"
          style={{ padding: '1rem 2.5rem' }}
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="fade-in-2" style={{ width: '100%', maxWidth: '1100px', margin: 'clamp(2rem, 8vw, 5rem) auto', padding: '0' }}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        style={{
          background: 'white',
          borderRadius: 'clamp(0px, 5vw, 32px)',
          padding: 'clamp(0.75rem, 5vw, 3rem)',
          border: '1px solid rgba(0,104,55,0.08)',
          boxShadow: '0 30px 70px rgba(0,40,24,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Hidden fields required by Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

        {/* Subtle top accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
          background: 'linear-gradient(90deg, #006837, #c9a84c, #006837)'
        }} />

        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.85rem',
            color: '#002818',
            marginBottom: '0.5rem',
            letterSpacing: '-0.01em'
          }}>
            Send an Inquiry
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#5a7060', fontWeight: 400 }}>
            Our team typically responds within 24 business hours.
          </p>
        </div>

        {/* Full Name */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.6rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#002818', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Full Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused('')}
            placeholder="John Smith"
            style={{
              ...inputStyle(errors.name),
              borderColor: focused === 'name' ? '#006837' : errors.name ? '#ef4444' : 'rgba(0,104,55,0.1)',
              background: focused === 'name' ? 'white' : '#f8faf8',
              boxShadow: focused === 'name' ? '0 8px 20px rgba(0,104,55,0.06)' : 'none',
            }}
          />
          {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.4rem', display: 'block', fontWeight: 500 }}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.6rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#002818', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Email Address <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
            placeholder="john@purenest.co.nz"
            style={{
              ...inputStyle(errors.email),
              borderColor: focused === 'email' ? '#006837' : errors.email ? '#ef4444' : 'rgba(0,104,55,0.1)',
              background: focused === 'email' ? 'white' : '#f8faf8',
              boxShadow: focused === 'email' ? '0 8px 20px rgba(0,104,55,0.06)' : 'none',
            }}
          />
          {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.4rem', display: 'block', fontWeight: 500 }}>{errors.email}</span>}
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.6rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#002818', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Contact Number <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            onFocus={() => setFocused('phone')}
            onBlur={() => setFocused('')}
            placeholder="+64 21 123 4567"
            style={{
              ...inputStyle(errors.phone),
              borderColor: focused === 'phone' ? '#006837' : errors.phone ? '#ef4444' : 'rgba(0,104,55,0.1)',
              background: focused === 'phone' ? 'white' : '#f8faf8',
              boxShadow: focused === 'phone' ? '0 8px 20px rgba(0,104,55,0.06)' : 'none',
            }}
          />
          {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.4rem', display: 'block', fontWeight: 500 }}>{errors.phone}</span>}
        </div>

        {/* Company */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.6rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#002818', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            value={fields.company}
            onChange={handleChange}
            onFocus={() => setFocused('company')}
            onBlur={() => setFocused('')}
            placeholder="Organization name..."
            style={{
              ...inputStyle(errors.company),
              borderColor: focused === 'company' ? '#006837' : errors.company ? '#ef4444' : 'rgba(0,104,55,0.1)',
              background: focused === 'company' ? 'white' : '#f8faf8',
              boxShadow: focused === 'company' ? '0 8px 20px rgba(0,104,55,0.06)' : 'none',
            }}
          />
        </div>

        {/* Message */}
        <div style={{ marginBottom: '2.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.6rem', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#002818', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Inquiry Details <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused('')}
            rows="5"
            placeholder="How can we help you?"
            style={{
              ...inputStyle(errors.message),
              resize: 'none',
              borderColor: focused === 'message' ? '#006837' : errors.message ? '#ef4444' : 'rgba(0,104,55,0.1)',
              background: focused === 'message' ? 'white' : '#f8faf8',
              boxShadow: focused === 'message' ? '0 8px 20px rgba(0,104,55,0.06)' : 'none',
            }}
          />
          {errors.message && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.4rem', display: 'block', fontWeight: 500 }}>{errors.message}</span>}
        </div>

        {/* Submit Error */}
        {submitError && (
          <div style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: '12px', background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', fontSize: '0.9rem', textAlign: 'center' }}>
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
            borderRadius: '16px',
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Sending...' : 'Submit Inquiry'}
          {!isLoading && (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </button>

        <div style={{ 
          marginTop: '1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px',
          color: '#5a7060',
          fontSize: '0.85rem'
        }}>
          <span style={{ fontSize: '1.1rem' }}>🛡️</span>
          <span>Data protected by privacy standards</span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

