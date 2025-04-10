
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiziHero from '../components/servizi/ServiziHero';
import ApproccioSection from '../components/servizi/ApproccioSection';
import ServicesDetailSection from '../components/servizi/ServicesDetailSection';
import FeeSection from '../components/servizi/FeeSection';

const Servizi = () => {
  useEffect(() => {
    // Add logging to help with debugging
    console.log("Servizi page mounted");
    
    // Handle direct navigation to a hash URL
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      console.log(`Found hash in URL: #${targetId}`);
      
      setTimeout(() => {
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          console.log(`Found element with id ${targetId}, scrolling to it`);
          // Use a larger offset for better positioning
          const yOffset = -150;
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'instant' });
        } else {
          console.log(`Element with id ${targetId} not found`);
        }
      }, 300);
    }
    
    // Check for stored target in localStorage for direct navigation
    const scrollTarget = localStorage.getItem('scrollTarget');
    if (scrollTarget) {
      localStorage.removeItem('scrollTarget');
      
      requestAnimationFrame(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          // Increase the headerOffset to ensure the section title is fully visible
          const headerOffset = 150;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant'
          });
          console.log(`Scrolled to section: ${scrollTarget} with adjusted offset ${headerOffset}px`);
        }
      });
    }
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add larger offset to ensure the section title is fully visible
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiziHero onSectionClick={scrollToSection} />
        <ApproccioSection />
        <ServicesDetailSection />
        <FeeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
