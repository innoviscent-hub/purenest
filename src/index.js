import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// scripts/prerender.js writes fully-rendered HTML into build/**/index.html so crawlers
// (which never run this bundle) see real content. Browsers always run this script, so we
// render fresh here rather than hydrate: a snapshot-vs-hydrate text-node mismatch is a
// known false positive with browser-snapshot prerendering (no SSR comment markers between
// adjacent text nodes) and a plain render sidesteps it entirely.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
