
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadCriticalAssets, prefetchRoutes } from './utils/preloadAssets';

// Preload critical assets for performance
preloadCriticalAssets();
prefetchRoutes();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
