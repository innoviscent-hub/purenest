import React, { useState, useEffect, useRef } from 'react';
import { REGIONS, DISTRICTS } from '../models/locationData';

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
  scrollMarginTop: 'calc(var(--navbar-height, 80px) + 20px)',
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
  scrollMarginTop: 'calc(var(--navbar-height, 80px) + 20px)',
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
  region: '',
  district: '',
  propertyAddress: '',
  cleaningRequirement: '',
  preferredDate: '',
  preferredTime: '',
  additionalNotes: '',
  enquiryType: 'Domestic Cleaning Inspection',
};

const CustomDropdown = ({
  id,
  name,
  value,
  options,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  hasError,
  inputStyle,
  isDisabled = false,
  isSearchable = false,
  searchPlaceholder,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const selectedOptionObj = options.find((opt) => opt.value === value);
  const selectedLabel = selectedOptionObj ? selectedOptionObj.label : placeholder;

  const displayedOptions = isSearchable
    ? (searchQuery.trim()
        ? options.filter((opt) => opt.label.toLowerCase().includes(searchQuery.trim().toLowerCase()))
        : options)
    : [{ value: '', label: placeholder }, ...options];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (dropdownOpen && highlightedIndex >= 0 && listRef.current) {
      const activeEl = listRef.current.querySelector(`#${id}-opt-${highlightedIndex}`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, dropdownOpen, id]);

  const selectOption = (val) => {
    onChange(val);
    setDropdownOpen(false);
    setSearchQuery('');
  };

  const handleKeyDown = (event) => {
    if (isDisabled) return;
    if (!dropdownOpen) {
      if (event.key === ' ' || event.key === 'Enter' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        setDropdownOpen(true);
        setSearchQuery('');
        const currentIndex = displayedOptions.findIndex((opt) => opt.value === value);
        setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return;
    }

    if (event.key === 'Escape') {
      setDropdownOpen(false);
      setSearchQuery('');
      event.preventDefault();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (displayedOptions.length > 0) {
        setHighlightedIndex((prev) => (prev + 1) % displayedOptions.length);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (displayedOptions.length > 0) {
        setHighlightedIndex((prev) => (prev - 1 + displayedOptions.length) % displayedOptions.length);
      }
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < displayedOptions.length) {
        selectOption(displayedOptions[highlightedIndex].value);
      }
    } else if (event.key === ' ' && !isSearchable) {
      event.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < displayedOptions.length) {
        selectOption(displayedOptions[highlightedIndex].value);
      }
    } else if (event.key === 'Tab') {
      setDropdownOpen(false);
      setSearchQuery('');
    }
  };

  const focusStyle = isFocused
    ? { borderColor: '#006837', background: 'white', boxShadow: '0 6px 16px rgba(0,104,55,0.08)' }
    : {};

  const inputValue = isSearchable
    ? (dropdownOpen ? searchQuery : (value ? selectedLabel : ''))
    : '';

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      {isSearchable ? (
        <div
          style={{
            ...inputStyle(hasError),
            ...focusStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: isDisabled ? '#f1f3f1' : (dropdownOpen ? 'white' : '#f8faf8'),
            padding: 0,
            cursor: isDisabled ? 'not-allowed' : 'text',
          }}
          onClick={() => {
            if (isDisabled) return;
            if (!dropdownOpen) {
              setDropdownOpen(true);
              setSearchQuery('');
              inputRef.current?.focus();
            }
          }}
        >
          <input
            ref={inputRef}
            id={`${id}-trigger`}
            type="text"
            role="combobox"
            disabled={isDisabled}
            aria-autocomplete="list"
            aria-expanded={dropdownOpen}
            aria-disabled={isDisabled}
            aria-haspopup="listbox"
            aria-controls={`${id}-list`}
            aria-labelledby={`${id}-label`}
            aria-activedescendant={dropdownOpen && highlightedIndex >= 0 ? `${id}-opt-${highlightedIndex}` : undefined}
            value={inputValue}
            placeholder={dropdownOpen ? (searchPlaceholder || placeholder) : (value ? selectedLabel : placeholder)}
            onChange={(e) => {
              if (isDisabled) return;
              if (!dropdownOpen) setDropdownOpen(true);
              setSearchQuery(e.target.value);
              setHighlightedIndex(0);
            }}
            onFocus={(e) => {
              if (onFocus) onFocus(e);
              if (!dropdownOpen && !isDisabled) {
                setDropdownOpen(true);
                setSearchQuery('');
              }
            }}
            onBlur={(e) => {
              if (onBlur) onBlur(e);
            }}
            onKeyDown={handleKeyDown}
            style={{
              width: '100%',
              padding: '0.95rem 0.5rem 0.95rem 1.2rem',
              border: 'none',
              background: 'transparent',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem',
              color: isDisabled ? '#8ba091' : '#002818',
              outline: 'none',
              boxSizing: 'border-box',
              cursor: isDisabled ? 'not-allowed' : 'text',
            }}
          />
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (isDisabled) return;
              const nextOpen = !dropdownOpen;
              setDropdownOpen(nextOpen);
              if (nextOpen) {
                setSearchQuery('');
                inputRef.current?.focus();
              } else {
                setSearchQuery('');
              }
            }}
            style={{
              padding: '0.95rem 1.2rem 0.95rem 0.5rem',
              display: 'flex',
              alignItems: 'center',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isDisabled ? '#8ba091' : '#006837'}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      ) : (
        <button
          id={`${id}-trigger`}
          type="button"
          role="combobox"
          disabled={isDisabled}
          aria-autocomplete="none"
          aria-expanded={dropdownOpen}
          aria-disabled={isDisabled}
          aria-haspopup="listbox"
          aria-controls={`${id}-list`}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={dropdownOpen && highlightedIndex >= 0 ? `${id}-opt-${highlightedIndex}` : undefined}
          onClick={() => {
            if (isDisabled) return;
            const nextOpen = !dropdownOpen;
            setDropdownOpen(nextOpen);
            if (nextOpen) {
              const allBaseOptions = [{ value: '', label: placeholder }, ...options];
              const currentIndex = allBaseOptions.findIndex((opt) => opt.value === value);
              setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0);
            }
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          style={{
            ...inputStyle(hasError),
            ...focusStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            textAlign: 'left',
            background: isDisabled ? '#f1f3f1' : '#f8faf8',
            color: isDisabled ? '#8ba091' : '#002818',
            opacity: isDisabled ? 0.65 : 1,
            paddingRight: '1.2rem',
          }}
        >
          <span>{selectedLabel}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDisabled ? '#8ba091' : '#006837'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}

      <input type="hidden" name={name} value={value} />

      {dropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '105%',
            left: 0,
            right: 0,
            zIndex: 100,
            background: 'white',
            border: '1.5px solid rgba(0,104,55,0.12)',
            borderRadius: '14px',
            boxShadow: '0 10px 30px rgba(0,40,24,0.12)',
            overflow: 'hidden',
          }}
        >
          <ul
            ref={listRef}
            id={`${id}-list`}
            role="listbox"
            aria-labelledby={`${id}-label`}
            style={{
              padding: '0.4rem 0',
              margin: 0,
              listStyle: 'none',
              maxHeight: '220px',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {displayedOptions.length === 0 ? (
              <li
                style={{
                  padding: '1rem 1.2rem',
                  color: '#5a7060',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}
              >
                No results found
              </li>
            ) : (
              displayedOptions.map((opt, index) => {
                const isSelected = value === opt.value;
                const isHighlighted = highlightedIndex === index;
                return (
                  <li
                    key={opt.value || `opt-${index}`}
                    id={`${id}-opt-${index}`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <button
                      type="button"
                      onClick={() => selectOption(opt.value)}
                      onKeyDown={handleKeyDown}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.2rem',
                        background: isHighlighted ? '#f4fbf6' : isSelected ? '#f0fdf4' : 'transparent',
                        border: 'none',
                        color: isHighlighted || isSelected ? '#006837' : '#002818',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: isSelected ? 700 : 400,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease, color 0.15s ease',
                      }}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onMouseLeave={() => setHighlightedIndex(-1)}
                    >
                      {opt.label}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
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

  const handleRegionChange = (val) => {
    setFields((prev) => ({
      ...prev,
      region: val,
    }));
    if (errors.region) setErrors((prev) => ({ ...prev, region: null }));
  };

  const handleDistrictChange = (val) => {
    setFields((prev) => ({
      ...prev,
      district: val,
    }));
    if (errors.district) setErrors((prev) => ({ ...prev, district: null }));
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
        padding: 'clamp(1.25rem, 4vw, 2.5rem) clamp(1rem, 4vw, 2.5rem) clamp(1rem, 4vw, 2rem)',
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
            <label id="di-propertyType-label" htmlFor="di-propertyType-trigger" style={labelStyle}>
              Property Type
            </label>
            <CustomDropdown
              id="di-propertyType"
              name="propertyType"
              value={fields.propertyType}
              options={PROPERTY_TYPES.map((t) => ({ value: t, label: t }))}
              placeholder="Select type (optional)"
              onChange={(val) => {
                setFields((prev) => ({ ...prev, propertyType: val }));
                if (errors.propertyType) {
                  setErrors((prev) => ({ ...prev, propertyType: null }));
                }
              }}
              onFocus={() => setFocused('propertyType')}
              onBlur={() => setFocused('')}
              isFocused={focused === 'propertyType'}
              hasError={!!errors.propertyType}
              inputStyle={inputStyle}
            />
          </div>

          <div>
            <label id="di-propertySize-label" htmlFor="di-propertySize-trigger" style={labelStyle}>
              Property Size <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <CustomDropdown
              id="di-propertySize"
              name="propertySize"
              value={fields.propertySize}
              options={PROPERTY_SIZES.map((s) => ({ value: s, label: s }))}
              placeholder="Select size"
              onChange={(val) => {
                setFields((prev) => ({ ...prev, propertySize: val }));
                if (errors.propertySize) {
                  setErrors((prev) => ({ ...prev, propertySize: null }));
                }
              }}
              onFocus={() => setFocused('propertySize')}
              onBlur={() => setFocused('')}
              isFocused={focused === 'propertySize'}
              hasError={!!errors.propertySize}
              inputStyle={inputStyle}
            />
            {errors.propertySize && (
              <span id="di-propertySize-error" style={errorStyle}>{errors.propertySize}</span>
            )}
          </div>
        </div>

        {/* Region + District / Area side by side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1.25rem',
          }}
        >
          <div>
            <label id="di-region-label" htmlFor="di-region-trigger" style={labelStyle}>
              Region
            </label>
            <CustomDropdown
              id="di-region"
              name="region"
              value={fields.region}
              options={REGIONS.map((r) => ({ value: r, label: r }))}
              placeholder="Please Select"
              onChange={handleRegionChange}
              onFocus={() => setFocused('region')}
              onBlur={() => setFocused('')}
              isFocused={focused === 'region'}
              hasError={!!errors.region}
              inputStyle={inputStyle}
              isSearchable={true}
              searchPlaceholder="Search or type region..."
            />
          </div>

          <div>
            <label id="di-district-label" htmlFor="di-district-trigger" style={labelStyle}>
              District / Area
            </label>
            <CustomDropdown
              id="di-district"
              name="district"
              value={fields.district}
              options={DISTRICTS.map((d) => ({ value: d, label: d }))}
              placeholder="Please Select"
              onChange={handleDistrictChange}
              onFocus={() => setFocused('district')}
              onBlur={() => setFocused('')}
              isFocused={focused === 'district'}
              hasError={!!errors.district}
              inputStyle={inputStyle}
              isSearchable={true}
              searchPlaceholder="Search or type district/area..."
            />
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
            placeholder="123 Example Street"
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
            <label id="di-preferredTime-label" htmlFor="di-preferredTime-trigger" style={labelStyle}>
              Preferred Time Window <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <CustomDropdown
              id="di-preferredTime"
              name="preferredTime"
              value={fields.preferredTime}
              options={TIME_OPTIONS}
              placeholder="Select a time window"
              onChange={(val) => {
                setFields((prev) => ({ ...prev, preferredTime: val }));
                if (errors.preferredTime) {
                  setErrors((prev) => ({ ...prev, preferredTime: null }));
                }
              }}
              onFocus={() => setFocused('preferredTime')}
              onBlur={() => setFocused('')}
              isFocused={focused === 'preferredTime'}
              hasError={!!errors.preferredTime}
              inputStyle={inputStyle}
            />
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
      <div style={{ marginTop: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: 'clamp(1rem, 3.5vw, 1.75rem)' }}>
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-primary"
          style={{
            width: '100%',
            padding: '1.1rem clamp(1rem, 4vw, 1.5rem)',
            fontSize: 'clamp(0.75rem, 3vw, 0.95rem)',
            borderRadius: '14px',
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.5rem, 2vw, 0.8rem)',
            boxSizing: 'border-box',
          }}
        >
          {isLoading ? (
            'Submitting...'
          ) : (
            <>
              BOOK CLEANING INSPECTION NOW
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Privacy note */}
      <div
        style={{
          marginTop: '0',
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