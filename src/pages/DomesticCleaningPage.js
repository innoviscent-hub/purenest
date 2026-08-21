import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { handleNavClick } from '../controllers/appController';

// Homepage section components
import DomesticHero from '../components/DomesticHero';
import DomesticIntro from '../components/DomesticIntro';
import DomesticServices from '../components/DomesticServices';
import WhyPureNest from '../components/WhyPureNest';
import DomesticHowItWorks from '../components/DomesticHowItWorks';
import DomesticFAQ from '../components/DomesticFAQ';
import DomesticFinalCTA from '../components/DomesticFinalCTA';

// ============================================================
// DomesticCleaningPage
// Route: /domestic-cleaning — Domestic Home landing page
//
// Refined visual hierarchy & alternating light/dark pacing:
//   1. DomesticHero     — Dark Emerald Hero
//   2. DomesticIntro    — White Editorial Philosophy
//   3. WhyPureNest      — Soft Light Asymmetric Trust Grid
//   4. DomesticServices — Dark Contrasting Services Showcase
//   5. DomesticHowItWorks — White 4-Step Journey Stepper
//   6. DomesticFAQ      — Soft Light Polished Accordion
//   7. DomesticFinalCTA — Deep Emerald Closing Conversion
//   8. Footer           — Dark Brand Footer
// ============================================================

const DomesticCleaningPage = () => {
  const navigate = useNavigate();

  const handleBookInspection = () => {
    handleNavClick(navigate, '/domestic-cleaning/services#inspection', null);
  };

  const handleStandardCleanRates = () => {
    handleNavClick(navigate, '/domestic-cleaning/services#standard-clean-rates', null);
  };

  const handleDeepCleanRates = () => {
    handleNavClick(navigate, '/domestic-cleaning/services#deep-clean-rates', null);
  };

  const handleExploreServices = () => {
    handleNavClick(navigate, '/domestic-cleaning/services', null);
  };

  const handleViewFullProcess = () => {
    handleNavClick(navigate, '/domestic-cleaning/services#how-it-works', null);
  };

  return (
    <main className="fade-in" style={{ background: '#ffffff' }}>
      <SEO
        title="Domestic Cleaning Services"
        description="PureNest domestic cleaning services for Auckland homes and apartments. Standard Clean and All-Inclusive Deep Clean starting with a free on-site inspection."
        path="/domestic-cleaning"
      />

      {/* ── 1. Hero (Dark) ── */}
      <DomesticHero
        onBookInspection={handleBookInspection}
        onExploreServices={handleExploreServices}
      />

      {/* ── 2. Philosophy & Editorial Intro (White) ── */}
      <DomesticIntro />

      {/* ── 3. Why PureNest Trust Differentiators (Soft Light) ── */}
      <WhyPureNest />

      {/* ── 4. Services Showcase (Dark Contrasting Theme) ── */}
      <DomesticServices
        onExploreServices={handleExploreServices}
        onStandardCleanRates={handleStandardCleanRates}
        onDeepCleanRates={handleDeepCleanRates}
      />

      {/* ── 5. 4-Step Visual Journey Stepper (White) ── */}
      <DomesticHowItWorks
        onViewFullProcess={handleViewFullProcess}
      />

      {/* ── 6. General FAQ Accordion (Soft Light) ── */}
      <DomesticFAQ />

      {/* ── 7. Final Conversion Section (Deep Emerald) ── */}
      <DomesticFinalCTA onBook={handleBookInspection} />

      {/* ── 8. Footer ── */}
      <Footer />
    </main>
  );
};

export default DomesticCleaningPage;
