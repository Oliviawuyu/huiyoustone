import { useEffect, useState } from 'react';
import FloatingContact from './FloatingContact';
import FloatingSocialMedia from './FloatingSocialMedia';
import FloatingBackToTop from './FloatingBackToTop';
import FloatingWhatsApp from './FloatingWhatsApp';
import FloatingQuickLinks from './FloatingQuickLinks';

// This component manages all floating elements and their positioning
const FloatingElements = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't show some floating elements on mobile to avoid cluttering the UI
  if (isMobile) {
    return (
      <>
        <FloatingBackToTop />
        <FloatingWhatsApp />
      </>
    );
  }

  return (
    <>
      <FloatingBackToTop />
      <FloatingWhatsApp />

    </>
  );
};

export default FloatingElements;