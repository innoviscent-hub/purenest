import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TenderSection from '../components/TenderSection';
import Requirements from '../components/Requirements';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// CommercialPage -- extracted verbatim from the original Home component in App.js.
// Do NOT redesign this page. It must remain visually and functionally equivalent
// to the original Commercial homepage.

const CommercialPage = () => {
  React.useEffect(() => {
    const hasAutoScrolled = sessionStorage.getItem('hasAutoScrolled');
    if (!hasAutoScrolled) {
      const timer = setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          // Smooth scroll to services after 3 seconds of viewing the hero
          servicesSection.scrollIntoView({ behavior: 'smooth' });
          sessionStorage.setItem('hasAutoScrolled', 'true');
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="fade-in">
      <SEO
        title="Commercial Cleaning"
        description="Professional cleaning services and facility management solutions tailored for commercial and institutional environments in New Zealand."
        path="/commercial"
      />
      <Hero />
      <Services />
      <Testimonials />
      <TenderSection />
      <Requirements />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default CommercialPage;
