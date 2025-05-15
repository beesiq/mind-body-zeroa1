
import React, { useEffect, useRef } from 'react';

const ScrollAnimation: React.FC = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // If element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('animated');
          
          // Add specific animations based on data attributes
          if (element.classList.contains('slide-in')) {
            element.classList.add('slide-animated');
          }
          
          if (element.classList.contains('fade-scale')) {
            element.classList.add('fade-scale-animated');
          }
          
          if (element.classList.contains('bounce')) {
            element.classList.add('bounce-animated');
          }
        }
      });
    };

    // Run once on load
    setTimeout(animateOnScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimation;
