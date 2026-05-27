import React from 'react';
import './Logo.css';

const Logo = ({ onlyIcon = false, light = false, height = 52, className = "", style = {} }) => {

  const renderIcon = () => (
    <svg
      viewBox="0 0 100 100"
      width={height}
      height={height}
      style={{
        flexShrink: 0,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.18))'
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Green Leaf Gradient */}
        <linearGradient id="logoLeafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a6b2f" />
          <stop offset="50%" stopColor="#2db84a" />
          <stop offset="100%" stopColor="#5fd87a" />
        </linearGradient>

        {/* Blue Wave/Hand Gradient */}
        <linearGradient id="logoWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0a2f6e" />
          <stop offset="60%" stopColor="#1558b0" />
          <stop offset="100%" stopColor="#3a82d8" />
        </linearGradient>

        {/* Dark Navy House Gradient */}
        <linearGradient id="logoNavyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0d2b5e" />
          <stop offset="100%" stopColor="#1a3f7a" />
        </linearGradient>

        {/* Blue Sparkle */}
        <linearGradient id="logoSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4fc3f7" />
          <stop offset="100%" stopColor="#1a88e0" />
        </linearGradient>

        <filter id="logoShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* ── 1. Outer circular green leaf (left arc) ── */}
      <path
        d="M 48 82
           C 20 75, 12 38, 46 10
           C 34 28, 28 55, 44 78
           Z"
        fill="url(#logoLeafGrad)"
      />

      {/* ── 2. Blue wave / hand (bottom-right arc) ── */}
      <path
        d="M 44 78
           C 54 92, 76 90, 86 72
           C 93 57, 94 38, 88 28
           C 86 50, 73 66, 56 66
           C 49 66, 43 63, 44 78 Z"
        fill="url(#logoWaveGrad)"
        filter="url(#logoShadow)"
      />

      {/* ── 3. Chimney ── */}
      <rect x="67" y="25" width="5" height="13" rx="1" fill="url(#logoNavyGrad)" />

      {/* ── 4. Roof (triangle peak) ── */}
      <path
        d="M 57 18 L 33 40 L 38 45 L 57 27 L 76 45 L 81 40 Z"
        fill="url(#logoNavyGrad)"
        filter="url(#logoShadow)"
      />

      {/* ── 5. House body (white) ── */}
      <path
        d="M 42 40 L 72 40 L 72 62 C 67 65, 58 65.5, 42 62 Z"
        fill="#ffffff"
      />

      {/* ── 6. Window — 2×2 blue panes ── */}
      <rect x="51" y="46" width="4" height="4" rx="0.5" fill="url(#logoWaveGrad)" />
      <rect x="57" y="46" width="4" height="4" rx="0.5" fill="url(#logoWaveGrad)" />
      <rect x="51" y="52" width="4" height="4" rx="0.5" fill="url(#logoWaveGrad)" />
      <rect x="57" y="52" width="4" height="4" rx="0.5" fill="url(#logoWaveGrad)" />

      {/* ── 7. Sparkle stars (top-right, blue/cyan) ── */}
      {/* Large star */}
      <path d="M 79 8 Q 79 13 84 13 Q 79 13 79 18 Q 79 13 74 13 Q 79 13 79 8 Z"
        fill="url(#logoSparkleGrad)" />
      {/* Medium star */}
      <path d="M 70 16 Q 70 20 74 20 Q 70 20 70 24 Q 70 20 66 20 Q 70 20 70 16 Z"
        fill="#4fc3f7" />
      {/* Small star */}
      <path d="M 85 20 Q 85 23 88 23 Q 85 23 85 26 Q 85 23 82 23 Q 85 23 85 20 Z"
        fill="url(#logoSparkleGrad)" />
    </svg>
  );

  if (onlyIcon) {
    return renderIcon();
  }

  // ── Color tokens per theme ──
  const pureColor = light ? '#ffffff' : '#0d2b5e';   // deep navy
  const nestColor = '#2db84a';                                    // vibrant green (always)
  const subColor = light ? 'rgba(255,255,255,0.85)' : '#0d2b5e'; // — SOLUTIONS LIMITED —
  const dashColor = light ? 'rgba(255,255,255,0.40)' : '#0d2b5e'; // horizontal rule lines
  const tagColor = light ? 'rgba(255,255,255,0.75)' : '#1a3f6b'; // tagline text

  return (
    <div className={`purenest-logo ${className}`} style={style}>

      {/* Row 1: Emblem + PURENEST wordmark */}
      <div className="purenest-logo__row1">
        {renderIcon()}
        <div className="purenest-logo__text">
          <span className="purenest-logo__pure" style={{ color: pureColor }}>PURE</span>
          <span className="purenest-logo__nest" style={{ color: nestColor }}>NEST</span>
        </div>
      </div>

      {/* Row 2: — SOLUTIONS LIMITED — */}
      <div className="purenest-logo__row2">
        <div className="purenest-logo__line" style={{ background: dashColor }} />
        <span className="purenest-logo__limited" style={{ color: subColor }}>
          Solutions Limited
        </span>
        <div className="purenest-logo__line" style={{ background: dashColor }} />
      </div>

      {/* Row 3: Tagline */}
      <div className="purenest-logo__row3" style={{ color: tagColor }}>
        Cleaner Spaces&nbsp;•&nbsp;Greener Environments&nbsp;•&nbsp;Better Living
      </div>

    </div>
  );
};

export default Logo;
