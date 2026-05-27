import React from 'react';
import './Logo.css';

const Logo = ({ onlyIcon = false, light = false, height = 52, className = "", style = {} }) => {
  // SVG emblem with premium gradients and soft shadows
  const renderIcon = () => (
    <svg 
      viewBox="0 0 100 100" 
      width={height} 
      height={height} 
      style={{ 
        flexShrink: 0, 
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        filter: 'drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.15))'
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Leaf Gradient (Emerald/Mint transition) */}
        <linearGradient id="logoLeafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#004d26" />
          <stop offset="50%" stopColor="#009245" />
          <stop offset="100%" stopColor="#3cd57d" />
        </linearGradient>

        {/* Blue Hand/Roof Gradient (Deep Navy to Royal Blue highlight) */}
        <linearGradient id="logoBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#041c3c" />
          <stop offset="50%" stopColor="#09356b" />
          <stop offset="100%" stopColor="#1a6cc4" />
        </linearGradient>

        {/* Sparkles Gradient (Gold highlights) */}
        <linearGradient id="logoGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b07d12" />
          <stop offset="50%" stopColor="#dfc074" />
          <stop offset="100%" stopColor="#fdf3d7" />
        </linearGradient>

        {/* Soft Drop Shadow Filter for inner emblem parts */}
        <filter id="logoInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.15" />
        </filter>
      </defs>

      {/* 1. Green Leaf (Left Side) */}
      <path 
        d="M 46 80 C 24 73, 18 41, 48 13 C 37 31, 31 54, 46 80 Z" 
        fill="url(#logoLeafGrad)" 
      />

      {/* 2. Blue Cradling Hand (Bottom/Right) */}
      <path 
        d="M 46 80 C 58 92, 78 88, 86 70 C 92 58, 93 42, 88 32 C 86 52, 74 67, 56 67 C 50 67, 44 64, 46 80 Z" 
        fill="url(#logoBlueGrad)" 
        filter="url(#logoInnerShadow)"
      />

      {/* 3. House Roof & Chimney */}
      <rect x="68" y="27" width="5.5" height="12" fill="url(#logoBlueGrad)" />
      <path 
        d="M 58 19 L 35 40 L 40 45 L 58 29 L 76 45 L 81 40 Z" 
        fill="url(#logoBlueGrad)" 
        filter="url(#logoInnerShadow)"
      />

      {/* 4. House Body (White) */}
      <path 
        d="M 45.2 39 L 70.8 39 L 70.8 61 C 65.8 63.5, 55.8 63.5, 45.2 61 Z" 
        fill="#ffffff" 
      />

      {/* 5. Window (4 panes) */}
      <rect x="52" y="46" width="4" height="4" fill="url(#logoBlueGrad)" />
      <rect x="58" y="46" width="4" height="4" fill="url(#logoBlueGrad)" />
      <rect x="52" y="52" width="4" height="4" fill="url(#logoBlueGrad)" />
      <rect x="58" y="52" width="4" height="4" fill="url(#logoBlueGrad)" />

      {/* 6. Sparkles / Stars (Gold & Mint) */}
      <path d="M 76 9 Q 76 14 81 14 Q 76 14 76 19 Q 76 14 71 14 Q 76 14 76 9 Z" fill="url(#logoGoldGrad)" />
      <path d="M 67 17 Q 67 21 71 21 Q 67 21 67 25 Q 67 21 63 21 Q 67 21 67 17 Z" fill="#6ee7b7" />
      <path d="M 83 21 Q 83 24 86 24 Q 83 24 83 27 Q 83 24 80 24 Q 83 24 83 21 Z" fill="url(#logoGoldGrad)" />
    </svg>
  );

  if (onlyIcon) {
    return renderIcon();
  }

  // Wording text colors based on dark vs light backgrounds
  const pureColor = light ? "#ffffff" : "#041c3c";
  const nestColor = "#1ba363";
  const subColor = light ? "#dfc074" : "#b07d12"; // Gold accents
  const tagColor = light ? "rgba(255, 255, 255, 0.8)" : "#475569";
  const lineColor = light ? "rgba(223, 192, 116, 0.4)" : "rgba(176, 125, 18, 0.3)"; // Gold-tinted lines

  return (
    <div className={`purenest-logo ${className}`} style={style}>
      {/* Row 1: Logo Emblem and PureNest Wording inline */}
      <div className="purenest-logo__row1">
        {renderIcon()}
        <div className="purenest-logo__text">
          <span className="purenest-logo__pure" style={{ color: pureColor }}>
            Pure
          </span>
          <span className="purenest-logo__nest" style={{ color: nestColor }}>
            Nest
          </span>
        </div>
      </div>

      {/* Row 2: LIMITED with decorative lines */}
      <div className="purenest-logo__row2">
        <div className="purenest-logo__line" style={{ background: lineColor }} />
        <span className="purenest-logo__limited" style={{ color: subColor }}>
          Limited
        </span>
        <div className="purenest-logo__line" style={{ background: lineColor }} />
      </div>

      {/* Row 3: Tagline Wording (centered/responsive) */}
      <div className="purenest-logo__row3" style={{ color: tagColor }}>
        Cleaner Spaces • Greener Environments • Better Living
      </div>
    </div>
  );
};

export default Logo;
