
/**
 * Preloads critical assets to improve initial load performance
 */
export const preloadCriticalAssets = (): void => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  try {
    // Preload key images
    const imagesToPreload = [
      '/placeholder.svg',
      '/og-image.jpg',
      '/favicon.ico'
    ];
    
    imagesToPreload.forEach(imagePath => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imagePath;
      document.head.appendChild(link);
    });
    
    // Preload fonts if needed
    const fontsToPreload = [
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap'
    ];
    
    fontsToPreload.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontUrl;
      document.head.appendChild(link);
      
      // Also load the font
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = fontUrl;
      document.head.appendChild(styleLink);
    });
  } catch (error) {
    console.warn('Non-critical error during asset preloading:', error);
  }
};

/**
 * Prefetches routes for faster navigation
 */
export const prefetchRoutes = (): void => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;
  
  try {
    // Add prefetch links for key routes
    const routesToPrefetch = [
      '/',
      '/index',
      '/home'
    ];
    
    routesToPrefetch.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  } catch (error) {
    console.warn('Non-critical error during route prefetching:', error);
  }
};
