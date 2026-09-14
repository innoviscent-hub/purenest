# PureNest About Us Page — Responsive Design System (`design.md`)

## 1. Overview & Design Philosophy

This document defines the responsive design system and multi-device layout architecture for the **PureNest About Us** page ([AboutPage.js](file:///C:/Users/SpiderEL/Desktop/Projects/purenest/src/pages/AboutPage.js)).

The design system implements modern responsive engineering principles:
- **Fluid Clamp Typography**: Text scales smoothly between viewport bounds without hard layout jumps.
- **Content-Based Breakpoint Scale**: 4 explicit device tiers (Phone, Tablet, Laptop, Desktop).
- **Touch Target Accessibility**: Minimum 44px–48px tap areas for mobile and touch screens.
- **Asymmetric Feature Matrix**: Asymmetrical split grids creating visual hierarchy and focus.
- **Strict Brand Aesthetics**: 100% preservation of PureNest's emerald green, gold accent, and glassmorphic identity.

---

## 2. Brand Aesthetics & Token System

| Design Token | Value / Specification | Usage Scope |
| :--- | :--- | :--- |
| **Primary Brand Emerald** | `#002818` / `var(--emerald-950)` | Section backdrops, display headings |
| **Accent Emerald** | `#006837` / `var(--emerald-700)` | Primary brand text, checkmarks, borders |
| **Primary Gold Accent** | `#c9a84c` / `var(--gold-400)` | Stat values, divider lines, highlight badges |
| **Light Gold Accent** | `#dfc074` / `var(--gold-300)` | Hero sub-badges, dark background text |
| **Background Neutral** | `#f8faf8` / `var(--bg-alt)` | Story section, card background contrast |
| **Glass Backdrop** | `rgba(255, 255, 255, 0.04)` + `backdrop-filter: blur(16px)` | Floating executive cards & stat tiles |
| **Display Font** | `'Playfair Display', serif` | Main page titles & numerical stat counters |
| **UI / Badge Font** | `'Sora', sans-serif` | Badges, buttons, labels, uppercase tags |
| **Body Copy Font** | `'Inter', sans-serif` | Paragraph text, card descriptions |

---

## 3. Responsive Breakpoint Matrix & Device Specifications

```
+------------------------------------------------------------------------------------+
| 📱 Phone Screen       | 📱 Mobile/Tablet      | 💻 Laptop Screen      | 🖥️ Desktop Screen    |
| (<= 480px)            | (481px - 768px)       | (769px - 1024px)      | (> 1024px)           |
+-----------------------+-----------------------+-----------------------+----------------------+
| Single column layout  | 1-Col Hero & Story    | 2-Col Hero & Story    | 12-Col Widescreen    |
| Full-width cards      | 2-Col Pillars         | Stacked Stats Matrix  | Asymmetric Matrix    |
| 100% width buttons    | Touch-optimized       | Balanced dual grids   | Full Glass Backdrop  |
+------------------------------------------------------------------------------------+
```

### 📱 1. Phone / Mobile Screen (≤ 480px)
- **Hero Title**: `clamp(1.75rem, 7vw, 2.25rem)`
- **Section Headings**: `clamp(1.4rem, 6vw, 1.85rem)`
- **Stat Values**: `clamp(2.75rem, 12vw, 3.75rem)`
- **Grid Layout**: 1-Column full width across all sections.
- **Accreditation Cards**: Vertical single-column stack.
- **Stat Cards**: Full-width stacked glass tiles with padding `1.25rem`.
- **CTA Buttons**: Vertical flex column, `100%` width, min height `48px`.

### 📱 2. Small Tablet Screen (481px – 768px)
- **Hero Title**: `clamp(2rem, 5vw, 2.75rem)`
- **Section Headings**: `clamp(1.65rem, 4vw, 2.25rem)`
- **Grid Layout**: Single column Hero & Story; 2-column Accreditations grid; 2-column Pillars grid.
- **Stats Matrix**: Vertical stack with 1.5rem padding.

### 💻 3. Laptop Screen (769px – 1024px)
- **Hero Title**: `clamp(2.25rem, 4.5vw, 3.5rem)`
- **Section Headings**: `clamp(1.8rem, 3.5vw, 2.5rem)`
- **Grid Layout**: 2-Column split Hero (`1fr 1fr`); 2-Column Story (`1fr 1fr`); 2-Column Pillars.
- **Stats Matrix**: Stacked flagship panel and dual metric cards.

### 🖥️ 4. Desktop / Widescreen (> 1024px)
- **Hero Title**: `clamp(2.75rem, 5vw, 4.5rem)`
- **Section Headings**: `clamp(2rem, 3.5vw, 2.75rem)`
- **Grid Layout**: 2-Column Hero (`1.1fr 0.9fr`); 2-Column Story (`1fr 1fr`); Asymmetric Stats Matrix (`1.15fr 0.85fr`); 3-Column Pillars.
- **Container Max Width**: 1200px centered.

---

## 4. Component Layout Specifications

### A. Hero Header Component (`.about-hero-grid`)
- **Left Hero Content**:
  - `Est. 2016` Gold Pill Badge with subtle glow dot.
  - `About PureNest` Playfair Display title.
  - `Precision facility management with a legacy of excellence in New Zealand.` subtitle.
  - Quick Hero Stat Pills: `10+ Years Excellence`, `50+ Vetted Professionals`, `100% NZ Compliant`.
- **Right Executive Feature Card**:
  - Glassmorphic card (`rgba(255, 255, 255, 0.04)`), gold/emerald border top line, `Auckland CBD Headquarters` badge, operational status tag.

### B. Story & Accreditation Component (`.about-story-grid`)
- **Narrative Column**:
  - `Our Story` Gold Badge & Gold Accent Divider.
  - `Auckland's Premier Institutional Partner` Heading.
  - Founding story text paragraphs & `50+ professionals` highlight.
  - Key Standards Checklist (`Chandelier Restoration`, `Perimeter Landscaping`, etc.).
- **Accreditations Column (`.about-accreditation-grid`)**:
  - 4 Accreditations: `NZ Licensed`, `Compliance Certified`, `ISO Compliant`, `Security Vetted`.
  - Icon badges (`📜`, `🛡️`, `🏆`, `🔒`), title, verification tag, and description.

### C. Stats Asymmetric Feature Matrix (`.about-stats-matrix`)
- **Flagship Card (`10+ Years Experience`)**:
  - Takes 1.15fr width on desktop.
  - Giant gold gradient text `10+`, Playfair Display font.
  - Subtitle: `Years Experience` in Sora font.
  - Flagship badge `🏆 Flagship Metric`, location tag, and company foundation details.
- **Stacked Dual Cards (`3 Service Disciplines` & `100% NZ Compliance`)**:
  - Top Card: Metric `3`, label `Service Disciplines`, and 3 discipline chips (`🧹 Custodial`, `🌿 Landscaping`, `🛡️ Pest Control`).
  - Bottom Card: Metric `100%` inside radial green ring, label `NZ Compliance`, accreditation detail copy.

### D. Operational Pillars Component (`.about-pillars-grid`)
- 3 Cards detailing core operational values:
  1. `Specialized Protocols` (`✨`)
  2. `Institutional Grade` (`🏛️`)
  3. `Certified Professionals` (`👥`)

### E. Call-to-Action Component (`.about-cta-banner`)
- Ambient radial backdrop, Playfair Display heading `Elevate Your Facility Standards`.
- Navigation buttons to `/contact` and `/services`.

---

## 5. Strict Constraints Compliance Log

- [x] **Zero Information Alteration**: Retains exact founding year (`company.founded`), staff count (`company.staffCount`), all 3 stats (`10+`, `3`, `100%`), all 4 badges, and SEO metadata.
- [x] **Zero Aesthetic Alteration**: Uses exact brand color tokens, typography, and theme.
- [x] **Page Scope**: Modifications strictly restricted to `AboutPage.js` and `index.css`.
