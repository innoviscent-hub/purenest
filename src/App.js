import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import TenderSection from './components/TenderSection';
import Requirements from './components/Requirements';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import { HelmetProvider } from 'react-helmet-async';
import AnalyticsTracker from './components/AnalyticsTracker';
import SEO from './components/SEO';

// Pages
import ServicesPage from './pages/ServicesPage';
import TenderPage from './pages/TenderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const ServicesRoute = () => <><ServicesPage /><Footer /></>;
const TenderRoute = () => <><TenderPage /><Footer /></>;
const AboutRoute = () => <><AboutPage /><Footer /></>;
const ContactRoute = () => <><ContactPage /><Footer /></>;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnalyticsTracker />
        <NavbarWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesRoute />} />
        <Route path="/projects" element={<TenderRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
      </Router>
    </HelmetProvider>
  );
}

const NavbarWrapper = () => {
  const location = useLocation();
  // We can add logic here to pass dark={true} for specific routes if needed.
  // For now, keeping it default as most pages have dark heroes.
  return <Navbar />;
};

const Home = () => {
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
        title="Home"
        description="Professional cleaning services and facility management solutions tailored for commercial and institutional environments in New Zealand."
        path="/"
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

export default App;
