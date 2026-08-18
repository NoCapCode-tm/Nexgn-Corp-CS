import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.jsx'; // <-- THIS IS THE MISSING LINE
import './index.css';

const rootElement = document.getElementById('root');
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If react-snap has already pre-rendered the HTML, hydrate it.
// Otherwise, render it normally (for standard local dev).
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  const root = createRoot(rootElement);
  root.render(app);
}