import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-Y7FCKS5Q4K";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
}
