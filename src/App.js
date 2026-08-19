import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import AnalyticsTracker from './components/AnalyticsTracker';

// Pages
import ServicesPage from './pages/ServicesPage';
import TenderPage from './pages/TenderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceSelectorPage from './pages/ServiceSelectorPage';
import CommercialPage from './pages/CommercialPage';
import DomesticCleaningPage from './pages/DomesticCleaningPage';

const ServicesRoute = () => <><ServicesPage /><Footer /></>;
const TenderRoute = () => <><TenderPage /><Footer /></>;
const AboutRoute = () => <><AboutPage /><Footer /></>;
const ContactRoute = () => <><ContactPage /><Footer /></>;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigationType]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnalyticsTracker />
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<ServiceSelectorPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/domestic-cleaning" element={<DomesticCleaningPage />} />
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
  if (location.pathname === "/") {
    return null;
  }
  return <Navbar />;
};

export default App;
