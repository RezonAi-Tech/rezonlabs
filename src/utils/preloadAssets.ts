
/**
 * Utility to preload critical assets for better performance
 * Only runs in browser environment
 */

export const preloadCriticalAssets = () => {
  // Only execute in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const criticalAssets = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    // Add any other critical assets here
  ];
  
  criticalAssets.forEach(asset => {
    const link = document.createElement('link');
    Object.entries(asset).forEach(([key, value]) => {
      if (value !== undefined) {
        link.setAttribute(key, value);
      }
    });
    document.head.appendChild(link);
  });
};

/**
 * Prefetch critical routes for faster navigation
 * Only runs in browser environment
 */
export const prefetchRoutes = () => {
  // Only execute in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  
  const routesToPrefetch = [
    '/services',
    '/pricing',
    '/contact'
  ];
  
  // Only prefetch in production to avoid unnecessary network requests during development
  if (process.env.NODE_ENV === 'production') {
    routesToPrefetch.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      link.as = 'document';
      document.head.appendChild(link);
    });
  }
};
