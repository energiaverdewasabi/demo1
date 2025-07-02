import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload the logo image
  const logoImg = new Image();
  logoImg.src = '/WhatsApp_Image_2025-06-26_at_19.55.53__1_-removebg-preview copy copy.png';
  
  // Preload critical fonts
  if ('fonts' in document) {
    document.fonts.ready.then(() => {
      console.log('Fonts loaded');
    });
  }
};

// Initialize performance optimizations
const initPerformanceOptimizations = () => {
  // Enable passive event listeners
  if ('addEventListener' in window) {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
      if (typeof options === 'boolean') {
        options = { capture: options, passive: true };
      } else if (typeof options === 'object' && options !== null) {
        options.passive = options.passive !== false;
      } else {
        options = { passive: true };
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
  }

  // Optimize scroll performance
  let ticking = false;
  const optimizeScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        ticking = false;
      });
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', optimizeScroll, { passive: true });
  
  // Optimize resize performance
  let resizeTimer: number;
  const optimizeResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      // Resize logic here if needed
    }, 250);
  };
  
  window.addEventListener('resize', optimizeResize, { passive: true });
};

// Initialize app with performance optimizations
const initApp = () => {
  preloadCriticalResources();
  initPerformanceOptimizations();
  
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');
  
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Start the app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}